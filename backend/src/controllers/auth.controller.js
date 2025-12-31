import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000
};

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ fullName, email, password: hashed });

  const token = generateToken({ id: user._id, role: user.role });

  res
    .cookie("token", token, cookieOptions)
    .status(201)
    .json({ user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken({ id: user._id, role: user.role });

  res
    .cookie("token", token, cookieOptions)
    .json({ user });
};

export const logout = (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production"
    })
    .json({ message: "Logged out successfully" });
};

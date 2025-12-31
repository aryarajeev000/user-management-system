import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword
  });

  res.status(201).json({
    token: generateToken({ id: user._id, role: user.role }),
    user
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  user.lastLogin = new Date();
  await user.save();

  res.json({
    token: generateToken({ id: user._id, role: user.role }),
    user
  });
};

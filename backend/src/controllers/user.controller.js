import User from "../models/user.model.js";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

export const updateProfile = async (req, res) => {
  const { fullName, email } = req.body;
  const userId = req.user.id;

  if (!fullName || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailExists = await User.findOne({
    email,
    _id: { $ne: userId },
  });

  if (emailExists) {
    return res.status(409).json({ message: "Email already in use" });
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { fullName, email },
    { new: true }
  ).select("-password");

  res.status(200).json(updatedUser);
};

export const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.user.id;

  if (!oldPassword || !newPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (newPassword.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  const user = await User.findById(userId);

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Old password is incorrect" });
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);
  await user.save();

  res.status(200).json({ message: "Password changed successfully" });
};

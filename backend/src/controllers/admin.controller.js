import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;

  const users = await User.find()
    .select("-password")
    .skip((page - 1) * limit)
    .limit(limit);

  res.json(users);
};

export const toggleUserStatus = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.status = user.status === "active" ? "inactive" : "active";
  await user.save();
  res.json(user);
};

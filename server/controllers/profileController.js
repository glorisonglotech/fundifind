const User = require("../models/user");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name || user.name;
  user.phone = req.body.phone || user.phone;
  user.location = req.body.location || user.location;
  if (req.file) user.portfolio.push(req.file.path);

  await user.save();
  res.json(user);
};

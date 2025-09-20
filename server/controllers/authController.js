const jwt = require("jsonwebtoken");
const User = require("../models/user");

const generateToken = (user) =>
  jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const profileImagePath = req.file ? req.file.path : null;

    const user = await User.create({
      name,
      email,
      password,
      role,
      profileImage: profileImagePath
    });

    res.status(201).json({ ...user._doc, token: generateToken(user) });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    token: generateToken(user),
    role: user.role,
    name: user.name,
    isVerified: user.isVerified
  });
};

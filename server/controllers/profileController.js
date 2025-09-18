const User = require("../models/user");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      name: user.name,
      email: user.email,  // Adding email to the response
      phone: user.phone,
      location: user.location,
      portfolio: user.portfolio,
      role: user.role,
      verified: user.verified,
      rating: user.rating || 4.9,
      reviews: user.reviews || 32,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name || user.name;
  user.phone = req.body.phone || user.phone;
  user.location = req.body.location || user.location;

  if (req.file) {
    user.portfolio = [req.file.path]; 
  }

  await user.save();

  res.json({
    name: user.name,
    phone: user.phone,
    location: user.location,
    portfolio: user.portfolio,
    role: user.role,
    verified: user.verified,
    rating: user.rating || 4.9,
    reviews: user.reviews || 32,
  });
};


const User = require("../models/user");
const Service = require("../models/service");
const Booking = require("../models/booking");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.getAllServices = async (req, res) => {
  const services = await Service.find().populate("fundi", "name email");
  res.json(services);
};

exports.getAllBookings = async (req, res) => {
  const bookings = await Booking.find().populate("recruiter fundi service");
  res.json(bookings);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

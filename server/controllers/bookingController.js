const Booking = require("../models/booking");

exports.createBooking = async (req, res) => {
  const booking = await Booking.create({
    recruiter: req.user._id,
    fundi: req.body.fundi,
    service: req.body.service,
    date: req.body.date,
    time: req.body.time,
    amount: req.body.amount,
  });
  res.status(201).json(booking);
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ recruiter: req.user._id })
    .populate("service")
    .populate("fundi", "name location");
  res.json(bookings);
};

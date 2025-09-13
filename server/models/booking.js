const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  recruiter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  fundi: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  date: String,
  time: String,
  amount: Number,
  status: { type: String, default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);

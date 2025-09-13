const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  fundi: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skill: String,
  description: String,
  rate: Number,
  rating: Number,
  reviews: Number,
}, { timestamps: true });

module.exports = mongoose.model("Service", serviceSchema);

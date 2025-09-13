const express = require("express");
const {
  createBooking,
  getMyBookings,
} = require("../controllers/bookingController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new booking (recruiter only)
router.post("/", protect, createBooking);

// Get bookings for the logged-in recruiter
router.get("/", protect, getMyBookings);

module.exports = router;

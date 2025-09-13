const express = require("express");
const {
  getAllUsers,
  getAllServices,
  getAllBookings,
  deleteUser,
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

const router = express.Router();

// All routes below require admin access
router.use(protect, isAdmin);

// Get all users
router.get("/users", getAllUsers);

// Get all services
router.get("/services", getAllServices);

// Get all bookings
router.get("/bookings", getAllBookings);

// Delete a user by ID
router.delete("/user/:id", deleteUser);

module.exports = router;

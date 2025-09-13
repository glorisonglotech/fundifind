const express = require("express");
const {
  createService,
  getServices,
} = require("../controllers/serviceController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Fundi creates a service
router.post("/", protect, createService);

// Public route to get all services
router.get("/", getServices);

module.exports = router;

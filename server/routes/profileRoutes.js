const express = require("express");
const {
  getProfile,
  updateProfile,
  getFundis,
} = require("../controllers/profileController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// GET /api/profile → fetch logged-in user's profile
router.get("/", protect, getProfile);

// GET /api/profile/fundis → fetch list of fundis
router.get("/fundis", protect, getFundis);

// PUT /api/profile → update profile with image
router.put("/", protect, upload.single("portfolio"), updateProfile);

module.exports = router;

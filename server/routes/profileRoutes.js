const express = require("express");
const { getProfile, updateProfile, getFundis } = require("../controllers/profileController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/", protect, getProfile);
router.get("/",protect,getFundis);
router.put("/", protect, upload.single("portfolio"), updateProfile);

module.exports = router;

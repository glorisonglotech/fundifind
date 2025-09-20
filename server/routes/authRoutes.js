const { register, login } = require("../controllers/authController");
const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post("/register", upload.single("portfolio"), register);
router.post("/login", login);

module.exports = router;

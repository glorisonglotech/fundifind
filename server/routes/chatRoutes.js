const express = require("express");
const {
  sendMessage,
  getConversation,
  markAsRead,
} = require("../controllers/chatController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Send a message
router.post("/", protect, sendMessage);

// Get conversation between logged-in user and another user
router.get("/:userId", protect, getConversation);

// Mark a message as read
router.put("/read/:messageId", protect, markAsRead);

module.exports = router;

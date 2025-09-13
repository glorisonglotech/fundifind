const Message = require("../models/message");

exports.sendMessage = async (req, res) => {
  const { receiver, content } = req.body;
  const message = await Message.create({ sender: req.user._id, receiver, content });
  res.status(201).json(message);
};

exports.getConversation = async (req, res) => {
  const { userId } = req.params;
  const messages = await Message.find({
    $or: [
      { sender: req.user._id, receiver: userId },
      { sender: userId, receiver: req.user._id },
    ],
  }).sort({ createdAt: 1 });
  res.json(messages);
};

exports.markAsRead = async (req, res) => {
  const { messageId } = req.params;
  const message = await Message.findById(messageId);
  if (!message || message.receiver.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  message.read = true;
  await message.save();
  res.json({ message: "Marked as read" });
};

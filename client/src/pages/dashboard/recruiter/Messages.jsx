import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

function Messages() {
  const [conversations] = useState([
    { id: 'room1', name: "Alice", lastMessage: "Thanks for the quote!" },
    { id: 'room2', name: "Brian", lastMessage: "Can we reschedule?" },
  ]);
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL);

    // Join room when conversation changes
    if (selectedConversation) {
      socketRef.current.emit('joinRoom', selectedConversation.id);
      setMessages([]); // Optionally clear messages on room change
    }

    // Listen for incoming messages
    socketRef.current.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [selectedConversation]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const messageObj = { sender: "You", text: newMessage };
      socketRef.current.emit('sendMessage', {
        roomId: selectedConversation.id,
        message: messageObj,
      });
      setMessages((prev) => [...prev, messageObj]);
      setNewMessage("");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen bg-white">
      {/* Sidebar */}
      <aside className="bg-pink-50 border-r border-pink-200 p-4">
        <h2 className="text-xl font-bold text-pink-600 mb-4">Conversations</h2>
        <ul className="space-y-2">
          {conversations.map(conv => (
            <li
              key={conv.id}
              onClick={() => setSelectedConversation(conv)}
              className={`p-2 rounded cursor-pointer hover:bg-pink-100 ${
                selectedConversation.id === conv.id ? "bg-pink-200" : ""
              }`}
            >
              <div className="font-semibold text-gray-800">{conv.name}</div>
              <div className="text-sm text-gray-600">{conv.lastMessage}</div>
            </li>
          ))}
        </ul>
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          New Message
        </button>
      </aside>

      {/* Chat Window */}
      <main className="md:col-span-2 flex flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-bold text-pink-600 mb-2">
            Chat with {selectedConversation.name}
          </h3>
          <div className="space-y-3 max-h-[70vh] overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded max-w-md ${
                  msg.sender === "You"
                    ? "bg-pink-500 text-white self-end ml-auto"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="mt-4 border-t pt-4">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            rows={2}
            placeholder="Type your message..."
            className="w-full p-2 border rounded resize-none"
          />
          <button
            onClick={sendMessage}
            className="mt-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

export default Messages;
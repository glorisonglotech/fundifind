import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BellIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({ onNavigate }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear auth token
    console.log("User logged out");
    navigate("/"); // Redirect to homepage
  };

  const handleNavigate = (section) => {
    onNavigate(section);
    setIsProfileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-pink-200 px-4 py-3">
      <div className="flex justify-between items-center mx-auto">
        <div className="flex items-center gap-2 text-pink-500 font-bold text-xl">
          <img
            src="https://5a38bbf2bd41a541239fd37d7d4d838d.cdn.bubble.io/cdn-cgi/image/w=48,h=48,f=auto,dpr=1,fit=contain/f1757512360068x441546910684767170/logo.webp"
            alt="FundiFind Logo"
            className="w-8 h-8"
          />
          FundiFind
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <button onClick={() => onNavigate("profile")} className="text-gray-800 hover:text-pink-500 transition">
            My Profile
          </button>
          <button onClick={() => onNavigate("messages")} className="text-gray-800 hover:text-pink-500 transition">
            Messages
          </button>
          <button
            onClick={() => onNavigate("notifications")}
            className="text-gray-800 hover:text-pink-500 transition flex items-center gap-1"
          >
            <BellIcon className="w-5 h-5 text-pink-500" />
            Notifications
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg font-medium"
          >
            Logout
          </button>
        </div>

        <div className="flex md:hidden gap-4 items-center text-pink-500">
          <button onClick={() => onNavigate("messages")}>
            <ChatBubbleLeftRightIcon className="w-6 h-6" />
          </button>
          <button onClick={() => onNavigate("notifications")}>
            <BellIcon className="w-6 h-6" />
          </button>
          <div className="relative">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <UserCircleIcon className="w-6 h-6" />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-pink-200 rounded shadow-md z-50">
                <button
                  onClick={() => handleNavigate("profile")}
                  className="block w-full text-left px-4 py-2 hover:bg-pink-100 text-gray-800"
                >
                  My Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-pink-100 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

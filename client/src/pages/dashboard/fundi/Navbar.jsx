import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-pink-200 px-4 py-3">
      <div className="flex justify-between items-center  mx-auto">
        <div className="flex items-center gap-2 text-pink-500 font-bold text-xl">
          <img
            src="https://5a38bbf2bd41a541239fd37d7d4d838d.cdn.bubble.io/cdn-cgi/image/w=48,h=48,f=auto,dpr=1,fit=contain/f1757512360068x441546910684767170/logo.webp"
            alt="FundiFind Logo"
            className="w-8 h-8"
          />
          FundiFind
        </div>

        <button
          className="text-pink-500 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        <div className="hidden md:flex gap-6 items-center">
          <a
            href="#home"
            className="text-gray-800 hover:text-pink-500 transition"
          >
            Home
          </a>
          <a
            href="#profile"
            className="text-gray-800 hover:text-pink-500 transition"
          >
            My Profile
          </a>
          <a
            href="#messages"
            className="text-gray-800 hover:text-pink-500 transition"
          >
            Messages
          </a>
        
          <a
            href="#notifications"
            className="text-gray-800 hover:text-pink-500 transition flex items-center gap-1"
          >
            <BellIcon className="w-5 h-5 text-pink-500" />
            Notifications
          </a>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg font-medium"
          >
            Logout
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-4 pt-4 border-t border-pink-200 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              className="text-gray-800 hover:text-pink-500 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#profile"
              className="text-gray-800 hover:text-pink-500 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Profile
            </a>
            <a
              href="#messages"
              className="text-gray-800 hover:text-pink-500 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Messages
            </a>
            <a
              href="#notifications"
              className="text-gray-800 hover:text-pink-500 transition py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <BellIcon className="w-5 h-5 text-pink-500" />
              Notifications
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-pink-200">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '@/assets/logo.jpg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-pink-200 px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center text-pink-500 font-bold text-xl">
          <img
            src="https://5a38bbf2bd41a541239fd37d7d4d838d.cdn.bubble.io/cdn-cgi/image/w=48,h=48,f=auto,dpr=1,fit=contain/f1757512360068x441546910684767170/logo.webp"
            alt=""
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
          <a href="#how-it-works" className="text-gray-800 hover:text-pink-500 transition">
            How It Works
          </a>
          <a href="#features" className="text-gray-800 hover:text-pink-500 transition">
            Features
          </a>
          <a href="#testimonials" className="text-gray-800 hover:text-pink-500 transition">
            Reviews
          </a>
          <a href="#contact" className="text-gray-800 hover:text-pink-500 transition">
            Contact
          </a>
          <Link to="/login" className="text-pink-500 hover:text-pink-600 px-4 py-2 rounded">
            Sign In
          </Link>
          <Link to="/signup" className="bg-pink-500 text-white hover:bg-pink-600 px-4 py-2 rounded">
            Get Started
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-4 pt-4 border-t border-pink-200">
          <div className="flex flex-col gap-4">
            <a
              href="#how-it-works"
              className="text-gray-800 hover:text-pink-500 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-gray-800 hover:text-pink-500 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-pink-500 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-pink-500 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-pink-200">
              <Link to="/login" className="text-pink-500 hover:text-pink-600 text-left px-4 py-2">
                Sign In
              </Link>
              <Link to="/signup" className="bg-pink-500 text-white hover:bg-pink-600 px-4 py-2 rounded">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

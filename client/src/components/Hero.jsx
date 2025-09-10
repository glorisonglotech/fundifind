import React from "react";
import {
  MapPinIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 opacity-40" />
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/30 backdrop-blur-md opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white/30 backdrop-blur-md opacity-40 animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white/30 backdrop-blur-md opacity-25 animate-pulse delay-500" />

      <div className="relative max-w-6xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find Skilled{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              Fundis
            </span>
            <br />
            in Kenya
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with verified craftsmen, artisans, and service providers.
            Get quality work done with trust, transparency, and convenience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 py-6">
          <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md rounded-full px-4 py-2 shadow-sm">
            <ShieldCheckIcon className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-medium text-gray-800">
              ID Verified
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md rounded-full px-4 py-2 shadow-sm">
            <UsersIcon className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-medium text-gray-800">
              10,000+ Fundis
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md rounded-full px-4 py-2 shadow-sm">
            <MapPinIcon className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-medium text-gray-800">
              All Counties
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button className="bg-pink-500 text-white hover:bg-pink-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            Hire a Fundi
          </button>
          <button className="bg-white/30 backdrop-blur-md text-pink-500 hover:bg-white/40 px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition border border-pink-300">
            Become a Fundi
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 text-center shadow-md hover:scale-105 transition">
            <div className="text-3xl font-bold text-pink-500 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 text-center shadow-md hover:scale-105 transition">
            <div className="text-3xl font-bold text-pink-500 mb-2">100+</div>
            <div className="text-gray-600">Service Categories</div>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 text-center shadow-md hover:scale-105 transition">
            <div className="text-3xl font-bold text-pink-500 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

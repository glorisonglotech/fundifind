import React from "react";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/outline";

const FundiCard = ({
  name,
  skill,
  description,
  rating,
  reviews,
  rate,
  verified,
  profileImage, 
}) => {
  return (
    <div
      className={`bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-md hover:scale-105 transition ${
        verified ? "border border-pink-500" : "border border-gray-300"
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-14 h-14 rounded-full object-cover border border-pink-300"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          {verified && (
            <div className="flex items-center gap-1">
              <CheckBadgeIcon className="w-4 h-4 text-pink-500" />
              <span className="text-xs text-pink-500 font-medium">Verified</span>
            </div>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold text-pink-500 mb-2">{skill}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center gap-2 mb-2">
        <StarIcon className="w-5 h-5 text-yellow-500" />
        <span className="text-yellow-600 font-semibold">{rating}</span>
        <span className="text-sm text-gray-600">({reviews} reviews)</span>
      </div>
      <div className="text-sm text-gray-600 mb-4">KSh {rate}/hr</div>
      <div className="flex gap-4">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-pink-600 transition">
          View Profile
        </button>
        <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded-md cursor-pointer hover:bg-pink-100 transition">
          Message
        </button>
      </div>
    </div>
  );
};

export default FundiCard;

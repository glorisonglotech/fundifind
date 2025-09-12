import React from 'react';
import { CheckBadgeIcon, PencilSquareIcon, StarIcon } from '@heroicons/react/24/solid';

function ProfileHeader() {
  const name = "Jane Mwangi";
  const profileImage = "/images/jane.jpg"; 
  const isVerified = true;
  const rating = 4.9;
  const reviewCount = 32;

  return (
    <section className=" bg-pink-400 text-white py-6 px-4 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        <div className="flex items-center gap-4">
          <img
            src={profileImage}
            alt={`${name}'s profile`}
            className="w-20 h-20 rounded-full border-2 border-white object-cover"
          />
          <button
            onClick={() => console.log("Edit profile clicked")}
            className="flex items-center gap-1 bg-white text-pink-500 px-3 py-1 rounded hover:bg-pink-100 transition"
          >
            <PencilSquareIcon className="w-5 h-5" />
            Edit Profile image
          </button>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          {isVerified && (
            <div className="flex items-center gap-1 text-green-200 font-medium">
              <CheckBadgeIcon className="w-5 h-5" />
              Verified Fundi
            </div>
          )}
          <div className="flex items-center gap-1 text-yellow-300 font-semibold">
            <StarIcon className="w-5 h-5" />
            {rating}/5 ({reviewCount} reviews)
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;

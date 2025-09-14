import React, { useEffect, useState, useRef } from 'react';
import { CheckBadgeIcon, PencilSquareIcon, StarIcon } from '@heroicons/react/24/solid';

function ProfileHeader() {
  const [user, setUser] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProfile();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('portfolio', file);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/profile`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload image');
      const updatedUser = await response.json();
      setUser(updatedUser);
    } catch (err) {
      console.error(err.message);
    }
  };

  if (!user) return null;

  const { name, portfolio, role, verified, rating = 4.9, reviews = 32 } = user;
  const profileImage = portfolio?.[0] || '/images/default.jpg';

  return (
    <section className="bg-pink-400 text-white py-6 px-4 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex items-center gap-4">
          <img
            src={profileImage}
            alt={`${name}'s profile`}
            className="w-20 h-20 rounded-full border-2 border-white object-cover"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="flex items-center gap-1 bg-white text-pink-500 px-3 py-1 rounded hover:bg-pink-100 transition"
          >
            <PencilSquareIcon className="w-5 h-5" />
            Edit Profile image
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          {verified && (
            <div className="flex items-center gap-1 text-green-200 font-medium">
              <CheckBadgeIcon className="w-5 h-5" />
              Verified Fundi
            </div>
          )}
          <div className="flex items-center gap-1 text-yellow-300 font-semibold">
            <StarIcon className="w-5 h-5" />
            {rating}/5 ({reviews} reviews)
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;

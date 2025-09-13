import React, { useEffect, useState, useRef } from 'react';
import { CheckBadgeIcon, PencilSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import api from '@/lib/axois';

function ProfileHeader() {
  const [user, setUser] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await api.get('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error('Failed to fetch profile:', err);
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
      const res = await api.put('/api/profile', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setUser(res.data);
    } catch (err) {
      console.error('Failed to upload image:', err);
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

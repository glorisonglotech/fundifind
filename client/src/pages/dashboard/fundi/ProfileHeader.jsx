import React, { useEffect, useState, useRef } from 'react';
import { CheckBadgeIcon, PencilSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import { useUser } from '@/context/UserContext';

function ProfileHeader() {
  const { user, login } = useUser();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error('Failed to load profile');
        const profileData = await response.json();
        login(profileData);
      } catch (err) {
        setError('Unable to fetch profile. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (!user || !user.email) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [user, login]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('portfolio', file);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/profile`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      const updatedUser = await response.json();
      login(updatedUser);
    } catch (err) {
      setError('Failed to upload image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="bg-pink-400 text-white py-6 px-4 shadow-md">
        <div className="flex justify-center items-center space-x-2">
          <div className="animate-spin border-t-2 border-white w-8 h-8 rounded-full"></div>
          <span>Loading...</span>
        </div>
      </section>
    );
  }

  if (!user) return null;

  const {
    name,
    email,
    portfolio,
    verified,
    rating = 4.9,
    reviews = 32,
  } = user;

  const profileImage = portfolio?.length > 0
    ? `${import.meta.env.VITE_API_BASE_URL}/${portfolio[0]}`
    : '/images/default.jpg';

  return (
    <section className="bg-pink-400 text-white py-6 px-4 shadow-md">
      {error && <div className="bg-red-600 text-white p-3 rounded mb-4">{error}</div>}
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
          <p className="text-sm text-white/80">{email}</p>
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

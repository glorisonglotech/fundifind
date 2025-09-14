import React, { useState, useEffect } from "react";
import { CheckBadgeIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import HowItWorks from "@/components/HowItWorks";

function ProfileHeader() {
  const [name, setName] = useState(" ");
  const [profileImage, setProfileImage] = useState("/images/jane.jpg");
  const [isVerified, setIsVerified] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    const storedVerified = localStorage.getItem("isVerified");
    console.log(
      "ProfileHeader loaded. Username:",
      storedName,
      "Verified:",
      storedVerified
    );
    setName(storedName || "");
    setIsVerified(storedVerified === "true");
  }, []);
  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated name:", name);
    console.log("Updated profile image:", profileImage);
  };

  return (
    <>
      <section className="bg-pink-400 text-white py-6 px-4 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Profile Image + Edit Button */}
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt={`${name}'s profile`}
              className="w-20 h-20 rounded-full border-2 border-white object-cover"
            />
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-1 bg-white text-pink-500 px-3 py-1 rounded hover:bg-pink-100 transition"
            >
              <PencilSquareIcon className="w-5 h-5" />
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* Recruiter Info */}
          <div className="flex flex-col md:items-end gap-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-black px-3 py-1 rounded w-full md:w-2/3"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="text-black"
                />
                <button
                  onClick={handleSave}
                  className="mt-2 bg-white text-pink-500 px-4 py-1 rounded hover:bg-pink-100 transition"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold">{name}</h1>
                {isVerified && (
                  <div className="flex items-center gap-1 text-green-200 font-medium">
                    <CheckBadgeIcon className="w-5 h-5" />
                    Verified Recruiter
                  </div>
                )}
                <p className="text-sm text-white/90">
                  Connecting top talent with trusted Fundis across Kenya
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      <HowItWorks />
    </>
  );
}

export default ProfileHeader;

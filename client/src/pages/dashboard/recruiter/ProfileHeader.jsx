import React, { useState, useEffect, useRef } from "react";
import { CheckBadgeIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { useUser } from "@/context/UserContext"; // Assuming context is used for global state management
import HowItWorks from "@/components/HowItWorks";

function ProfileHeader() {
  const { user, login } = useUser(); // Assuming user context provides login and user data
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user?.name || "No Name");
  const [newProfileImage, setNewProfileImage] = useState(user?.portfolio?.[0] || "/images/jane.jpg");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fileInputRef = useRef();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found, please log in.");
          setLoading(false);
          return;
        }

        // Fetch the profile data from the API
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data.");
        }

        const profileData = await response.json();

        // Debug: Log the profile data to inspect it
        console.log("Fetched Profile Data:", profileData);

        // Ensure fallback for missing fields
        const validProfileData = {
          name: profileData?.name || "No Name",
          portfolio: profileData?.portfolio || ["/images/jane.jpg"],
          role: profileData?.role || "recruiter",
          verified: profileData?.verified || false,
          email: profileData?.email || "",
          rating: profileData?.rating || 0,
        };

        // Now that we have valid profile data, update the user context
        login(validProfileData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile. Please try again.");
        setLoading(false);
      }
    };

    // Fetch profile data if it's not already in context
    if (!user || !user.name) {
      fetchProfileData(); // Fetch profile if it's missing from the context
    } else {
      setLoading(false); // If user data is already available, skip fetching
    }
  }, [user, login]); // Runs when `user` or `login` changes

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProfileImage(imageUrl);
    }
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", newName);
      if (fileInputRef.current.files[0]) {
        formData.append("portfolio", fileInputRef.current.files[0]);
      }

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const updatedUser = await response.json();
      login(updatedUser); // Update context with new user data

      console.log("Profile updated:", newName, newProfileImage);
    } catch (err) {
      console.error("Error updating profile:", err.message);
    }
  };

  // Loading state (before the profile data is fetched)
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

  // Error state (if there was an error fetching the profile)
  if (error) {
    return (
      <section className="bg-pink-400 text-white py-6 px-4 shadow-md">
        <div className="bg-red-600 text-white p-3 rounded mb-4">{error}</div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-pink-400 text-white py-6 px-4 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Profile Image + Edit Button */}
          <div className="flex items-center gap-4">
            <img
              src={newProfileImage}
              alt={`${newName}'s profile`}
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

          {/* User Info */}
          <div className="flex flex-col md:items-end gap-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="text-black px-3 py-1 rounded w-full md:w-2/3"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  className="text-black"
                  onChange={handleImageChange}
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
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                  <p>{user?.email}</p>
                {user?.verified && (
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

import React, { useState, useEffect } from "react";
import FundiCard from "@/components/FundiCard"; // Adjust path if needed

const FindFundiSection = () => {
  const [location, setLocation] = useState("");
  const [skill, setSkill] = useState("All Skills");
  const [sort, setSort] = useState("Rating");
  const [fundis, setFundis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFundis = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (location) params.append("location", location);
      if (skill !== "All Skills") params.append("skill", skill);
      if (sort) params.append("sort", sort.toLowerCase());

      const token = localStorage.getItem("token"); // If route is protected

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/profile/fundis?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch fundis.");
      }

      const data = await response.json();
      setFundis(data);
    } catch (err) {
      setError("Failed to load fundis. Please try again.");
      console.error("Error fetching fundis:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFundis();
  }, [location, skill, sort]);

  if (loading) {
    return (
      <section className="w-full px-4 py-8 max-w-screen-xl mx-auto overflow-hidden">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center sm:text-left">
          Find Your Perfect Fundi
        </h2>
        <div className="flex justify-center items-center space-x-2">
          <div className="animate-spin border-t-2 border-white w-8 h-8 rounded-full"></div>
          <span>Loading...</span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full px-4 py-8 max-w-screen-xl mx-auto overflow-hidden">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center sm:text-left">
          Find Your Perfect Fundi
        </h2>
        <div className="bg-red-600 text-white p-3 rounded mb-4">{error}</div>
      </section>
    );
  }

  return (
    <section className="w-full px-4 py-8 max-w-screen-xl mx-auto overflow-hidden">
      <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center sm:text-left">
        Find Your Perfect Fundi
      </h2>

      {/* Filters */}
      <div className="bg-white border border-pink-200 rounded-lg p-4 mb-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Enter location or area"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <select
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            <option>All Skills</option>
            <option>Carpentry</option>
            <option>Plumbing</option>
            <option>Cleaning</option>
            <option>Painting</option>
            <option>Electrical</option>
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            <option>Rating</option>
            <option>Price</option>
          </select>
        </div>
        <div className="mt-4 flex justify-center sm:justify-start">
          <button
            className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 w-full sm:w-auto"
            onClick={fetchFundis}
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Fundi Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {fundis.map((fundi, index) => (
          <FundiCard
            key={index}
            name={fundi.name}
            skill={fundi.skills ? fundi.skills.join(", ") : "N/A"}
            rating={fundi.rating || 4.9}
            reviews={fundi.reviews || 32}
            location={fundi.location}
          />
        ))}
      </div>
    </section>
  );
};

export default FindFundiSection;

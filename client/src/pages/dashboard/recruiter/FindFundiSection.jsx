import React, { useState } from "react";
import FundiCard from "@/components/FundiCard"; // Adjust path if needed

const fundis = [
  {
    skill: "Carpentry",
    rating: 4.7,
    reviews: 145,
    rate: 50,
    description: "Expert carpenter with custom furniture design abilities.",
  },
  {
    skill: "Plumbing",
    rating: 4.5,
    reviews: 120,
    rate: 45,
    description: "Master plumber with over 20 years of experience.",
  },
  {
    skill: "Cleaning",
    rating: 4.3,
    reviews: 66,
    rate: 35,
    description: "Dedicated cleaner with a strong focus on non-toxic methods.",
  },
  {
    skill: "Painting",
    rating: 4.2,
    reviews: 75,
    rate: 40,
    description: "Professional painter known for detailed and vibrant work.",
  },
  {
    skill: "Electrical",
    rating: 4.1,
    reviews: 98,
    rate: 55,
    description: "Licensed electrician specialized in solar panel installation.",
  },
];

const FindFundiSection = () => {
  const [location, setLocation] = useState("");
  const [skill, setSkill] = useState("All Skills");
  const [sort, setSort] = useState("Rating");

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
          <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 w-full sm:w-auto">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Fundi Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {fundis.map((fundi, index) => (
          <FundiCard
            key={index}
            skill={fundi.skill}
            rating={fundi.rating}
            reviews={fundi.reviews}
            rate={fundi.rate}
            description={fundi.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FindFundiSection;

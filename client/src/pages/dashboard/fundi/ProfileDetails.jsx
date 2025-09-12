import React, { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

function ProfileDetails() {
  const [aboutMe, setAboutMe] = useState(
    "Experienced electrician and plumber with over 10 years of hands-on work in residential and commercial projects."
  );
  const [skills, setSkills] = useState(["Electrical", "Plumbing"]);
  const [portfolio, setPortfolio] = useState([
    { title: "Wiring Project", image: "/images/work1.jpg" },
    { title: "Bathroom Renovation", image: "/images/work2.jpg" },
  ]);
  const [availability, setAvailability] = useState(true);
  const [hourlyRate, setHourlyRate] = useState("KES 1500 per hour");
  const [reviews] = useState([
    { user: "Alice", comment: "Very professional and quick!" },
    { user: "Brian", comment: "Excellent work on our kitchen lighting." },
  ]);

  const [editSection, setEditSection] = useState(null);
  const [newProject, setNewProject] = useState({ title: "", image: "" });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProject((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const addNewProject = () => {
    if (newProject.title && newProject.image) {
      setPortfolio([...portfolio, newProject]);
      setNewProject({ title: "", image: "" });
      setEditSection(null);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-md">
      <div className="bg-pink-50 p-4 rounded border border-pink-200 relative">
        <h2 className="text-xl font-semibold text-pink-600 mb-2">About Me</h2>
        {editSection === "about" ? (
          <>
            <textarea
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              className="w-full p-2 border rounded"
              rows={4}
            />
            <button
              onClick={() => setEditSection(null)}
              className="mt-2 bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-700">{aboutMe}</p>
            <button
              onClick={() => setEditSection("about")}
              className="absolute top-4 right-4 flex items-center gap-1 text-pink-500 hover:text-pink-600 text-sm"
            >
              <PencilSquareIcon className="w-4 h-4" />
              Edit
            </button>
          </>
        )}
      </div>

      <div className="bg-pink-50 p-4 rounded border border-pink-200 relative">
        <h2 className="text-xl font-semibold text-pink-600 mb-2">My Skills</h2>
        {editSection === "skills" ? (
          <>
            <input
              type="text"
              value={skills.join(", ")}
              onChange={(e) =>
                setSkills(e.target.value.split(",").map((s) => s.trim()))
              }
              className="w-full p-2 border rounded"
              placeholder="Comma-separated skills"
            />
            <button
              onClick={() => setEditSection(null)}
              className="mt-2 bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <ul className="list-disc list-inside text-gray-700">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <button
              onClick={() => setEditSection("skills")}
              className="absolute top-4 right-4 flex items-center gap-1 text-pink-500 hover:text-pink-600 text-sm"
            >
              <PencilSquareIcon className="w-4 h-4" />
              Edit
            </button>
          </>
        )}
      </div>

      <div className="bg-pink-50 p-4 rounded border border-pink-200 md:col-span-2 relative">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">
          My Work Portfolio
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {portfolio.map((project, index) => (
            <div key={index} className="rounded overflow-hidden shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-gray-700 text-sm">{project.title}</div>
            </div>
          ))}
        </div>

        {editSection === "portfolio" ? (
          <div className="space-y-2">
            <input
              type="text"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
              className="w-full p-2 border rounded"
              placeholder="Project title"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded"
            />
            {newProject.image && (
              <img
                src={newProject.image}
                alt="Preview"
                className="w-full h-32 object-cover rounded"
              />
            )}
            <button
              onClick={addNewProject}
              className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
            >
              Add Project
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditSection("portfolio")}
            className="absolute top-4 right-4 flex items-center gap-1 text-pink-500 hover:text-pink-600 text-sm"
          >
            <PencilSquareIcon className="w-4 h-4" />
            Edit
          </button>
        )}
      </div>

      <div className="bg-pink-50 p-4 rounded border border-pink-200 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-pink-600">
          Availability Status
        </h2>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={availability}
              onChange={() => setAvailability(!availability)}
              className="sr-only"
            />
            <div
              className={`block w-10 h-6 rounded-full ${
                availability ? "bg-green-500" : "bg-gray-400"
              }`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                availability ? "translate-x-4" : ""
              }`}
            ></div>
          </div>
          <span className="ml-3 text-gray-700">
            {availability ? "Available" : "Unavailable"}
          </span>
        </label>
      </div>

      <div className="bg-pink-50 p-4 rounded border border-pink-200 relative">
        <h2 className="text-xl font-semibold text-pink-600 mb-2">
          Hourly Rate
        </h2>
        {editSection === "rate" ? (
          <>
            <input
              type="text"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={() => setEditSection(null)}
              className="mt-2 bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-700">{hourlyRate}</p>
            <button
              onClick={() => setEditSection("rate")}
              className="absolute top-4 right-4 flex items-center gap-1 text-pink-500 hover:text-pink-600 text-sm"
            >
              <PencilSquareIcon className="w-4 h-4" />
              Edit
            </button>
          </>
        )}
      </div>

      <div className="bg-pink-50 p-4 rounded border border-pink-200 md:col-span-2">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">
          Recent Reviews
        </h2>
        <div className="space-y-3">
          {reviews.map((review, index) => (
            <div key={index} className="border-b pb-2 text-gray-700">
              <strong>{review.user}</strong>: {review.comment}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileDetails;

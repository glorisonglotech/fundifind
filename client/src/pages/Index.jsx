import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import FundiCard from "@/components/FundiCard";
import React from "react";

function Index() {
  const verifiedFundis = [
    {
      name: "Master Plumber",
      skill: "Plumbing",
      description: "Master plumber with over 20 years of experience.",
      rating: 4.5,
      reviews: 120,
      rate: 45,
      verified: true,
      profileImage:
        "https://images.unsplash.com/photo-1613060492217-7f6b6b6b6b6b?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Solar Electrician",
      skill: "Electrical",
      description: "Licensed electrician specialized in solar panel installation.",
      rating: 4.1,
      reviews: 98,
      rate: 55,
      verified: true,
      profileImage:
        "https://images.unsplash.com/photo-1621905252441-3f6b6b6b6b6b?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Furniture Carpenter",
      skill: "Carpentry",
      description: "Expert carpenter with custom furniture design abilities.",
      rating: 4.7,
      reviews: 145,
      rate: 50,
      verified: true,
      profileImage:
        "https://images.unsplash.com/photo-1601233742344-3f6b6b6b6b6b?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Vibrant Painter",
      skill: "Painting",
      description: "Professional painter known for detailed and vibrant work.",
      rating: 4.2,
      reviews: 75,
      rate: 40,
      verified: true,
      profileImage:
        "https://images.unsplash.com/photo-1613060492217-3f6b6b6b6b6b?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Eco Cleaner",
      skill: "Cleaning",
      description: "Dedicated cleaner with a strong focus on non-toxic methods.",
      rating: 4.3,
      reviews: 66,
      rate: 35,
      verified: true,
      profileImage:
        "https://images.unsplash.com/photo-1601233742344-7f6b6b6b6b6b?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <>
      <Navigation />
      <Hero />
      <div className="absolute top-10 left-10 w-24 h-24 mt-5 bg-white/30 backdrop-blur-md rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/30 backdrop-blur-md rounded-full opacity-40 animate-pulse delay-500" />
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-5xl font-bold text-gray-900 leading-tight">
          Find Trusted <span className="text-pink-500">Fundis</span> Near You
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Connect with verified skilled workers in your area. From plumbing to
          carpentry, find the right professional for any job.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <input
            type="text"
            placeholder="Enter your location"
            className="px-4 py-3 border border-pink-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <select className="px-4 py-3 border border-pink-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-pink-400">
            <option selected disabled>
              Select skill category
            </option>
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Carpentry</option>
            <option>Cleaning</option>
            <option>Painting</option>
          </select>
          <button className="bg-pink-500 text-white hover:bg-pink-600 px-6 py-3 rounded-md font-semibold transition">
            Find Fundis
          </button>
        </div>
      </div>
      <HowItWorks />
      <Features />
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Featured <span className="text-pink-500">Verified Fundis</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Browse our top-rated professionals ready to help with your projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verifiedFundis.map((fundi, index) => (
              <FundiCard key={index} {...fundi} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
}

export default Index;

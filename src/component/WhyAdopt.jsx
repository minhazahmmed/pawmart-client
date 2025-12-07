import React from "react";
import { FaHeart } from "react-icons/fa";

const WhyAdopt = () => {
  return (
    <section className="bg-white rounded-3xl p-10 shadow-lg text-center my-10">
      <FaHeart className="text-6xl text-pink-500 mx-auto mb-5" />
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
        Why Adopt from PawMart?
      </h2>
      <p className="text-black text-sm md:text-lg max-w-2xl mx-auto">
        Every pet deserves a loving home! By adopting instead of buying, you rescue
        a life, support animal shelters, and help reduce stray populations. Join
        the movement to give these furry friends a second chance at happiness.
      </p>
      <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition">
        Learn More
      </button>
    </section>
  );
};

export default WhyAdopt;

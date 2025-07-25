import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6 md:px-10 md:py-10">
      {/* Logo */}
      <div className="text-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-800">Quizfinity</h1>
      </div>

      {/* Hero Image */}
      <img
        src="/src/assets/image.png"
        alt="Quizfinity Hero"
        className="w-full max-w-md md:max-w-xl h-auto max-h-[300px] md:max-h-[400px] object-contain mb-6"
      />

      {/* Text */}
      <p className="text-center text-gray-700 max-w-md mb-6">
        Master Internet Computer Protocol concepts while earning exciting rewards for your progress.
      </p>

      {/* Start Button */}
      <Link to="/learn" className="w-full max-w-sm">
        <button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg text-lg font-semibold">
          Start Learning
        </button>
      </Link>

      {/* Learners */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-2">Join thousands of learners worldwide</p>
        <div className="flex justify-center space-x-1">
          <img src="/src/assets/image1.png" alt="user" className="w-8 h-8 rounded-full" />
          <img src="/src/assets/image2.png" alt="user" className="w-8 h-8 rounded-full" />
          <img src="/src/assets/image3.png" alt="user" className="w-8 h-8 rounded-full" />
          <span className="text-xs text-white bg-purple-600 px-2 py-1 rounded-full self-center">+2k</span>
        </div>
      </div>

      {/* Quick Start */}
      <div className="mt-8 bg-gray-200 rounded-xl p-4 w-full max-w-md flex items-center space-x-4 shadow-sm">
        <div className="text-purple-700 text-2xl">➤</div>
        <div>
          <p className="font-semibold">Quick Start</p>
          <p className="text-sm text-gray-600">Complete your first lesson in under 5 minutes</p>
        </div>
      </div>
    </div>
  );
}

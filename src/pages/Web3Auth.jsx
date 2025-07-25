import React from "react";
import { Link } from "react-router-dom";

export default function Web3Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 space-y-6 text-center">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2">
          <div className="text-3xl font-bold text-purple-700 mb-2">🧠 Quizfinity</div>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold mt-4">Choose your Web3 ID</h2>
        <p className="text-sm text-gray-600">
          Select your preferred authentication method to access Quizfinity
        </p>

        {/* Internet Identity Button */}
        <button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg text-base font-semibold">
          Internet Identity
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
          <div className="h-px w-16 bg-gray-300" />
          <span>or continue with</span>
          <div className="h-px w-16 bg-gray-300" />
        </div>

        {/* Other Wallet Options */}
        <div className="space-y-3">
          <button className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50">
            Plug Wallet
          </button>
          <button className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50">
            Stoic Wallet
          </button>
        </div>

        {/* Alert */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 text-sm p-4 rounded-md">
          <p>
            <strong>⚠️ Upon login</strong>, you’ll receive a Principal ID for secure session tracking and personalized experience.
          </p>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <a href="#" className="underline hover:text-gray-700">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-gray-700">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

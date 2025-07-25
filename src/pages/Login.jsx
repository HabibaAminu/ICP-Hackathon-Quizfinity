import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-purple-700 mb-2">🧠 Quizfinity</div>
          <h2 className="text-xl font-semibold">Welcome Back</h2>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Welcome
          </button>
        </form>

        <div className="my-6 flex items-center justify-between">
          <hr className="w-1/4 border-gray-300" />
          <span className="text-sm text-gray-500">or continue with</span>
          <hr className="w-1/4 border-gray-300" />
        </div>

        <div className="flex gap-4 justify-center">
          <button className="flex-1 border border-gray-400 py-2 rounded-md hover:bg-gray-50">Google</button>
          <button className="flex-1 border border-gray-400 py-2 rounded-md hover:bg-gray-50">Apple</button>
        </div>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account? <a href="#" className="text-blue-600 font-medium hover:underline">sign up</a>
        </p>
      </div>
    </div>
  );
}
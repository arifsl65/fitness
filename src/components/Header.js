// File path: /home/arif/project/Fitness/src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Welcome, Coach!</h2>
        <p className="text-sm text-gray-500">Wednesday, April 23, 2025</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded">
          + Add New Client
        </button>
        <div className="relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          <button className="text-2xl">🔔</button>
        </div>
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
          {/* Profile image would go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
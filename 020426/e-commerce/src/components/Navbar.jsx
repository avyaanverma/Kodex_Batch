import React from "react";

const Navbar = () => {
  const username = "Avyaan"; // or pass as prop

  return (
    <nav className="flex flex-row justify-between items-center px-6 py-4 bg-olive-700 text-white shadow-lg">
      {/* Left side: greeting + username */}
      <div className="flex items-center space-x-4 font-medium">
        <span>Good evening, {username}</span>
      </div>

      {/* Center: search bar */}
      <div className="flex-1 max-w-md mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg bg-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-400 text-white placeholder-olive-100"
        />
      </div>

      {/* Right side: card, notification, profile */}
      <div className="flex items-center space-x-4">
        {/* Card icon */}
        <button className="p-2 rounded-lg bg-olive-600 hover:bg-olive-500 transition-colors">
          {/* Example icon (you can replace with your icon library) */}
          <span className="text-sm">💳</span>
        </button>

        {/* Notification icon */}
        <button className="p-2 rounded-lg bg-olive-600 hover:bg-olive-500 transition-colors relative">
          <span className="text-sm">🔔</span>
          {/* Optional badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full bg-red-500 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile circle */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-olive-500 flex items-center justify-center text-sm font-bold border-2 border-olive-400">
            {username.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium text-sm hidden md:block">{username}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
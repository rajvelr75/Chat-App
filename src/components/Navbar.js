import React, { useState } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="p-4 flex items-center bg-gray-900 relative">
      <img src="raju.jpg" alt="Profile" className="w-10 h-10 rounded-full ml-3 object-contain hover:cursor-pointer" />
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#feab01] to-[#e23c00] text-2xl font-bold ml-24">Chat App</h1>
      <div className="ml-auto relative">
        <EllipsisVerticalIcon 
          onClick={toggleMenu} 
          className="w-6 h-6 mr-2 text-yellow-300 cursor-pointer" 
        />
        {showMenu && (
          <div className="absolute right-4 mt-2 w-32 bg-gray-700 rounded shadow-lg z-10">
            <ul>
              <li className="px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">Settings</li>
              <li className="px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

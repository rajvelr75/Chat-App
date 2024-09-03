import React,{useState} from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const ChatNavBar = () => {
  const user = {
    name: 'Iniyan💎',
    profilePic: 'iniyan.jpg', 
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="p-4 flex items-center bg-gray-800 border-b border-gray-700">
      <img src={user.profilePic} alt={`${user.name} Profile`} className="w-10 h-10 rounded-full mr-4 object-contain hover:cursor-pointer"
      />
      <h2 className="text-yellow-300 text-xl font-bold hover:cursor-pointer">{user.name}</h2>
      <div className="ml-auto relative">
        <EllipsisVerticalIcon 
          onClick={toggleMenu} 
          className="w-6 h-6 mr-2 text-yellow-300 cursor-pointer" 
        />
        {showMenu && (
          <div className="absolute right-4 mt-2 w-32 bg-gray-700 rounded shadow-lg z-10">
            <ul>
              <li className="px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">Contact Info</li>
            </ul>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default ChatNavBar;

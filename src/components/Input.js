import React from 'react';
import { PaperAirplaneIcon, PaperClipIcon } from '@heroicons/react/24/outline'; 

const Input = () => {
  return (
    <div className="p-4 bg-gray-800 flex items-center">
      <button 
        type="button" 
        className="p-2 bg-gray-700 rounded-full text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <PaperClipIcon className="w-6 h-6" />
      </button>
      
      <input 
        type="text" 
        placeholder="Type a message..." 
        className="w-full px-3 py-2 ml-3 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      
      <button 
        type="button" 
        className="ml-3 p-2 bg-yellow-500 rounded-full text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <PaperAirplaneIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Input;

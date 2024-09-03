import React from 'react';

const Search = () => {
  return (
    <div className="p-4 bg-gray-800">
      <input 
        type="text" 
        placeholder="Search User" 
        className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>
  );
};

export default Search;

import React from 'react';
import SideBar from '../components/SideBar';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="flex w-full">
        <SideBar className="w-2/6 bg-gray-800" />
        <Chat className="w-4/6 bg-gray-900" />
      </div>
    </div>
  );
}

export default Home;

import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const SideBar = () => {
  return (
    <div className='w-2/6 bg-gray-800 h-full flex flex-col'>
        <Navbar/>
        <Search/>
        <div className="flex-1 overflow-y-auto">
        <Chats />
      </div>
    </div>
  )
}

export default SideBar
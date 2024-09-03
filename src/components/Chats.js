import React from 'react';

const Chats = () => {
  const contacts = [
    { 
      name: 'Karthikeyan', 
      lastMessage: 'Hii', 
      profilePic: 'vb.jpg',
      streak:'1'  
    },
    { 
      name: 'Deepa', 
      lastMessage: 'Hello', 
      profilePic: 'deepa.jpg',
      streak:'2'  
    },
    { 
      name: 'Sanjai', 
      lastMessage: 'Hey', 
      profilePic: 'Sanjai.jpg',
      streak:'3'  
    },
    { 
      name: 'Pooventhan👑', 
      lastMessage: 'Whats Up ?', 
      profilePic: 'Poo.jpg',
      streak:'4'    
    },
    { 
      name: 'Iniyan💎', 
      lastMessage: 'Vanakam', 
      profilePic: 'iniyan.jpg',
      streak:'5'    
    },
    { 
      name: 'Sakthi⚔️', 
      lastMessage: 'Snacks vangiyacha?', 
      profilePic: 'sakthi.jpg',
      streak:'6'    
    },
    { 
      name: 'Hari', 
      lastMessage: 'Hii Makka', 
      profilePic: 'hari.jpg',
      streak:'7'    
    },
    { 
      name: 'Bharani', 
      lastMessage: 'Hii da', 
      profilePic: 'bharani.jpg',
      streak:'8'    
    },
  ];

  return (
    <div className="overflow-y-auto h-full">
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center p-4 border-b border-gray-700 hover:bg-gray-700 ml-2">
          <img 
            src={contact.profilePic} 
            alt={`${contact.name} Profile`} 
            className="w-10 h-10 rounded-full mr-4 object-contain"
          />
          <div>
            <h2 className="text-yellow-500 font-bold">{contact.name}</h2>
            <p className="text-gray-300">{contact.lastMessage}</p>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <span className="text-gray-300 text-sm">{contact.streak}</span>
            <img src='star.png' className='h-4 w-4' alt='Star Icon'/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;

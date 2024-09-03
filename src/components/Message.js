import React from 'react';

const Message = ({ message }) => {
  const isSentByCurrentUser = message.from === 'You';
  
  return (
    <div className={`flex ${isSentByCurrentUser ? 'justify-end' : 'justify-start'} items-start mb-4`}>
      {!isSentByCurrentUser && (
        <img
          src={message.profilePic} 
          alt={`${message.from}'s Profile`}
          className="w-8 h-8 rounded-full mr-2 "
        />
      )}
      <div className={`p-3 rounded-lg max-w-xs ${isSentByCurrentUser ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-gray-300'}`}>
      {/* rounded-tl-[8px] rounded-tr-[0px] rounded-br-[8px] rounded-bl-[8px] */}
        <p>{message.content}</p>
        <span className={`text-xs ${isSentByCurrentUser ? 'text-gray-100' : 'text-gray-400'}`}>{message.time}</span>
      </div>
      {isSentByCurrentUser && (
        <img
          src={message.profilePic} 
          alt={`Your Profile`}
          className="w-8 h-8 rounded-full ml-2"
        />
      )}
    </div>
  );
};

export default Message;

import React from 'react'
import Message from './Message'
import Input from './Input'
import ChatNavBar from './ChatNavBar';

const Chat = () => {
    const messages = [
        { from: 'Iniyan', content: 'Vanakam🙏', time: '10:00 AM' ,profilePic:'iniyan.jpg'},
        { from: 'You', content: 'Vanakam Iniyan', time: '10:02 AM',profilePic:'raju.jpg' },
        { from: 'Iniyan', content: 'Poo Irukana Sethutana ', time: '10:02 AM',profilePic:'iniyan.jpg' },
        { from: 'You', content: 'Avan Sethu Naalu Naal Aachu😂', time: '10:02 AM',profilePic:'raju.jpg' },
        { from: 'Iniyan', content: 'Nallathu..Rest in Peace😔', time: '10:02 AM',profilePic:'iniyan.jpg' },
        { from: 'You', content: 'He Already Went to Hell😈', time: '10:02 AM',profilePic:'raju.jpg' },
      ];
    
      return (
        <div className="w-4/6 bg-gray-900 flex flex-col">
          <ChatNavBar />
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </div>
          <Input />
        </div>
      );
}

export default Chat
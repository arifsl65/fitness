// pages/Messages.js
import React, { useState } from 'react';

const Messages = () => {
  // Dummy data for conversations
  const initialConversations = [
    { id: 1, name: 'Sarah Johnson', lastMessage: 'Thanks for the workout plan!', time: '10:30 AM', unread: true },
    { id: 2, name: 'Mike Peters', lastMessage: 'I completed yesterday\'s session.', time: 'Yesterday', unread: false },
    { id: 3, name: 'Emma Davis', lastMessage: 'Can we reschedule to Thursday?', time: 'Yesterday', unread: true },
    { id: 4, name: 'Chris Wilson', lastMessage: 'The new diet plan is working great!', time: 'Apr 21', unread: false },
    { id: 5, name: 'Jessica Brown', lastMessage: 'I need to cancel tomorrow\'s session.', time: 'Apr 20', unread: false },
    { id: 6, name: 'David Martinez', lastMessage: 'When should I increase weight?', time: 'Apr 19', unread: false },
    { id: 7, name: 'Lisa Taylor', lastMessage: 'My progress photos are attached.', time: 'Apr 18', unread: false },
  ];
  
  // Dummy data for current conversation
  const currentChat = [
    { id: 1, sender: 'coach', message: 'Hi Sarah, how are you feeling after yesterday\'s workout?', time: '9:45 AM' },
    { id: 2, sender: 'client', message: 'I\'m feeling great! A bit sore but in a good way.', time: '10:02 AM' },
    { id: 3, sender: 'client', message: 'The new exercises you added were challenging but doable.', time: '10:03 AM' },
    { id: 4, sender: 'coach', message: 'That\'s great to hear! I\'m glad the difficulty level was right for you. I\'ve prepared your new workout plan for the week.', time: '10:15 AM' },
    { id: 5, sender: 'client', message: 'Thanks for the workout plan!', time: '10:30 AM' },
  ];
  
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter conversations based on search
  const filteredConversations = conversations.filter(convo => 
    convo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    convo.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    // In a real app, we would send this to an API
    // For the prototype, we're just updating the UI
    
    // Add to chat
    const newChat = {
      id: currentChat.length + 1,
      sender: 'coach',
      message: newMessage,
      time: 'Just now'
    };
    
    // Update last message in conversation list
    setConversations(conversations.map(convo => 
      convo.id === selectedConversation 
        ? { ...convo, lastMessage: newMessage, time: 'Just now' } 
        : convo
    ));
    
    // Clear input
    setNewMessage('');
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Messages</h2>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition">
            New Message
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Conversations list */}
        <div className="md:col-span-1 bg-white rounded-lg shadow overflow-hidden">
          <div className="p-3 border-b">
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full px-3 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
            {filteredConversations.map(convo => (
              <div 
                key={convo.id} 
                className={`p-3 border-b hover:bg-gray-50 cursor-pointer transition ${
                  convo.id === selectedConversation ? 'bg-indigo-50' : ''
                }`}
                onClick={() => setSelectedConversation(convo.id)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium truncate">{convo.name}</h4>
                      <span className="text-xs text-gray-500">{convo.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {convo.unread && 
                        <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-1"></span>
                      }
                      {convo.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat area */}
        <div className="md:col-span-2 bg-white rounded-lg shadow flex flex-col" style={{ height: '600px' }}>
          {/* Chat header */}
          <div className="p-4 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <h3 className="font-medium">Sarah Johnson</h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {currentChat.map(message => (
              <div 
                key={message.id} 
                className={`max-w-xs mb-4 ${message.sender === 'coach' ? 'ml-auto' : ''}`}
              >
                <div 
                  className={`p-3 rounded-lg ${
                    message.sender === 'coach' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white rounded-tl-none shadow-sm'
                  }`}
                >
                  <p>{message.message}</p>
                </div>
                <span className={`text-xs text-gray-500 ${message.sender === 'coach' ? 'float-right' : ''} mt-1`}>
                  {message.time}
                </span>
              </div>
            ))}
          </div>
          
          {/* Message input */}
          <div className="p-3 border-t">
            <form onSubmit={handleSendMessage} className="flex items-center">
              <button type="button" className="text-gray-500 p-2 hover:text-gray-700 transition">
                📎
              </button>
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 border rounded-full px-4 py-2 mx-2"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition"
                disabled={newMessage.trim() === ''}
              >
                ➤
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

import React, { useState } from 'react';
import axios from 'axios';

const ChatPage = ({ userDetails }) => {
  const [messages, setMessages] = useState([
    { from: 'them', text: `Hi, main ${userDetails.name} hoon... baat karein?` },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const newMessages = [...messages, { from: 'you', text: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await axios.post('https://silent-talks-backend.onrender.com/api/chat', {
        userMessage: input,
        meta: userDetails,
      });

      setMessages([...newMessages, { from: 'them', text: res.data.reply }]);
    } catch {
      setMessages([...newMessages, { from: 'them', text: 'Kuch galat ho gaya. Dobara try karo.' }]);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded-xl shadow-md">
      <div className="h-96 overflow-y-auto space-y-2 mb-4 border p-2 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={\`p-2 rounded-lg \${msg.from === 'you' ? 'bg-pink-100 text-right' : 'bg-gray-100 text-left'}\`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-grow border p-2 rounded-l" placeholder="Apna message likhiye..." />
        <button onClick={sendMessage} className="bg-pink-600 text-white px-4 rounded-r">Send</button>
      </div>
    </div>
  );
};

export default ChatPage;

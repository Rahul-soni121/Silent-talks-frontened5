
import React, { useState } from 'react';
import Description from './Description';
import FormPage from './FormPage';
import ChatPage from './ChatPage';

const App = () => {
  const [userDetails, setUserDetails] = useState(null);

  return (
    <div className="min-h-screen bg-[#fdf6f8] text-gray-800 p-4">
      {!userDetails ? (
        <>
          <Description />
          <FormPage onSubmit={setUserDetails} />
        </>
      ) : (
        <ChatPage userDetails={userDetails} />
      )}
    </div>
  );
};

export default App;

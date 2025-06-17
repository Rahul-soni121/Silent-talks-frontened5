
import React, { useState } from 'react';

const FormPage = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, relationship, age });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 rounded shadow">
      <h2 className="text-xl mb-4 font-semibold">Us vyakti ke baare mein batayein:</h2>
      <input required className="w-full mb-2 p-2 border" placeholder="Naam" value={name} onChange={(e) => setName(e.target.value)} />
      <input required className="w-full mb-2 p-2 border" placeholder="Rishta (jaise 'dost', 'maa')" value={relationship} onChange={(e) => setRelationship(e.target.value)} />
      <input required className="w-full mb-4 p-2 border" placeholder="Umar" value={age} onChange={(e) => setAge(e.target.value)} />
      <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Shuru karein</button>
    </form>
  );
};

export default FormPage;

import React, { useState } from 'react';

function DatantryCard({ setPopup, addUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleButton = () => {
    addUser({ name, age, email, number });
    setPopup(false);
  };

  return (
    <div className='DatantryCard'>
      <div className='popupclose'>
        <button onClick={() => setPopup(false)}>X</button>
      </div>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='user-input'
        type='text'
        placeholder='Name'
        required
      />

      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className='user-input'
        type='number'
        placeholder='Age'
        required
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='user-input'
        type='email'
        placeholder='Email'
        required
      />

      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='user-input'
        type='tel'
        placeholder='Mobile No'
        required
      />

      <button className='btn-add' onClick={handleButton}>Add</button>
    </div>
  );
}

export default DatantryCard;

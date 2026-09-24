import React, { useState } from 'react';

function UserCard({ user, deleteUser, updateUser }) {
  const [isEdit, setIsEdit] = useState(false);

  // Local editable state
  const [name, setName] = useState(user.Name);
  const [age, setAge] = useState(user.Age);
  const [email, setEmail] = useState(user.Email);
  const [number, setNumber] = useState(user.MobileNumber);

  const handleDelete = () => {
    deleteUser(user.id);
  };

  const handleUpdate = () => {
    updateUser(user.id, { Name:name, Age:age, Email:email, MobileNumber:number });
    setIsEdit(false);
  };

  return (
    <div className='UserCard'>
      {isEdit ? (
        <>
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

          <div className='userbtn'>
            <button className='btn-edit' onClick={handleUpdate}>Update</button>
            <button className='btn-delete' onClick={handleDelete}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <p>Name : {user.Name}</p>
          <p>Age : {user.Age}</p>
          <p>Email : {user.Email}</p>
          <p>Mobile : {user.MobileNumber}</p>
          <div className='userbtn'>
            <button className='btn-edit' onClick={() => setIsEdit(true)}>Edit</button>
            <button className='btn-delete' onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default UserCard;

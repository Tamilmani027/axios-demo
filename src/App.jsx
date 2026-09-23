import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import DatantryCard from './components/DatantryCard'

function App() {
  const [count, setCount] = useState(0)
  const [users,setUser]=useState([{name:'mani',age:23,email:'mani@gmail.com',number:987654321}]);
  const [popup,setPopup]=useState(false)


const addUser = (data) => {
  const newUser = { ...data, id: Date.now() }; 
  setUser([...users, newUser]);
};

  const deleteUser=(id)=>{
    setUser(users.filter((user)=>user.id!==id));
  }

  const updateUser = (id, updatedData) => {
  setUser((users) =>users.map((user) => user.id === id ? { ...user, ...updatedData } : user
    )
  );
};



  return (
    <>
    <div className='header'>
      <h2>User Datas</h2>
      <button className='headerbtn' onClick={()=>setPopup(true)}>+</button>
    </div>
     {popup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <DatantryCard setPopup={setPopup} addUser={addUser}/>
          </div>
        </div>
      )}
   
    <div className='card-container'>
      {
      users.map((user,index)=>{
        return <UserCard key={index} user={user} deleteUser={deleteUser} updateUser={updateUser}/>
      })}
    </div>    
    </>
  )
}

export default App

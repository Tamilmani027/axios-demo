import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import DatantryCard from './components/DatantryCard'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [users,setUser]=useState([]);
  const [popup,setPopup]=useState(false)

const api=axios.create({baseURL:"https://6a6457acb30b52361e1ae72c.mockapi.io"});

const  getUsers=async()=>{
  try{
      const res=await api.get("/users");
      const data=res.data;
      setUser(data);
  }
  catch (error){
    console.log(error)
  }
};


const addUser = async (data) => {
  try{
    const newUser = { ...data, id: Date.now() }; 
    setUser([...users, newUser]);
    const res=await api.post("/users",
    {Name:data.name,Age:data.age,Email:data.email,MobileNumber:data.number});
    console.log(res.data)
  }
  catch (error){
    console.log(error)
  }
};

  const deleteUser=async(id)=>{
    try{
        setUser(users.filter((user)=>user.id!==id));
        const res=await api.delete(`/users/${id}`);
        console.log(res.data);
    }
    catch (error){
      console.log(error);
    }
  }


  const updateUser = async(id, Data) => {
    try{
        setUser((users) =>users.map((user) => user.id === id ? { ...user, ...Data } : user));
        const update=await api.put(`/users/${id}`, Data )
        console.log(update.data)
    }
    catch (error){
        console.log(error)
    }
};

useEffect(() => {
  getUsers();
}, []);




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

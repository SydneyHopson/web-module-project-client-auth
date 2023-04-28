import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const style = {margin: '1rem', padding: '0.5', border: '2px solid black'}
const AddFriends = () => {
    const navigate = useNavigate();
    const [form, setFrom] = useState({
        username: "",
        age: "",
        email: "",
    })

    const handleChange = (e) => {
        setFrom({
            ...form,
            [e.target.name]:e.target.value
        })
    }
   const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/Friends', form, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
          navigate('/FriendsList')
        })
        .catch(err => {
            console.log(err);
        })

   }

    return (<div>
        <h1 style={{...style, borderColor:'green'}}>AddFriends</h1>
        <form onSubmit={handleSubmit}>
           <div>
                <label htmlFor='name'>Username</label>
                <input onChange={handleChange} name='name' id="name" />
           </div> 
           <div>
                <label htmlFor='age'>Age</label>
                <input onChange={handleChange} name='age'  id="age" />
           </div> 
           <div>
                <label htmlFor='email'>Email</label>
                <input onChange={handleChange} name='email' id="email" />
           </div>
           <button>Submit</button>


        </form>
        
        
        </div>)
  }
export default AddFriends;  
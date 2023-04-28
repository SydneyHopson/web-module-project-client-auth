import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';


const style = {margin: '1rem', padding: '0.5', border: '2px solid black'}
const Login = () => {
    const navigate = useNavigate();

    const [cred, setCred] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
        .then(res => {
            
            localStorage.setItem("token", res.data.token)
            navigate('/FriendsList')
        })
        .catch(err => {
            console.log(err)
        })
    }
    


    return (<div>
       <h1 style={{...style, borderColor:'red'}}>Login</h1> 
       <form onSubmit={handleSubmit}>
        <div>
         <label htmlFor='username'>username</label>
         <input onChange={handleChange} name="username" id="username"/>
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <input type="password" id="password"  name="password" onChange={handleChange}/>
        </div>
        <button>Submit</button>
  
       </form>
      </div>)
  }
  export default Login;


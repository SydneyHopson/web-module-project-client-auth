import React, { useState, useEffect } from "react"
import axios from "axios";

const style = {margin: '1rem', padding: '0.5', border: '2px solid black'}
const FriendsList = () => {

    const [ friends, setFriends] = useState([]);
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:9000/api/Friends', {
            headers: {
            authorization: token
            }
        })
            .then(res => {
             setFriends(res.data) 
            })
            .catch(err => {
                console.log(err);
            })

    }, [])


    return (<div><h1 style={{...style, borderColor:'blue'}} >FriendsList</h1>
    <ul>
        {
            friends.map(friend => {
                return <li> {friend.name} - {friend.age} - {friend.email}</li>
            })
        }
        
        

    </ul>
    
    </div>)
  }
  export default FriendsList;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes,  } from 'react-router-dom';

const style = {margin: '1rem', padding: '0.5', border: '2px solid black'}

const Login = () => {
  return (<h2 style={{...style, borderColor:'red'}}>Login</h2>)
}

const FriendsList = () => {
  return (<h2 style={{...style, borderColor:'blue'}} >FriendsList</h2>)
}

const AddFriends = () => {
  return (<h2 style={{...style, borderColor:'green'}}>AddFriends</h2>)
}


function App() {
  return (
    <div className="App">
      <h1>Client Auth Project</h1>
      <nav>
        <Link to="/">Login</Link> <br/>
        <Link to="/">Login</Link> <br/>
        <Link to="FriendsList">FriendsList</Link> <br/>
        <Link to="AddFriends">AddFriends</Link>  <br/>
      </nav>
      <Routes>
      <Route exact  path="/" element={<Login />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="FriendsList" element={<FriendsList />} />
      <Route exact  path="AddFriends" element={<AddFriends />} />


      </Routes>

    </div>
  );
}
export default App;
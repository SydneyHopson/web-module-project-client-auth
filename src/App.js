import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes,  } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/logout';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <h1>Client Auth Project</h1>
      <nav>
        <Link className='links' to="/">Login</Link> <br/>
        <Link className='links' to="/Logout">Logout</Link> <br/>
        <Link className='links' to="FriendsList">FriendsList</Link> <br/>
        <Link className='links' to="AddFriends">AddFriends</Link>  <br/>
      </nav>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Logout" element={<Logout />} />
      <Route exact path="FriendsList" element={<FriendsList />} />
      <Route exact path="AddFriends" element={<AddFriends />} />


      </Routes>

    </div>
  );
}
export default App;
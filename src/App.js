import logo from './logo.svg';
import './App.css';
import UserForm from './comps/UserForm.js';
import UserList from './comps/UserList.js';
import React ,{useState} from 'react';

function App() {
  // users state array
  const [users, setUsers] = useState([]);
  // FUNCTION TO ADD A NEW User INSIDE DE form

  function addUser(user){
    // makes a copy off the current user useState
    // and add a new user.
    setUsers([...users, user]);
  };
  return (
    <div className="App">
     <UserForm addUser={addUser} />
     <UserList  data={users}/>
    </div>
  );
}

export default App;

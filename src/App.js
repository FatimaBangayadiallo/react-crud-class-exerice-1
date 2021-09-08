import logo from './logo.svg';
import './App.css';
import UserForm from './comps/UserForm.js';
import UserList from './comps/UserList.js';

function App() {
  return (
    <div className="App">
     <UserForm />
     <UserList />
    </div>
  );
}

export default App;

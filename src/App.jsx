import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
const App = () => {
  return <div>
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/adduser'>Add Users</NavLink>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/adduser" element={<UserAdd/>}/>
    </Routes>
  </div>;
};

export default App;

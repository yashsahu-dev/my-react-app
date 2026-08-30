import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
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
      <Route path="/edituser/:id" element={<UserEdit/>}/>
    </Routes>
  </div>;
};

export default App;

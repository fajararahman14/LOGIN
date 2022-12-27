import { BrowserRouter, Route, Routes, } from "react-router-dom";
import AddUser from "./components/AddUser";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
        {/* <Route path="/adduser">
          <AddUser/>
          </Route>
          <Route path="/edituser">
          <EditUser/>
          </Route> */}
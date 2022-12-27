import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/dashboard">
          <Navbar/>
          <UserList/>
        </Route>
        <Route path="/adduser">
          <AddUser/>
          </Route>
          <Route path="/edituser">
          <EditUser/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

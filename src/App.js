import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment/Appointment/Appointment";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard/appointment">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/doctor/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

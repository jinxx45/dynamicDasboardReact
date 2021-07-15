import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



import 'bootstrap/dist/css/bootstrap.min.css'

import LandingPage from './Pages/LandingPage/LandingPage.js'
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard.js";


export default function App() {
  return (
    <Router>
      <div>
     

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
          <Dashboard/>
          </Route>
          <Route path="/dashboard-admin">
           <AdminDashboard/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function About() {
  return <h2 className="text-danger ">About</h2>;
}


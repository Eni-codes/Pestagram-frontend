
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
      <Router>
        {/* putting navbar here allows navbar to appear on all pages  */}
      <NavBar/> 
      <Switch>

    <Route path='/' exact> 
    <Home />
      </Route>
      <Route path='/login' exact> 
    <Login />
      </Route>
      <Route path='/signup' exact> 
    <Signup/>
      </Route>
   </Switch>

      </Router>
    </div>
  );
}

export default App;
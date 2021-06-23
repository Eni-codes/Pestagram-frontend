import React, { useState } from 'react'
import { Route, Switch} from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import NavBar from '../Components/NavBar'
import Profile from '../Containers/Profile'



export const Home =() =>{
    //data replacement
   

  // componentDidMount(){
  //   fetch("http://localhost:3000/users")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }
  //initial state of user
 
  
  //function that calls Login
 
  //function that calls signup
 

    
  

    return(

      <div>
        <NavBar />
        <Switch>
          <Route exact path='/Login' component={Login}/> 
          <Route exact path='/Signup' component={Signup}/> 
          <Route exact path='/Profile' component={Profile}/> 
        </Switch>
      </div>
    )
  
}





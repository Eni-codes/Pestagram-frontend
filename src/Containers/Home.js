import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import NavBar from '../Components/NavBar'
class Home extends Component {
    render () {
        return(
           <div>
             hello
        {/* putting navbar here allows navbar to appear on all Components  */}
      
      <Switch>
      <Route exact path='/Login' component={Login}/> 
  
     
      <Route exact path='/Signup' component={Signup}/> 
    
   </Switch>

     
           </div> 
        )
    }
}
export default Home 
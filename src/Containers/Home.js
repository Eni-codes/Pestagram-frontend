import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import NavBar from '../Components/NavBar'
import Profile from '../Containers/Profile'


const API = " http://localhost:3000/posts"
class Home extends Component {
    //data replacement
   

    state={
      post: []
      
     
  }
  

    render(){
  

    return(

      <div>
        <NavBar />
        <Switch>
          <Route exact path='/Login' component={Login}/> 
          <Route exact path='/Signup' component={Signup}/> 
          <Route exact path='/Profile' component={Profile}/> 
        </Switch>
        {/* {this.state.loggedIn? <Profile posts = {this.state.posts}/> : null} */}
      </div>
    )
    }
}

export default Home



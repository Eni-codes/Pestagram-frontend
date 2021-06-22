import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import NavBar from '../Components/NavBar'


class Home extends Component {

  componentDidMount(){
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => console.log(data))
  }


  render() {

    


    return(

      <div>
        <NavBar />
        <Switch>
          <Route exact path='/Login' component={Login}/> 
          <Route exact path='/Signup' component={Signup}/> 
        </Switch>
      </div>
    )
  }
}
export default Home 




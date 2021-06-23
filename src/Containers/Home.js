import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import NavBar from '../Components/NavBar'
import Profile from '../Containers/Profile'



export default class  Home extends Component{

  state = {
    post:[]
  }

  componentDidMount(){
    fetch("http://localhost:3000/posts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(posts => this.setState({post:posts}))
  }
  render(){

    return(

      <div>
        <NavBar />
        <Switch>
          <Route exact path='/Login' component={Login}/> 
          <Route exact path='/Signup' component={Signup}/> 
          <Route exact path='/Profile' render={() => <Profile 
                                                      posts={this.state.post}/>}/> 
        </Switch>
        {/* {this.state.loggedIn? <Profile posts = {this.state.posts}/> : null} */}
      </div>
    )
  }
  
}

// useEffect(() => {
//   fetch("http://localhost:3000/posts", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${localStorage.token}`
//     }
//   })
//   .then(res => res.json())
//   .then(posts => {
//     setPosts(posts)
//   })
// }, [])





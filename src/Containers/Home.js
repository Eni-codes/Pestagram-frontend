import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import NewPost from '../Components/NewPost'
import NavBar from '../Components/NavBar'
import Profile from '../Containers/Profile'




export default class  Home extends Component{

  state = {
    user_posts:[],
    user_info:[],
  }

  componentDidMount(){
    fetch("http://localhost:3000/user_posts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(posts => this.setState({user_posts:posts}))

    fetch("http://localhost:3000/user_info", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(info => this.setState({user_info:info}))
  }

  addPost = post => this.setState({
    user_posts: [...this.state.user_posts, post]
  })

   updatePost = (updatedPost) => {
    let updatedPostsArr = this.state.user_posts.map((post) => {
      if(post.id === updatedPost.id){
        return updatedPost
      } else {
        return post
      }
    })
  
    this.setState({user_posts: updatedPostsArr})
  }

   deletePost = (postID) => {
    let deletedPostArr = this.state.user_posts.filter(post => post.id !== postID)
    this.setState({user_posts:deletedPostArr})
    
  }




  render(){
   
    return(

      <div>
        <NavBar logout={this.log_out} />

        <div className="heading">
          <h3>Welcome to Petstagram</h3>
          <h1> A social network for pets</h1>
        </div>
        <Switch> 
        
          <Route exact path='/NewPost' render={() => <NewPost addPost= {this.addPost}/>}/> 
          <Route exact path='/Login' component={Login}/> 
          <Route exact path='/Signup' component={Signup}/> 
          <Route exact path='/Profile' render={() => <Profile posts={this.state.user_posts} user={this.state.user_info} updatePost={this.updatePost} deletePost={this.deletePost}/>}/> 
        </Switch>
      </div>
    )
  }
  
}






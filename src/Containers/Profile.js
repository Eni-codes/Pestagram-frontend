import React, {Component} from 'react' 
import {Post} from '../Components/Post'
import Sidenav from '../Components/Sidenav'
// import {Redirect} from "react-router-dom"
const API = " http://localhost:3000/posts"
class Profile extends Component {
 
  
    render(){

        return(
            <div>
                 <div>
                    <h3>Welcome to your profile page</h3>

                </div>
                <Sidenav />
                {this.props.posts.map((post) => <Post key={post.id} posts={post}/>)}
                
            </div>
        )
        }
}
export default Profile
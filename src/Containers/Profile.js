import React, {Component} from 'react' 
import {Post} from '../Components/Post'
import Sidenav from '../Components/Sidenav'
import {Grid} from "@material-ui/core"
// import {Redirect} from "react-router-dom"

function Profile (props) {
 

        return(
            <div>
                 <div >
                    <h3>Welcome to your profile page</h3>
                </div>
                <div>
                {props.posts.map((post) => <Post key={post.id} posts = {post}/>)}
                <Sidenav />
                </div>
            </div>
        )
        
}
export default Profile
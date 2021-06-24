import React, {Component} from 'react' 
import {Post} from '../Components/Post'
import Sidenav from '../Components/Sidenav'
import {Grid} from "@material-ui/core"
// import {Redirect} from "react-router-dom"

function Profile (props) {

    console.log(props)
 

        return(
            <div id="container">
                <h3>Welcome to your profile page</h3>
                <Sidenav />
                {/* <Grid> */}
                {props.posts.map((post) => <Post key={post.id} posts={post}/>)}

                {/* // pet ={ post.pet}
                //  photo ={post.photos}
                //  likes ={post.likes}
                //  comment ={post.comments}
                //  caption ={post.caption} */}
                {/*  */}
                {/* </Grid> */}
            </div>
        )
        
}
export default Profile
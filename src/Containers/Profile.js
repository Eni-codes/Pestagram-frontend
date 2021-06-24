import React from 'react' 
import {Post} from '../Components/Post'
import Sidenav from '../Components/Sidenav'



function Profile (props) {
    

    
 

        return(
            <div id="container">
                <h3>Welcome to your profile page</h3>
                <Sidenav />
                {props.posts.map((post) => <Post key={post.id} posts={post} />)}
            </div>


        )
        
}
export default Profile
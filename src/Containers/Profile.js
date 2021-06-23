import React, {Component} from 'react' 
import Post from '../Components/Post'
import Sidenav from '../Components/Sidenav'
// import {Redirect} from "react-router-dom"

function Profile ({authorized}) {

    // componentDidMount() {
    //     fetch("https://localhost:3000/users")
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }
    //  if (!authorized){
    //      return <Redirect to="/login" />
    //  }
    

        return(
            <div>
                 <div>
                    <h3>Welcome to your profile page</h3>

                </div>
                <Sidenav />
                <Post/>
                
            </div>
        )
    
}
export default Profile
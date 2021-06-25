import React from 'react' 
import {Post} from '../Components/Post'
import Sidenav from '../Components/Sidenav'
import {Card} from 'react-bootstrap'
import { Route, Switch} from 'react-router-dom'
import AllPosts from '../Components/AllPosts'

function Profile ({user, posts, updatePost, deletePost}) {

    const {userName, photo, bio} = user
    const postCard = posts.map((post) => <Post post={post} key={post.id} updatePost={updatePost} deletePost={deletePost} />)
    
    

   
        return(
            <div id="container-card" classname="card">
                <div className="left-half">
                <h3>Welcome to your profile page</h3>
                <Sidenav />
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={photo} />
                    <Card.Body>
                        <Card.Title>{userName}</Card.Title>
                        <Card.Text>{bio}</Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div class="right-half">
                {postCard}
                </div>
                <Switch>
                    <Route  exact path='/posts' component={AllPosts}/> 
                </Switch>
            </div>
        )    
}
export default Profile
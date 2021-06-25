import React from 'react' 
import {Post} from '../Components/Post'
import Sidenav from '../Components/Sidenav'
import {Card} from 'react-bootstrap'
import { Route, Switch} from 'react-router-dom'
import AllPosts from '../Components/AllPosts'

function Profile ({user, posts, updatePost}) {

    const {userName, photo, bio} = user
    const postCard = posts.map((post) => <Post post={post} key={post.id} updatePost={updatePost}/>)
    

   
        return(
            <div id="container">
                <h3>Welcome to your profile page</h3>
                <Sidenav />
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={photo} />
                    <Card.Body>
                        <Card.Title>{userName}</Card.Title>
                        <Card.Text>{bio}</Card.Text>
                    </Card.Body>
                </Card>
                {postCard}
                <Switch>
                    <Route  exact path='/posts' component={AllPosts}/> 
                </Switch>
            </div>
        )    
}
export default Profile
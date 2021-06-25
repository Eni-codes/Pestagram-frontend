
import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const Post= ({post,updatePost}) => {
 
   let {id, caption, pet, likes, photos} = post
  //  let image = post.photos[0].image

  console.log(post)
  
 
  let handle_delete = (e) => {

    fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(res => res.json())
            .then(console.log)
  }

  let update_likes = (e) => {

    fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.token}`
            
        },
        body: JSON.stringify({ likes: likes + 1 })
    })
        .then(response => response.json())
        .then(updatedPost => {
          updatePost(updatedPost)
        })
}



 
  return (

    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={null} />
        <Card.Body>
          <Card.Title>{pet}</Card.Title>
          <Card.Text>
            {caption}
          </Card.Text>
          <Card.Text>
             Likes: {likes}
          </Card.Text>
          <Button variant="primary" onClick={update_likes}>Like</Button>
          <Button variant="primary" onClick={handle_delete}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
   
    
  )
}






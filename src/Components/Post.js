
import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const Post= ({post,updatePost}) => {
   
   let {id, caption, pet, likes} = post
  //  console.log(post.photo)
    
 
  let handle_delete = (e) => {

    fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(console.log)
  }

  let update_likes = (e) => {

    fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
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
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{pet}</Card.Title>
          <Card.Text>
            {caption}
          </Card.Text>
          <Card.Text>
            {likes}
          </Card.Text>
          <Button variant="primary" onClick={update_likes}>Like</Button>
          <Button variant="primary" onClick={handle_delete}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
   
    
  )
}






import React, {Component} from 'react'
import {Form , Button} from 'react-bootstrap'
// import {useHistory} from 'react-router-dom'

export default class Login extends Component{

    submitHandler = e => {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName: e.target[0].value,
            password: e.target[1].value
        })
        })
        .then(res => res.json())
        .then(userInfo => localStorage.token = userInfo.token)

        this.props.history.push("/Profile")
    }

  render() {


        return(
           <div className="Login">   
            <Form onSubmit= {this.submitHandler}> 
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter userName"/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
        
                </Form.Group>
                <Button variant="primary" type="submit">
                Login
                </Button>
            </Form>

        </div>
        )
  }
    
}

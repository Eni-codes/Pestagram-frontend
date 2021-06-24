import React, { Component } from 'react'
import {Form , Button, Col} from 'react-bootstrap'

 class Signup extends Component {

 
  submitHandler = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        userName: e.target[2].value,
        password: e.target[3].value
      })
    })
    .then(res => res.json())
    .then(userInfo => localStorage.token = userInfo.token)

    this.props.history.push("/Profile")
  }

    render () {

        return(

           <div className="Signup">
              <Form onSubmit={ this.submitHandler}>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name"/>
                  </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" placeholder="User Name"/>
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
                  Signup
                </Button>
              </Form>
          </div>
        )
    }
}
export default Signup 
import React, { Component } from 'react'
import {Form , Button, Col} from 'react-bootstrap'

class Signup extends Component {
    render () {
        return(
           <div>
              <Form>
  <Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
            <Form.Group controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
           We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

         <Form.Group controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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
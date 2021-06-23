import React, { Component } from 'react'
import {Form , Button, Col} from 'react-bootstrap'

 class Signup extends Component {

 
 //login submit handler and call login(details) function
 
   state ={
     firstname: "",
     lastname: "",
     email:"",
     password:""
   }
   
submitHandler = (e) => {
    e.preventDefault();
   
  }

    render () {

        return(

           <div className="Signup">
              <Form onSubmit={ this.submitHandler}>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="First name" 
                    value={this.state.firstname}
                    onChange={(e)=>this.setState({firstname:e.target.value})}
                    />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name"
                    value={this.state.lastname}
                    onChange={(e)=>this.setState({lastname:e.target.value})}
                    />
                  </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"
                  value={this.state.email}
                  onChange={(e)=>this.setState({email:e.target.value})}
                  />
                  <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"
                  value={this.state.password}
                  onChange={(e)=>this.setState({password:e.target.value})}
                  />
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
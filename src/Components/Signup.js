import React, { Component } from 'react'
import {Form , Button, Col} from 'react-bootstrap'

 class Signup extends Component {

 
 //login submit handler and call login(details) function
 
   state ={
     firstName: "",
     lastName: "",
     userName: "",
     password:""
   }
   
submitHandler = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.value)
    })
    .then(res => res.json())
    .then(userInfo => localStorage.token = userInfo.token)

  }

    render () {

        return(

           <div className="Signup">
              <Form onSubmit={ this.submitHandler}>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="First name" 
                    value={this.state.firstName}
                    onChange={(e)=>this.setState({firstName:e.target.value})}
                    />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name"
                    value={this.state.lastName}
                    onChange={(e)=>this.setState({lastName:e.target.value})}
                    />
                  </Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" placeholder="User Name"
                  value={this.state.userName}
                  onChange={(e)=> this.setState({userName: e.target.value})}
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
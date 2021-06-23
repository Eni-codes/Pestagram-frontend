import React, { useState} from 'react'
import {Form , Button} from 'react-bootstrap'
// import {useHistory} from 'react-router-dom'

const Login = () =>{
//  const history = useHistory();
 const [email, setEmail] = useState("");
 const [password, setPassword]= useState("");

//login submit handler and call login(details) function
const submitHandler = e => {
    e.preventDefault();
   
  }


        return(
           <div className="Login">   
            <Form onSubmit= {submitHandler}> 
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    value={email}
                    onChange ={(e)=> setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value ={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
        
                </Form.Group>
                <Button variant="primary" type="submit"
            //    onClick={() => {
            //        history.push("/profile");
            //    }}
                >
                Login
                </Button>
            </Form>

        </div>
        )
    
}
export default Login
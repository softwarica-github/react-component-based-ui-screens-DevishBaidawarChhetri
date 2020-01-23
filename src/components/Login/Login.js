import React from 'react'
// import Button from '../Button/Button'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios'
class Login extends React.Component{

constructor(){
  super()

  this.state = {

    username:'',
    password:''


  }
}

usernameChangeHandler = (event) => {

  this.setState({username: event.target.value})


}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
}

fromSubmitHnadler = (e) => {
  e.preventDefault()


  console.log(this.state) // this sate js object
var headers = {

'Content-Type':'application/json'

}
  Axios.post('http://localhost:3023/registration', this.state , headers)
  .then(function(response){

  })
  .catch(function(err){

  })

}

render(){

  return(

<Form onSubmit={this.fromSubmitHnadler}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username </Form.Label>
    <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.usernameChangeHandler} />
    <Form.Text className="text-muted">
      Login
    </Form.Text>
  </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" value={this.state.password} onChange={this.passwordChangeHandler} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>


  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>
  )
}
}

export default Login
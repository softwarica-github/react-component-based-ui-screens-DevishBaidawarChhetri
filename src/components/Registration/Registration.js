import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
class Registration extends React.Component {

constructor(){
  super()

  this.state = {

    username:'',
    password:'',
    validationMessage:'',
    redirect:false

  }
}

usernameChangeHandler = (event) => {

if(event.target.value.length < 6){
  this.setState({validationMessage:'Username Cannot be less than 6 chars '})
}

  this.setState({username: event.target.value})



}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
}

formSubmitHandler = (e) => {
  e.preventDefault()


var headers = {

'Content-Type':'application/json'

}

var data = {

  username:this.state.username,
  password:this.state.password

}

//mfetch method XMLHTTPREquest
  Axios.post('http://localhost:3023/registration', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 201){

    this.setState({redirect:true})

    // redirect to login page 
  }



})
.catch( (err) =>  {

})



  // console.log(this.state)
}

render(){

//what to render based in state

if(this.state.redirect){

return (
  <Redirect to='/login' />
  )

// toast message

}



  return(

// if(this.state.redirect == true){ 

//   //actual redirect work

// }



<Form onSubmit={this.formSubmitHandler}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username </Form.Label>
    <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.usernameChangeHandler} />
    <Form.Text className="text-muted">
      {this.state.validationMessage}
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

export default Registration
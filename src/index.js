import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route

} from 'react-router-dom'
import {

    Nav, Container,Row,Col,Card

} from 'react-bootstrap'
import Login from './components/Login/Login'
import Regsitration from './components/Registration/Registration'
class Index extends React.Component {

    constructor() {

        super()
    }
    Footer = () => {
     return (
                <Row className="text-center">
                  <Col sm={12}>
                    Copyright | All rights reserved | 2020.
                  </Col>
        </Row>
            )
}
    render() {
        return (
          <Container>
            <div style={{marginTop:'40px'}}> {/* for wrapping jsx components or use Fragment <> </> */}
                
                <Router>
                <Row style={{marginBottom:'40px'}}>
                <div>

          <Nav  variant="pills" >
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Home</Nav.Link> {/*as to use custom component */}
                </Nav.Item>
                  <Nav.Item>
                  <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                </Nav.Item>
          </Nav>
                </div>
                </Row>

                <Switch>

                  <Route exact path="/login">
                  < Login/>
                  </Route>

                  <Route exact path="/registration">
                  < Regsitration/>
                  </Route>
                </Switch>
                </Router>
                </div>
                  < this.Footer/>
                </Container>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'))
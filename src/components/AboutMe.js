import '../styles/AboutMe.css'

import Header from './Header'
import CatPic from "../img/yeehaw-cat.png"
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Header text="About Me"/>
      </Row>
      <Row>
        <Col>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Scelerisque in dictum non consectetur a erat. Aenean sed adipiscing diam donec adipiscing. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Sed arcu non odio euismod lacinia at quis. Semper eget duis at tellus. Eget mauris pharetra et ultrices neque. Quisque id diam vel quam elementum pulvinar etiam non. Ac feugiat sed lectus vestibulum. Odio euismod lacinia at quis. Gravida cum sociis natoque penatibus. Vestibulum sed arcu non odio euismod lacinia at. Id interdum velit laoreet id donec ultrices tincidunt.</p>
        <p>Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Facilisis mauris sit amet massa vitae tortor. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet nulla facilisi morbi tempus iaculis. Tristique senectus et netus et. Enim ut tellus elementum sagittis vitae. Ut tortor pretium viverra suspendisse. Vitae et leo duis ut diam quam nulla. Massa massa ultricies mi quis hendrerit dolor magna eget est. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Urna porttitor rhoncus dolor purus.</p>        
        </Col>
        <Col>
          <img style={{height: '50%'}} src={CatPic} alt=""/>
        </Col>
        
      </Row>
    </Container>
      
      
      
  )
}

export default AboutMe
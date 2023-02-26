import '../styles/AboutMe.css'

import Header from './Header'
import CatPic from "../img/yeehaw-cat.png"
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container id="about" className="about-section">
      <Row>
        <Header text="About Me"/>
      </Row>
      <Row>
        <Col lg={6}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Scelerisque in dictum non consectetur a erat. Aenean sed adipiscing diam donec adipiscing. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Sed arcu non odio euismod lacinia at quis. Semper eget duis at tellus. Eget mauris pharetra et ultrices neque. Quisque id diam vel quam elementum pulvinar etiam non. Ac feugiat sed lectus vestibulum.</p>
        <p>Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Facilisis mauris sit amet massa vitae tortor.</p>        
        </Col>
        <Col lg={6} className="about-column">
          <img src={CatPic} alt=""/>
        </Col>
        
      </Row>
    </Container>
      
      
      
  )
}

export default AboutMe
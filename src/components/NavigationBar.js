import { useState, useEffect } from 'react';

import { Nav, Navbar } from 'react-bootstrap'

import kinoSprite from '../img/kinoSprite1.png'

import "../styles/NavigationBar.css"

const NavigationBar = (props) => {
  const [scrolled, setScrolled] = useState(false)

  //runs on scroll, when the user gets past a certain point on the screen, it will update the look of the navbar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
        console.log(scrolled)
      } else {
        setScrolled(false)
        console.log(scrolled)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrolled])

  return (
      <Navbar className={`${ scrolled ? "scrolled" : "" }`}fixed="top" expand="md" collapseOnSelect>
        <Navbar.Brand style={{marginLeft: "10%"}} >
          <a href="#home">
            <img src={kinoSprite} alt="kino"/>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle style={{marginRight: "10%"}}/>
        <Navbar.Collapse style={{marginRight: "10%"}} className="navbar-content-container" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
            <Nav.Link href="#technology" className="nav-link">Technology</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
  )
}

export default NavigationBar
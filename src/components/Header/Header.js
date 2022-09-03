import React, { useState, useEffect } from 'react';

import kino1 from './kinoSprite1.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import './Header.css';

export  const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Navbar className={scrolled ? "scrolled" : ""} fixed="top" expand="md" collapseOnSelect >
      <Navbar.Brand>
        <img src={kino1} alt="sk" className="kino-logo"/>
        
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
          <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
          <Nav.Link href="#skills" className="nav-link">Skills</Nav.Link>
          {/* <Nav.Link href="#art" className="nav-link">My Art!</Nav.Link> */}
          <Nav.Link href="#resume" className="nav-link">Resume</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/sarah-kwon-651469186/"><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/sarahkwon"><img src={navIcon2} alt="" /></a>
            <a href="https://twitter.com/_soonjee"><img src={navIcon3} alt="" /></a>
          </div>
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
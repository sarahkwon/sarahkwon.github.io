import './App.css';
import React from 'react';
import { Container } from './AppStyles';

import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
import Resume from './components/Resume/Resume.js';
import Banner from './components/Banner/Banner.js';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    return (
        <Router>
          <Container>
            <Header/>
            <Banner/>
            <About/>
            <Projects/>
            <Skills/>
            <Resume/>
            <Footer/>
          </Container>
        </Router>
      
    );
}

export default App;

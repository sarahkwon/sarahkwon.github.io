import './App.css';
import React from 'react';
import { Container } from './AppStyles';

import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
import Banner from './components/Banner/Banner.js';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    return (
      <body>
         <Router>
          <Container>
            <Header/>
            <Banner/>
            <div className="margin-style">
              <About/>
              <Projects/>
              <Skills/>
            </div>
            <Footer/>
          </Container>
        </Router>
      </body>
      
    );
}

export default App;

import './App.css';
import React from 'react';

import { Container } from './AppStyles';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
import Resume from './components/Resume/Resume.js';
import Banner from './components/Banner/Banner.js';


function App() {
    return (
        <Container>
          <Header/>
          <Banner/>
          <Projects/>
          <Skills/>
          <Resume/>
          <Footer/>
      </Container>
      
    );
}

export default App;

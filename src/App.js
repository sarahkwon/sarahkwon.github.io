import './App.css';
import NavigationBar from './components/NavigationBar.js'
import Banner from './components/Banner.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import Technology from './components/Technology.js'
import { BrowserRouter as Router } from 'react-router-dom';

import { ChakraProvider, Spacer } from '@chakra-ui/react'
import theme from './theme'

import '@fontsource/raleway/700.css'
import '@fontsource/raleway/400.css'
import '@fontsource/montserrat/500.css'

import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        {/* <NavigationBar/> */}
        <Banner/>
        <Spacer height='15vh' layerStyle="aboutMe"/>
        <AboutMe/>
        <Spacer height='15vh' layerStyle="aboutMe"/>
        <Projects/>
      </Router>
    </ChakraProvider>  
    
  );
}

export default App;

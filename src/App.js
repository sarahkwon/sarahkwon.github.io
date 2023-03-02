import './App.css';
import NavigationBar from './components/NavBar/NavigationBar.js'
import Banner from './components/Banner.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import Technology from './components/Technology.js'
import Artworks from './components/Artworks.js'
import Contacts from './components/Contacts.js'
import { BrowserRouter as Router } from 'react-router-dom';

import { ChakraProvider, Spacer, Box } from '@chakra-ui/react'
import theme from './theme'

import '@fontsource/raleway/700.css'
import '@fontsource/raleway/400.css'
import '@fontsource/montserrat/500.css'

import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        paddingTop={{ base: "env(safe-area-inset-top)", md: "0" }}
        paddingBottom={{ base: "env(safe-area-inset-bottom)", md: "0" }}
        paddingLeft={{ base: "env(safe-area-inset-left)", md: "0" }}
        paddingRight={{ base: "env(safe-area-inset-right)", md: "0" }}
        bg='#234152'
      >
        <Router>
          <NavigationBar/>
          <Banner/>
          <Spacer height='15vh' layerStyle="aboutMe"/>
          <AboutMe/>
          <Spacer height='20vh' layerStyle="aboutMe"/>
          <Projects/>
          <Spacer height='15vh' layerStyle="projects"/>
          <Technology/>
          <Spacer height='15vh' layerStyle="aboutMe"/>
          <Artworks/>
          <Spacer height='15vh' layerStyle="artworks"/>
          <Contacts/>
          <Spacer height='8vh' layerStyle="artworks"/>
        </Router>
      </Box>
    </ChakraProvider>  
    
  );
}

export default App;

import './App.css'
import { useState, useEffect } from 'react'
import NavigationBar from './components/NavBar/NavigationBar.js'
import Banner from './components/Banner.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import Technology from './components/Technology.js'
import Artworks from './components/Artworks.js'
import Contacts from './components/Contacts.js'
import Section from './components/Section.js'
import { BrowserRouter as Router } from 'react-router-dom'

import { ChakraProvider, Box, Spacer } from '@chakra-ui/react'
import theme from './theme'

import '@fontsource/raleway/700.css'
import '@fontsource/raleway/400.css'
import '@fontsource/montserrat/500.css'


function App() {
  const [scrolled, setScrolled] = useState(false)

  //runs on scroll, when the user gets past a certain point on the screen, it will update the look of the navbar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrolled])

  return (
    <ChakraProvider theme={theme}>
      <Box bg='#111111'>
        <Router>
          <NavigationBar scrolled={scrolled}/>
          <Banner/>
          <Section id='aboutMe' paddingTop='20vh' section={<AboutMe/>} layerStyle='aboutMe'/>
          <Section id='projects' paddingTop='20vh' section={<Projects/>} layerStyle='projects'/>
          <Section id='technology' paddingTop='15vh' section={<Technology/>} layerStyle='technology'/>
          <Section id='artworks' paddingTop='20vh' section={<Artworks/>} layerStyle='artworks'/>
          <Section id='contacts' paddingTop='20vh' section={<Contacts/>} layerStyle='contacts'/>
          <Spacer height='8vh' layerStyle="artworks"/>
        </Router>
      </Box>
    </ChakraProvider>
  )
}

export default App

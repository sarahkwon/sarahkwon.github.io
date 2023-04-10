import { useState, useEffect } from 'react'

import NavigationBar from './components/NavBar/NavigationBar.js'
import Banner from './components/Banner.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import Technology from './components/Technology.js'
import Artworks from './components/Artworks.js'
import Contacts from './components/Contacts.js'
import Section from './components/Section.js'

import { ChakraProvider, Box, Spacer, Fade } from '@chakra-ui/react'
import theme from './theme'

function App() {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    document.fonts.load('12px Poppins').then(() => setIsReady(true))
  }, [])

  return (
    (isReady &&
      <ChakraProvider theme={theme}>
        <Fade in={isReady}>
          <NavigationBar/>
          <Banner/>
          <Box layerStyle='section' as='main'>
            <Section id='aboutMe' paddingTop='20vh' section={<AboutMe/>}/>
            <Section id='projects' paddingTop='20vh' section={<Projects/>}/>
            <Section id='technology' paddingTop='15vh' section={<Technology/>}/>
            <Section id='artworks' paddingTop='20vh' section={<Artworks/>}/>
            <Section id='contacts' paddingTop='20vh' section={<Contacts/>}/>
            <Spacer height='8vh'/>
          </Box>
        </Fade>
      </ChakraProvider>
    )
  )
}

export default App

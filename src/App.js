import NavigationBar from './components/NavBar/NavigationBar.js'
import Banner from './components/Banner.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import Technology from './components/Technology.js'
import Artworks from './components/Artworks.js'
import Contacts from './components/Contacts.js'
import Section from './components/Section.js'

import { ChakraProvider, Box, Spacer } from '@chakra-ui/react'
import theme from './theme'

import '@fontsource/raleway/700.css'
import '@fontsource/raleway/400.css'
import '@fontsource/montserrat/500.css'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavigationBar/>
      <Banner/>
      <Box layerStyle='section'>
        <Section id='aboutMe' paddingTop='20vh' section={<AboutMe/>}/>
        <Section id='projects' paddingTop='20vh' section={<Projects/>}/>
        <Section id='technology' paddingTop='15vh' section={<Technology/>}/>
        <Section id='artworks' paddingTop='20vh' section={<Artworks/>}/>
        <Section id='contacts' paddingTop='20vh' section={<Contacts/>}/>
        <Spacer height='8vh'/>
      </Box>
    </ChakraProvider>
  )
}

export default App

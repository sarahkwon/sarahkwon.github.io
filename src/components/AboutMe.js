import Header from './Header'
import CatPic from "../img/yeehaw-cat.png"

import { Highlight, Flex, Center, Text, Stack, Box, Image, Tag } from '@chakra-ui/react'

const AboutMe = () => {
  return (
    <Box layerStyle='aboutMe'>
      <Header text="About Me" highlight={['About']} color="pink.200" textColor='black' />
      <Center>
        <Stack direction={['column', 'row']} spacing={10}>
            <Flex maxWidth='md' justifyContent='center' alignItems='center'>
              <Text maxWidth='md' textStyle='text'>
                Hello! I'm a Computer Science major at UCSB about to graduate this summer. Currently, my interests lie in front-end development and I'm working on learning web development with React and its many libraries. In order to have a better understanding of best practices and fundamentals, I'm taking an online course on full-stack development while building my own projects in parallel. 
                <br></br>
                <br></br>
                On my own time, I like to draw, play games, and make cute island designs in Animal Crossing! You can view my artworks <a href="#artworks">here</a>!
              </Text>
              
            </Flex>
            <Flex maxWidth='md' justifyContent='center' alignItems='center'>
              <Image boxShadow={['3vw 3vw #0c1e2d', '1.5vw 1.5vw #0c1e2d']} src={CatPic} alt="yeehaw-cat"/>
            </Flex>
        </Stack>
      </Center>
    </Box>
    
      
      
      
  )
}

export default AboutMe
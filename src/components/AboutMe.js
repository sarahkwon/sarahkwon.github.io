import Header from './Header'
import CatPic from "../img/yeehaw-cat.png"

import { useInView } from 'react-intersection-observer'

import { Flex, Center, Text, Stack, Box, Image, SlideFade} from '@chakra-ui/react'

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "0px 0px -10% 0px", // Wait until the element is 20% from the viewport bottom
  })

  return (
    <Box layerStyle='aboutMe'>
      <Header text="About Me" highlight={['About']} color="pink.200" textColor='black' />
      <Center>
        <Stack direction={['column', 'row']} spacing={10}>
            <Flex maxWidth='md' justifyContent='center' alignItems='center'>
              <SlideFade in={inView} ref={ref} offsetY='40px'>
                <Text maxWidth='md' textStyle='text'>
                  Hello! I'm a Computer Science major at UCSB about to graduate this summer. Currently, my interests lie in front-end development and I'm working on understanding React and its many libraries. In order to have a better understanding of best practices and fundamentals, I'm taking an online course on full-stack development while building my own projects in parallel. 
                  <br/>
                  <br/>
                  On my own time, I like to draw, play games, and make cute island designs in Animal Crossing! You can view my artworks <a href="#artworks">here</a>!
                </Text>
              </SlideFade>
            </Flex>
            <Flex maxWidth='md' justifyContent='center' alignItems='center'>
              <SlideFade in={inView} ref={ref} offsetY='40px'>
              <Image boxShadow={['3vw 3vw #c992a5', '1.5vw 1.5vw #c992a5']} src={CatPic} alt="yeehaw-cat"/>
              </SlideFade>
              
            </Flex>
        </Stack>
      </Center>
    </Box>
    
      
      
      
  )
}

export default AboutMe
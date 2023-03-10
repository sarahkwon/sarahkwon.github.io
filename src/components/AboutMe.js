import Header from './Header'
import CatPic from '../img/yeehaw-cat.png'

import { useInView } from 'react-intersection-observer'
import { aboutMeColor } from '../utils/Colors'

import { Flex, Center, Text, Stack, Box, Image, SlideFade } from '@chakra-ui/react'

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px', // Wait until the element is 20% from the viewport bottom
  })

  return (
    <Box layerStyle='aboutMe'>
      <Header text='About Me' highlight={['About']} color={aboutMeColor} textColor='black' />
      <Center>
        <Stack direction={['column', 'column', 'row']} spacing={10}>
          <Flex maxWidth='md' justifyContent='center' alignItems='center'>
            <SlideFade in={inView} ref={ref} offsetY='40px'>
              <Text maxWidth='md' textStyle='text' tabIndex='0'>
                Hello! I&apos;m Sarah and I&apos;m a 4th Computer Science major at UCSB.
                Currently, my interests lie in front-end development and my focus right now is building a solid understanding of React and the tools it offers. In order to accomplish this, I&apos;m taking an online course on full-stack development while building my own applications in parallel.
                <br/>
                <br/>
                On my own time, I like to draw, play games, and make cute island designs in Animal Crossing!
              </Text>
            </SlideFade>
          </Flex>
          <Flex maxWidth={['xs','md']} justifyContent='center' alignItems='center'>
            <SlideFade in={inView} ref={ref} offsetY='40px'>
              <Image
                tabIndex='0'
                boxShadow={[`3vw 3vw ${aboutMeColor}`, `1.5vw 1.5vw ${aboutMeColor}`]}
                src={CatPic}
                alt='A picture of me'/>
            </SlideFade>
          </Flex>
        </Stack>
      </Center>
    </Box>
  )
}

export default AboutMe
import Header from './Header'
import CatPic from '../img/yeehaw-cat.png'

import { useInView } from 'react-intersection-observer'
import { aboutMeColor } from '../utils/Colors'

import { Center, Text, Stack, Box, Image, SlideFade, Link } from '@chakra-ui/react'

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px', // Wait until the element is 20% from the viewport bottom
  })

  return (
    <Box>
      <Header text='About Me' highlight={['About']} color={aboutMeColor} textColor='black' />
      <Center>
        <Stack direction={['column', 'column', 'row']} spacing={10} padding='25px' pt={0}>
          <Center>
            <SlideFade in={inView} ref={ref} offsetY='40px'>
              <Text maxWidth='md' textStyle='text'>
                Hello! I&apos;m Sarah and I&apos;m a 4th year Computer Science major at UCSB with an interest in full-stack development. With my creative ideas and eye for design, I enjoy creating applications that are both visually appealing and user-friendly.
                <br/>
                <br/>
                Currently, the technologies I&apos;m working with are Javascript, React, and Node.js!
                <br/>
                <br/>
              </Text>
              <Link isExternal href='/Sarah_Kwon_Resume.pdf' color={aboutMeColor} textDecoration='underline'>View my resume</Link>
            </SlideFade>
          </Center>
          <Center>
            <SlideFade in={inView} ref={ref} offsetY='40px'>
              <Image
                boxShadow={[`3vw 3vw ${aboutMeColor}`, `1.5vw 1.5vw ${aboutMeColor}`]}
                src={CatPic}
                alt='A picture of me'
              />
            </SlideFade>
          </Center>
        </Stack>
      </Center>
    </Box>
  )
}

export default AboutMe
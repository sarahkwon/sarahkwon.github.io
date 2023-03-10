import Header from './Header'
import CatPic from '../img/yeehaw-cat.png'

import { useInView } from 'react-intersection-observer'
import { aboutMeColor } from '../utils/Colors'

import { Center, Text, Stack, Box, Image, SlideFade } from '@chakra-ui/react'

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
        <Stack direction={['column', 'column', 'row']} spacing={10}>
          <Center>
            <SlideFade in={inView} ref={ref} offsetY='40px'>
              <Text p={[5, 0]} maxWidth='md' textStyle='text' tabIndex='0'>
                Hello! I&apos;m Sarah and I&apos;m a 4th year Computer Science major at UCSB with a passion for front-end web development. With an eye for design and attention to detail, I enjoy creating applications that are both visually appealing and user-friendly.
                <br/>
                <br/>
                Throughout my development experience, enhancing the user experience has always been a priority of mine. Even for the games I&apos;ve developed, I placed a strong focus on making interfaces and task flows that were simple and enjoyable for players to follow.
                <br/>
                <br/>
                Whether it&apos;s creating responsive layouts, crafting intuitive UI, or bringing us one step closer to an accessible web, I love bringing ideas to life and turning them into polished and functional applications.
              </Text>
            </SlideFade>
          </Center>
          <Center>
            <SlideFade in={inView} ref={ref} offsetY='40px'>
              <Image
                mr={4}
                tabIndex='0'
                boxShadow={[`3vw 3vw ${aboutMeColor}`, `1.5vw 1.5vw ${aboutMeColor}`]}
                src={CatPic}
                alt='A picture of me'/>
            </SlideFade>
          </Center>
        </Stack>
      </Center>
    </Box>
  )
}

export default AboutMe
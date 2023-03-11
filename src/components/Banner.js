import { Heading, Highlight, Center, Box, SimpleGrid, SlideFade } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { bannerColor } from '../utils/Colors'

import '../styles/Banner.css'

const Banner = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px', // Wait until the element is 10% from the viewport bottom
  })


  return (
    <Box layerStyle='section' className='banner_bg-image' id='home'>
      <Center h='100%'>
        <SimpleGrid columns={1}>
          <Heading color='white' fontWeight='medium' size={['sm', 'md']}>
            <Highlight
              query={['Hello! I\'m']}
              styles={{ px: '2', py: '0', bg: `${bannerColor}`, borderRadius:'7px', color: '#121212' }}
            >
            Hello! I&apos;m
            </Highlight>
          </Heading>
          <SlideFade ref={ref} in={inView} offsetX='-30px'>
            <Heading variant='bannerMain' size={['3xl', '4xl']}>
              Sarah Kwon,
            </Heading>
          </SlideFade>
          <SlideFade ref={ref} in={inView} offsetY='30px'>
            <Heading
              variant='bannerSub'
              size={['md', 'lg']}
              as='h4'
              textAlign='center'
            >
              a front-end developer
            </Heading>
          </SlideFade>
        </SimpleGrid>
      </Center>
    </Box>
  )
}

export default Banner
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
    <Box layerStyle='banner' className='banner_bg-image' id='home'>
      <Center h='100%'>
        <SimpleGrid columns={1}>
          <SlideFade ref={ref} in={inView} offsetX='-30px'>
            <Heading textStyle='h2' size='3xl' as='h2'>
              <Highlight
                query={['Sarah']}
                styles={{ px: '2', py: '1', bg: `${bannerColor}` }}
              >
              Hi! I&apos;m Sarah Kwon
              </Highlight>
            </Heading>
          </SlideFade>
          <SlideFade ref={ref} in={inView} offsetY='30px'>
            <Heading textStyle='h4' size='xl' as='h4'>A developer</Heading>
          </SlideFade>
        </SimpleGrid>
      </Center>
    </Box>
  )
}

export default Banner
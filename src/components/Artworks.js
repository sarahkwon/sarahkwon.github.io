import { useState } from 'react'
import { Box, Container, Image, Button, Center, Collapse, SlideFade } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { artworksColor } from '../utils/Colors'
import imageUtils from '../utils/ImageUtils'
import Header from './Header'

const images = imageUtils.importImages()

const Artworks = () => {
  const [showMore, setShowMore] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px', // Wait until the element is 20% from the viewport bottom
  })

  const handleShowMore = (e) => {
    e.preventDefault()
    setShowMore(!showMore)
  }

  return (
    <Box>
      <Header text='My Art :)' highlight={['Art']} color={artworksColor} textColor='black'/>
      <SlideFade ref={ref} in={inView} offsetY='-50px'>
        <Container maxW='7xl' >
          <Collapse startingHeight='500px' in={showMore} >
            <Box
              padding={4}
              w='100%'
              maxW='100%'
              mx='auto'
              sx={{ columnCount: [2, 2, 3, 4, 5], columnGap: '4px' }}>
              {images.map((image) => {
                return (
                  <Image
                    key={image}
                    src={image}
                    d='inline-block'
                    alt='img'
                    mb={1}
                  />
                )
              })}
            </Box>
          </Collapse>
          <Center pt={5}>
            <Button aria-label={showMore ? 'Show Less' : 'Show More'} onClick={handleShowMore} bg={artworksColor}>{showMore ? 'Show Less' : 'Show More'}</Button>
          </Center>
        </Container>
      </SlideFade>
    </Box>
  )
}

export default Artworks
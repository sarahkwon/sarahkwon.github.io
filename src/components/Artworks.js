import Header from './Header'

import {useState} from 'react'
import { Box, Container, Image, Button, Center, Collapse } from '@chakra-ui/react'
const images = [];
function importAll(r) {
  r.keys().forEach((key) => {
    images.push(r(key));
  });
}

importAll(require.context('../img/artworks', false, /\.(png|jpe?g|svg)$/));

const Artworks = () => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = (e) => {
    e.preventDefault()
    setShowMore(!showMore)
  }

  return (
    <Box layerStyle="artworks" id="artworks">
      <Header text="My Art :)" highlight={['Art']} color="#b5d2d8" textColor="black"/>
      <Container maxW='7xl' >
          <Collapse startingHeight='500px' in={showMore} >
            <Box 
              padding={4}
              w="100%"
              maxW="100%"
              mx="auto"
              sx={{columnCount: [1, 2, 3, 4, 5], columnGap: "4px"}}>
              {images.map((image) => {
                return (
                    <Image key={image}
                      src={image} 
                      d="inline-block"
                      alt='img'
                      mb={1}
                    />
                )
              })}
            </Box>
          </Collapse>
        <Center pt={5}>
          <Button onClick={handleShowMore}>{showMore ? 'Show Less' : 'Show More'}</Button>
        </Center>
        
      </Container>
    </Box>
  )
}

export default Artworks
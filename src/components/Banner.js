import { Heading, Highlight, Center, Box, SimpleGrid } from '@chakra-ui/react'

import "../styles/Banner.css"

const Banner = () => {

  return (
    <Box className="banner_bg-image" id="home">
      <Center h='100%'>
        <SimpleGrid columns={1}>
          <Heading textStyle='h2' size='3xl' as='h2'>
            <Highlight
              query={['Sarah']}
              styles={{ px: '2', py: '1', bg: 'green.100' }}
            >
              Hii, I'm Sarah :-)
            </Highlight>
          </Heading>
          <Heading textStyle='h4' size='xl' as='h4'>Wassupppp</Heading>
        </SimpleGrid>
      </Center>
    </Box>
  )
}

export default Banner
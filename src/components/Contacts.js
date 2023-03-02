import Header from './Header'
import Socials from './Socials'

import { Box, Center, Container, Text, VStack, Link } from '@chakra-ui/react'

const Contacts = () => {
  return (
    <Box layerStyle="contacts">
      <Header text="Contact Me" highlight={['Contact']} color="pink.200" textColor="black"/>
      <Center>
        <VStack p={1}>
          <Text textStyle="text" textAlign="center">Feel free to contact me if you have any questions or want to connect! </Text>
          <Socials/>
        </VStack>
        
      </Center>
      
    </Box>
  )
}

export default Contacts
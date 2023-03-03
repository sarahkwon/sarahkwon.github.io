import Header from './Header'
import Socials from './Socials'
import MiniGuy from './MiniGuy'

import { Box, Center, Text, VStack } from '@chakra-ui/react'

import Link from '../img/Link.png'

const Contacts = () => {
  return (
    <Box id="contacts" layerStyle="contacts">
      <MiniGuy image={Link} maxSize='60px'/>
      <Header text="Contact Me" highlight={['Contact']} color="#e2b464" textColor="black"/>
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
import Header from './Header'
import Socials from './Socials'
import { contactsColor } from '../utils/Colors'

import { Box, Center, Text, VStack } from '@chakra-ui/react'

const Contacts = () => {
  return (
    <Box>
      <Header text="Contact Me" highlight={['Contact']} color={contactsColor}/>
      <Center>
        <VStack p={1}>
          <Text textStyle='text' textAlign='center'>Feel free to contact me if you have any questions or want to connect! </Text>
          <Socials/>
        </VStack>
      </Center>
    </Box>
  )
}

export default Contacts
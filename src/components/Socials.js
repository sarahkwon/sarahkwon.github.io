import SocialLink from './SocialLink'

import { FiMail } from 'react-icons/fi'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { Box, HStack, Container } from '@chakra-ui/react'

const Socials = () => {

  return (
    <Box>
      <Container maxW='sm' >
        <HStack>
          <SocialLink link='https://www.linkedin.com/in/sarah-kwon-651469186/' icon={<AiFillLinkedin size='48px' color='white'/>}/>
          <SocialLink link='https://github.com/sarahkwon' icon={<AiFillGithub size='48px' color='white'/>}/>
          <SocialLink link='https://twitter.com/_soonjee' icon={<AiFillTwitterCircle size='48px' color='white'/>}/>
          <SocialLink link='mailto:sarahkwon0415@gmail.com' icon={<FiMail size='48px' color='white'/>}/>
        </HStack>
      </Container>
    </Box>
  )
}

export default Socials
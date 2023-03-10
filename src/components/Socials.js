import SocialLink from './SocialLink'

import { FiMail } from 'react-icons/fi'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { Box, HStack, Container } from '@chakra-ui/react'

const Socials = () => {

  return (
    <Box>
      <Container maxW='sm' >
        <HStack>
          <SocialLink
            aria='View my LinkedIn profile'
            link='https://www.linkedin.com/in/sarah-kwon-651469186/'
            icon={<AiFillLinkedin size='48px' color='white'/>}
            label='LinkedIn'
            bg='white'
            textColor='black'
            placement='bottom'
          />
          <SocialLink
            aria='View my Github profile'
            link='https://github.com/sarahkwon'
            icon={<AiFillGithub size='48px' color='white'/>}
            label='Github'
            bg='white'
            textColor='black'
            placement='bottom'
          />
          <SocialLink
            aria='View my Twitter profile'
            link='https://twitter.com/_soonjee'
            icon={<AiFillTwitterCircle size='48px' color='white'/>}
            label='Twitter'
            bg='white'
            textColor='black'
            placement='bottom'
          />
          <SocialLink
            aria='My Email'
            link='mailto:sarahkwon0415@gmail.com'
            icon={<FiMail size='48px' color='white'/>}
            label='Email'
            bg='white'
            textColor='black'
            placement='bottom'
          />
        </HStack>
      </Container>
    </Box>
  )
}

export default Socials
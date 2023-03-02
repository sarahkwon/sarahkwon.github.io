

import { FiMail } from 'react-icons/fi'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { Box, Link, HStack, Container } from '@chakra-ui/react'

import '../styles/Socials.css'

const Socials = () => {

  return (
    <Box>
      <Container maxW='sm' >
        <HStack>
          <Link href="https://www.linkedin.com/in/sarah-kwon-651469186/">
            <AiFillLinkedin size='48px' color='white'/>
          </Link>
          <Link href="https://github.com/sarahkwon">
            <AiFillGithub size='48px' color='white'/>
          </Link>
          <Link href="https://twitter.com/_soonjee">
            <AiFillTwitterCircle size='48px' color='white'/>
          </Link>
          <Link href="mailto:sarahkwon0415@gmail.com">
            <FiMail size='48px' color='white'/>
          </Link>
        </HStack>
      </Container>
     
      
    </Box>
  )
}

export default Socials
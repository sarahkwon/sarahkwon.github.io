import '../styles/Header.css'

import { Highlight, Box, Center, Heading, Spacer } from '@chakra-ui/react'

const Header = (props) => {
  const {text, highlight, color, textColor} = props

  return (
    <Box>
      <Center>
        <Heading textStyle='h2' size='2xl' as='h2'>
        <Highlight
                  query={highlight}
                  styles={{ px: '2', py: '1', bg: color, color: textColor}}
                >
          {text}
          </Highlight>
        </Heading>
      </Center>
      <Spacer height="36px"/>
    </Box>
    
  )
}

export default Header
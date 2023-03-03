import '../styles/Header.css'

import { Highlight, Box, Center, Heading, Spacer, SlideFade } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

const Header = (props) => {
  const {text, highlight, color, textColor} = props

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "0px 0px -10% 0px", // Wait until the element is 20% from the viewport bottom
  })

  return (
    <Box>
      <SlideFade in={inView} ref={ref} offsetY='30px'>
        <Center>
          <Heading 
            textStyle='h2' 
            size='2xl' 
          >
            <Highlight
              query={highlight}
              styles={{ px: '2', py: '1', bg: color, color: textColor}}
            >
              {text}
              </Highlight>
          </Heading>
        </Center>
      </SlideFade>
      <Spacer height="36px"/>
    </Box>
    
  )
}

export default Header
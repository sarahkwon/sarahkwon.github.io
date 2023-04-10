import { Highlight, Center, Heading, Spacer, SlideFade } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

const Header = (props) => {
  const { text, highlight, color } = props
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px', // Wait until the element is 20% from the viewport bottom
  })

  return (
    <header>
      <SlideFade in={inView} ref={ref} offsetY='30px'>
        <Center>
          <Heading
            variant='section'
            size='2xl'
          >
            <Highlight
              query={highlight}
              styles={{ px: '5', bg: `${color}`, color: 'black', borderRadius: '7px', fontWeight: 'bold' }}
            >
              {text}
            </Highlight>
          </Heading>
        </Center>
      </SlideFade>
      <Spacer height='36px'/>
    </header>
  )
}

export default Header
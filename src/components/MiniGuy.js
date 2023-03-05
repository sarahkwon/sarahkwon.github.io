import { Center, Image, SlideFade } from '@chakra-ui/react'

import { useInView } from 'react-intersection-observer'

const MiniGuy = (props) => {
  const { image, maxSize } = props

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px', // Wait until the element is 20% from the viewport bottom
  })

  return (
    <SlideFade ref={ref} in={inView} offsetY='40px'>
      <Center>
        <Image src={image} maxW={maxSize} />
      </Center>
    </SlideFade>
  )
}

export default MiniGuy
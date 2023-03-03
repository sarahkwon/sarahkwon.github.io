import {Center, Image } from '@chakra-ui/react'

const MiniGuy = (props) => {
  const { image, maxSize } = props

  return (
    <Center>
      <Image src={image} maxW={maxSize} />
    </Center>
  )
}

export default MiniGuy
import { Box, Link, Image } from '@chakra-ui/react'
import Kino from '../../img/kinoSprite1.png'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href='#'>
        <Image src={Kino} alt="Sarah"/>
      </Link>
    </Box>
  )
}
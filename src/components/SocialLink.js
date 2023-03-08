import { Link } from '@chakra-ui/react'

const SocialLink = (props) => {
  const { link, icon } = props

  return (
    <Link
      href={link}
      target='_blank'
      _hover={{
        transitionDuration: '.2s',
        transform: 'scale(1.2)',
        transitionTimingFunction: 'ease-in-out'
      }}
    >
      {icon}
    </Link>
  )
}

export default SocialLink
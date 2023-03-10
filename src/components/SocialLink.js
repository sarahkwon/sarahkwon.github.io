import { Link, Tooltip } from '@chakra-ui/react'

const SocialLink = (props) => {
  const { link, icon, label, bg, textColor, placement, aria } = props

  return (
    <Tooltip hasArrow placement={placement} label={label} bg={bg} color={textColor}>
      <Link
        aria-label={aria}
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
    </Tooltip>
  )
}

export default SocialLink
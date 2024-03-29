import { Tag } from '@chakra-ui/react'

const TechTag = (props) => {
  const { text, color } = props
  return (
    <Tag bg={color} color='#121212' fontWeight='bold'>
      {text}
    </Tag>
  )
}

export default TechTag
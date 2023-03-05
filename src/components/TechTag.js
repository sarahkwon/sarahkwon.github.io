import { Tag } from '@chakra-ui/react'

const TechTag = (props) => {
  const { text, color } = props
  return (
    <Tag bg={color}>
      {text}
    </Tag>
  )
}

export default TechTag
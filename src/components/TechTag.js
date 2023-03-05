import { Tag } from '@chakra-ui/react'

const TechTag = (props) => {
  const { text } = props
  return (
    <Tag bg='#46a6d4'>
      {text}
    </Tag>
  )
}

export default TechTag
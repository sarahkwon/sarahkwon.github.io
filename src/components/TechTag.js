import { Tag } from '@chakra-ui/react'

const TechTag = (props) => {
  const {text} = props

  return (
    <Tag bg='pink.200'>
      {text}
    </Tag>
  )
}

export default TechTag
import { Tag } from '@chakra-ui/react'

const TechTag = (props) => {
  const {text} = props

  return (
    <Tag bg='#e8d8ed'>
      {text}
    </Tag>
  )
}

export default TechTag
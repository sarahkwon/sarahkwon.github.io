import { Tag } from '@chakra-ui/react'

const TechTag = (props) => {
  const {text} = props

  return (
    <Tag bg='#c686b6'>
      {text}
    </Tag>
  )
}

export default TechTag
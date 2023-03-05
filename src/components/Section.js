import { Spacer, Box } from '@chakra-ui/react'

const Section = (props) => {
  const { paddingTop, layerStyle, section, id } = props

  return (
    <Box id={id}>
      <Spacer height={paddingTop} layerStyle={layerStyle}/>
      {section}
    </Box>
  )
}

export default Section
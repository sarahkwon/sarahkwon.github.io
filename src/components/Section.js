import { Spacer, Box } from '@chakra-ui/react'

const Section = (paddingTop, layerStyle, section, id) => {

  return (
    <Box id={id}>
      <Spacer height={paddingTop} layerStyle={layerStyle}/>
      {section}
    </Box>
  )
}

export default Section
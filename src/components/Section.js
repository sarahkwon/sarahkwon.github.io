import { Spacer, Box } from '@chakra-ui/react'

const Section = (props) => {
  const { paddingTop, layerStyle, section, id } = props

  return (
    <Box>
      <Spacer height={paddingTop} layerStyle={layerStyle}/>
      <Box id={id} pt='75px' tabIndex='0'>
        {section}
      </Box>
    </Box>
  )
}

export default Section
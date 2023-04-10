import { Spacer, Box } from '@chakra-ui/react'

const Section = (props) => {
  const { paddingTop, section, id } = props

  return (
    <Box>
      <Spacer height={paddingTop}/>
      <Box id={id} pt='75px' as='section'>
        {section}
      </Box>
    </Box>
  )
}

export default Section
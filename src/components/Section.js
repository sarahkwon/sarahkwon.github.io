import { Spacer } from '@chakra-ui/react'

const Section = (props) => {
  const { paddingTop, layerStyle, section } = props

  return (
    <> 
      <Spacer height={paddingTop} layerStyle={layerStyle}/>
      {section}
    </>
  )
}

export default Section
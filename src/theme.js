import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  textStyles: {
    h2: {
      fontWeight: 600,
      color: 'white'
    },
    h4: {
      fontWeight: 400,
      color: 'white'
    },
    text: {
      fontWeight: 400,
      color: '#CCCCCC',
      fontSize: '16px'
    }
  },
  layerStyles: {
    aboutMe: {
      backgroundColor: '#234152',
      paddingLeft: '25px',
      paddingRight: '25px'
    }
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Montserrat', serif`,
  }
})

export default theme

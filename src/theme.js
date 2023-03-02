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
    },
    cardText: {
      fontWeight: 400,
      color: '#f5edf7',
      fontSize: '16px'
    }
  },
  layerStyles: {
    aboutMe: {
      backgroundColor: '#234152',
      paddingLeft: '25px',
      paddingRight: '25px'
    },
    projects: {
      backgroundColor: '#5da3b6',
    },
    banner: {
      paddingRight: '25px',
      paddingLeft: '25px'
    }
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Montserrat', serif`,
  }
})

export default theme

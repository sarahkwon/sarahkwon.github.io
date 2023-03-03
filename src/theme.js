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
    cardHeader: {
      fontWeight: 600,
      color: 'white',
    },
    cardText: {
      fontWeight: 400,
      color: '#CCCCCC',
      fontSize: '16px'
    }
  },
  layerStyles: {
    aboutMe: {
      backgroundColor: '#111111',
      paddingLeft: '25px',
      paddingRight: '25px'
    },
    projects: {
      backgroundColor: '#111111',
    },
    banner: {
      paddingRight: '25px',
      paddingLeft: '25px'
    },
    technology: {
      paddingRight: '25px',
      paddingLeft: '25px',
      backgroundColor: '#111111'
    },
    artworks: {
      backgroundColor: '#111111'
    },
    contacts: {
      backgroundColor: '#111111'
    }
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Montserrat', serif`,
  }
})

export default theme

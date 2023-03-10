import { extendTheme } from '@chakra-ui/react'

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
      fontSize: ['14px', '16px'],
      lineHeight: 1.6
    },
    cardHeader: {
      fontWeight: 600,
      color: 'white',
    },
    cardTypeText: {
      fontWeight: 600,
    }
  },
  layerStyles: {
    section: {
      maxWidth: '100%',
      backgroundColor: '#121212',
      paddingLeft: '16px',
      paddingRight: '16px'
    }
  },
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Montserrat, serif',
  }
})

export default theme

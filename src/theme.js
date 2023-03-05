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
      fontSize: ['14px', '16px']
    },
    cardHeader: {
      fontWeight: 600,
      color: 'white',
    },
    cardText: {
      fontWeight: 400,
      color: '#CCCCCC',
      fontSize: ['14px', '16px']
    },
    cardTypeText: {
      fontWeight: 600,
      color: '#46a6d4'
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
    heading: 'Raleway, sans-serif',
    body: 'Montserrat, serif',
  },
  colors: {
    brand: {
      50: '#f7fafc',
      500: '#718096',
      900: '#171923',
    }
  }
})

export default theme

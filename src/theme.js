import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  textStyles: {
    text: {
      fontWeight: 400,
      color: '#CCCCCC',
      fontSize: ['14px', '16px'],
      lineHeight: 1.6
    },
    cardHeader: {
      fontWeight: 'medium',
      color: 'white',
    },
    cardTypeText: {
      fontWeight: 600,
    },
    techTag: {
      fontWeight: 'bold'
    }
  },
  layerStyles: {
    section: {
      maxWidth: '100%',
      backgroundColor: '#121212',
      paddingLeft: '16px',
      paddingRight: '16px'
    },
    artworks: {
      paddingLeft: '0px',
      paddingRight: '0px'
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Montserrat, serif',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600
  },
  components: {
    Heading: {
      variants: {
        section: {
          as: 'h4',
          fontWeight: 'medium',
          color: 'white'
        },
        subheading: {
          fontWeight: 'bold',
          color: 'white'
        },
        bannerMain: {
          as: 'h2',
          textAlign: 'center',
          color: 'white',
          fontWeight: 'medium',
        },
        bannerSub: {
          as: 'h4',
          color: 'white',
          fontWeight: 'medium'
        }
      }
    },
    Tag: {
      variants: {
        techTag: {
          fontWeight: 'medium'
        }
      }
    }
  }
})

export default theme

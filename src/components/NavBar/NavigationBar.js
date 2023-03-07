import { useState } from 'react'
import { Link, Box, Flex, Text, Stack } from '@chakra-ui/react'
import { aboutMeColor, technologyColor, projectsColor, artworksColor, contactsColor } from '../../utils/Colors'

import '../../styles/NavigationBar.css'

import Logo from './Logo'

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrolled } = props

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer scrolled={scrolled}>
      <Logo
        w='100px'
        color={['white', 'white', 'primary.500', 'primary.500']}
        _hover={{
          transitionDuration: '.2s',
          transform: 'scale(1.1)',
          transitionTimingFunction: 'ease-in-out'
        }}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} scrolled={scrolled}/>
    </NavBarContainer>
  )
}

const CloseIcon = () => (
  <svg width='24' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <title>Close</title>
    <path
      fill='white'
      d='M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z'
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width='24px'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    fill='white'
  >
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
)

const MenuToggle = (props) => {
  const { toggle, isOpen } = props
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const MenuItem = (props) => {
  const { children, to = '/', hoverColor, scrolled, ...rest } = props
  console.log(scrolled)
  return (
    <Link
      href={to}
      padding='0 5px 0 5px'
      _hover = {{
        textDecoration: 'none',
        transitionDuration: '.2s',
        color: scrolled ? hoverColor : 'black',
        bg: scrolled ? 'rgba(0,0,0,0)' : hoverColor,
        borderRadius: scrolled ? '0px' : '5px',
        transform: 'scale(1.1)',
        transitionTimingFunction: 'ease-in-out'
      }}
    >
      <Text display='block' {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ( props ) => {
  const { isOpen, scrolled } = props
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'center', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
        pb={[4, 4, 0, 0]}
      >
        <MenuItem to='#aboutMe' hoverColor={aboutMeColor} scrolled={scrolled}>About</MenuItem>
        <MenuItem to='#projects' hoverColor={projectsColor} scrolled={scrolled}>Projects</MenuItem>
        <MenuItem to='#technology' hoverColor={technologyColor} scrolled={scrolled}>Technology</MenuItem>
        <MenuItem to='#artworks' hoverColor={artworksColor} scrolled={scrolled}>Artworks</MenuItem>
        <MenuItem to='#contacts' hoverColor={contactsColor} scrolled={scrolled}>Contact</MenuItem>
      </Stack>
    </Box>
  )
}

const NavBarContainer = ( { children, scrolled } ) => {

  return (
    <Flex
      position='fixed'
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      pr={8}
      pl={8}
      pt={1}
      pb={1}
      bg={['rgba(17,17,17, 0.5)', 'rgba(17,17,17, 0.5)', scrolled ? 'rgba(17,17,17, 0.5)' : 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      backdropFilter="auto"
      backdropBlur={[scrolled ? '4px' : 'transparent']}
      zIndex='9999'
    >
      {children}
    </Flex>
  )
}

export default NavigationBar
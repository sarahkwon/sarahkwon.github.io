import {useEffect, useState, React} from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";

import '../../styles/NavigationBar.css'

import Logo from "./Logo";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="#aboutMe">About</MenuItem>
        <MenuItem to="#projects">Projects</MenuItem>
        <MenuItem to="#technology">Technology</MenuItem>
        <MenuItem to="#artworks">Artworks</MenuItem>
        <MenuItem to="#contacts">Contact</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  const [scrolled, setScrolled] = useState(false)

  //runs on scroll, when the user gets past a certain point on the screen, it will update the look of the navbar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrolled])

  return (
    <Flex
      position="fixed"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      pr={8}
      pl={8}
      pt={3}
      pb={3}
      bg={['#111111', scrolled ? '#111111' : 'transparent']}
      color={["white", "white", "primary.700", "primary.700"]}
      boxShadow={[scrolled ? '1px 1px 2px 0px #333333' : 'transparent']}
      zIndex="9999"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavigationBar;
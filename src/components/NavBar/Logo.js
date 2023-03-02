import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Kino from '../../img/kinoSprite1.png'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Image src={Kino} alt="Sarah"/>
      </Text>
    </Box>
  );
}
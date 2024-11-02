import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CardComponent = () => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      width="100%"
      maxW="md"
    >
      <Text fontSize="lg" fontWeight="bold">Chakra UI Card</Text>
      <Text mt={2}>This is a simple card component to display information.</Text>
    </Box>
  );
};

export default CardComponent;

import React from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import HeadingComponent from './components/HeadingComponent';
import ButtonComponent from './components/ButtonComponent';
import InputComponent from './components/InputComponent';
import CardComponent from './components/CardComponent';
// import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ChakraProvider>
      <Box p={5}>
        <VStack spacing={4}>
          <HeadingComponent />
          <InputComponent />
          <ButtonComponent />
          <CardComponent />
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;

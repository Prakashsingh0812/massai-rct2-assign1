import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; // Correct import for ChakraProvider
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import theme from './components/theme'; // Import your theme if you have a custom one

// Create a root
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Use createRoot

// Render your app
root.render(
  <ChakraProvider theme={theme}> {/* Ensure the theme is correctly passed */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ChakraProvider>
);

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  VStack,
  Button,
  useColorMode,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import WalletConnector from './components/WalletConnector';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, gray.700, black.700)'
  );
  const boxBg = useColorModeValue('whiteAlpha.900', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <ChakraProvider>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bgGradient={bgGradient}
        color="white"
        position="relative"
      >
        {/* Top Right Corner Icon */}
        <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          position="absolute"
          top="1rem"
          right="1rem"
          variant="ghost"
          size="lg"
          fontSize="xl"
          colorScheme="teal"
        />
        
        <Box
          p={10}
          borderRadius="lg"
          boxShadow="xl"
          bg={boxBg}
          color={textColor}
          maxW="lg"
          width="100%"
        >
          <VStack spacing={6}>
            <Text fontSize="3xl" fontWeight="bold">
              Crypto Wallet Connector
            </Text>
            <WalletConnector />
          </VStack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

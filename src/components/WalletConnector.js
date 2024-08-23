import React, { useState } from 'react';
import { ethers } from 'ethers';
import {
  Button,
  Text,
  VStack,
  Box,
  Spinner,
  useColorModeValue
} from '@chakra-ui/react';

function WalletConnector() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setLoading(true);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setAccount(accounts[0]);

        const balance = await provider.getBalance(accounts[0]);
        setBalance(ethers.formatEther(balance));
        setLoading(false);
      } catch (error) {
        console.error("Error connecting to wallet", error);
        setLoading(false);
      }
    } else {
      alert('Please install MetaMask or another Ethereum wallet!');
    }
  };

  // Background colors for light and dark modes
  const accountBg = useColorModeValue('teal.100', 'teal.600');
  const balanceBg = useColorModeValue('blue.100', 'blue.600');

  return (
    <VStack spacing={4} width="full">
      <Button
        onClick={connectWallet}
        colorScheme="teal"
        size="lg"
        fontSize="md"
        width="full"
      >
        Connect Wallet
      </Button>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <>
          {account && (
            <Box p={4} bg={accountBg} borderRadius="md" width="full">
              <Text fontSize="lg" fontWeight="bold">
                Connected Account:
              </Text>
              <Text>{account}</Text>
            </Box>
          )}
          {balance && (
            <Box p={4} bg={balanceBg} borderRadius="md" width="full">
              <Text fontSize="lg" fontWeight="bold">
                Balance:
              </Text>
              <Text>{balance} ETH</Text>
            </Box>
          )}
        </>
      )}
    </VStack>
  );
}

export default WalletConnector;

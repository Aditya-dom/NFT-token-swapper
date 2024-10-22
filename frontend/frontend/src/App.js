import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { TokenboundClient } from '@tokenbound/sdk';
import TokenSwapABI from './TokenSwapABI.json';
import SwapForm from './components/SwapForm';
import TransactionHistory from './components/TransactionHistory';

const App = () => {
  const [nftFrom, setNftFrom] = useState('');
  const [nftTo, setNftTo] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const tbaClient = new TokenboundClient({ signer });

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    const accounts = await provider.listAccounts();
    if (accounts.length > 0) {
      setWalletAddress(accounts[0]);
      setIsConnected(true);
    }
  };

  const connectWallet = async () => {
    try {
      const accounts = await provider.send('eth_requestAccounts', []);
      setWalletAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      console.error('Wallet connection failed', error);
    }
  };

  const getTbaAddress = async (contract, tokenId) => {
    return await tbaClient.getAccount(contract, tokenId);
  };

  const approveTokens = async (erc20Address, owner, amount) => {
    const tokenSwap = new ethers.Contract(
      '0xTOKEN_SWAP_CONTRACT_ADDRESS', // Replace with your deployed contract address
      TokenSwapABI,
      signer
    );

    const tx = await tokenSwap.approveToken(erc20Address, owner, ethers.utils.parseEther(amount));
    await tx.wait();
  };

  const swapTokens = async () => {
    setStatus('Swapping...');
    try {
      const nftFromAddress = await getTbaAddress('0xNFT_CONTRACT_ADDRESS', nftFrom);
      const nftToAddress = await getTbaAddress('0xNFT_CONTRACT_ADDRESS', nftTo);

      await approveTokens('0xERC20_CONTRACT_ADDRESS', nftToAddress, amount);

      const tx = await tbaClient.sendTransaction({
        from: nftFromAddress,
        to: nftToAddress,
        value: 0,
        data: '0x',
      });

      await tx.wait();
      setStatus('Swap successful!');
      setTransactions((prev) => [...prev, { from: nftFrom, to: nftTo, amount }]);
    } catch (error) {
      console.error(error);
      setStatus('Swap failed.');
    }
  };

  return (
    <div className="App">
      <h1>NFT Token Swapper</h1>
      {!isConnected ? (
        <button type="button" onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <p>Connected: {walletAddress}</p>
      )}
      <SwapForm
        nftFrom={nftFrom}
        nftTo={nftTo}
        amount={amount}
        setNftFrom={setNftFrom}
        setNftTo={setNftTo}
        setAmount={setAmount}
        onSwap={swapTokens}
      />
      <p>{status}</p>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
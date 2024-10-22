# NFT token swapper with ERC-6551 TBA SDK V3

This project allows users to **swap ERC-20 tokens stored in Token Bound Accounts (TBA)**. It leverages **ERC-6551 technology** to interact with NFTs as smart wallets. This repository includes a smart contract, a React-based frontend, and integration with the **Tokenbound SDK V3** for seamless token transfers between NFTs.

---

## Features

- **ERC-20 Token Swapping**: Transfer tokens from one NFT wallet (TBA) to another.
- **Token Bound Account (TBA) Support**: Use ERC-6551 smart wallets for NFTs.
- **Wallet Connection**: Connect via MetaMask and interact with NFTs.
- **Transaction History**: Track all successful swaps.
- **Approval Handling**: Automatically approve token transfers to new owners.
- **Responsive UI**: Clean and modern frontend using React.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (version 16+)
- **MetaMask** browser extension
- **Infura API Key** (or any other Ethereum RPC provider)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nft-token-swapper.git
cd nft-token-swapper
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a **`.env`** file in the project root with the following:

```
INFURA_API_KEY=<your-infura-api-key>
PRIVATE_KEY=<your-private-key>
```

---

## Smart Contract Deployment

1. Compile the smart contract using Hardhat:

   ```bash
   npx hardhat compile
   ```

2. Deploy the contract to **Goerli Testnet** (or another network):

   ```bash
   npx hardhat run scripts/deploy.js --network goerli
   ```

3. Note the **contract address** from the deployment output.

---

## Frontend Setup

1. Navigate to the **frontend** directory:

   ```bash
   cd frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Update the **contract address** in `src/App.js` with the deployed contract address.

4. Start the React app:

   ```bash
   npm start
   ```

---

## How to Use

1. **Connect Wallet**: Click "Connect Wallet" to link MetaMask.
2. **Enter NFT IDs**: Provide the IDs of the NFTs you want to swap between.
3. **Enter Token Amount**: Specify the amount of ERC-20 tokens to swap.
4. **Swap Tokens**: Click "Swap Tokens" to initiate the transaction.
5. **View Transaction History**: Successful swaps will appear in the transaction history.

---

## Project Structure

```
/nft-token-swapper
│
├── contracts/
│   └── TokenSwap.sol           # Smart contract for token approval
├── scripts/
│   └── deploy.js               # Deployment script for the contract
├── frontend/
│   ├── src/
│   │   ├── components/         # Modular React components
│   │   │   ├── SwapForm.js
│   │   │   └── TransactionHistory.js
│   │   ├── App.js              # Main React component
│   │   ├── TokenSwapABI.json   # ABI for interacting with the contract
│   │   └── styles.css          # Custom CSS styling
├── hardhat.config.js           # Hardhat configuration file
├── .env                        # Environment variables
└── README.md                   # Documentation for the project
```

---

## Technologies Used

- **Solidity**: Smart contract development
- **Hardhat**: Ethereum development environment
- **React**: Frontend framework
- **Ethers.js**: Ethereum JavaScript library
- **Tokenbound SDK V3**: TBA management
- **MetaMask**: Wallet integration

---

## Testing the Application

To test the full flow:

1. Switch your MetaMask to the Goerli network (or your chosen testnet).
2. Deploy a sample **ERC-20 token contract** (optional).
3. Use the frontend interface to swap tokens between NFTs.
4. Check the transaction history for successful swaps.

---

## Potential Improvements

- **Multiple Token Support**: Add a dropdown to select different ERC-20 tokens.
- **Balance Display**: Show token balances of NFTs (TBA) in real time.
- **Network Switching**: Detect and prompt network changes if needed.
- **Loading Indicators**: Improve UX with loading spinners during swaps.

---

## Troubleshooting

1. **MetaMask Connection Issues**: Make sure MetaMask is installed and connected to the correct network.
2. **Contract Interaction Fails**: Double-check the deployed contract address.
3. **Infura Issues**: Verify your **Infura API key** is correct and working.

---

## Contributing

Feel free to open issues or submit pull requests if you'd like to contribute to the project.

---


## Acknowledgements

- **OpenAI** for helpful insights during development.
- **Tokenbound** for the TBA SDK.
- **Ethereum** community for documentation and tutorials.
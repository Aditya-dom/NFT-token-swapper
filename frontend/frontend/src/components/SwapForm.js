import React from 'react';

const SwapForm = ({ nftFrom, nftTo, amount, setNftFrom, setNftTo, setAmount, onSwap }) => (
  <div>
    <input
      type="text"
      placeholder="NFT ID From"
      value={nftFrom}
      onChange={(e) => setNftFrom(e.target.value)}
    />
    <input
      type="text"
      placeholder="NFT ID To"
      value={nftTo}
      onChange={(e) => setNftTo(e.target.value)}
    />
    <input
      type="number"
      placeholder="Amount (ERC-20)"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
    <button type="button" onClick={onSwap}>Swap Tokens</button>
  </div>
);

export default SwapForm;
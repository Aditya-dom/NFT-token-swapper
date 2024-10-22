import React from 'react';


const TransactionHistory = ({ transactions }) => (
    <div>
        <h2>Transaction History</h2>
        <ul>
            {transactions.map((tx) => (
                <li key={tx.id}>
                    From NFT {tx.from} → To NFT {tx.to} | Amount: {tx.amount}
                </li>
            ))}
        </ul>
    </div>
);

export default TransactionHistory;

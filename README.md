# Sample Hardhat Project to deploy in MONAD TESTNET

## 🪙 Token Monad - ERC20 Upgradeable

### 📌 Overview

Token Monad is an upgradeable ERC20 contract based on Solidity 0.8.28. It includes additional functionalities such as access control, pausability, blacklist, staking, and reentrancy protection. The contract is designed to be upgraded in the future without losing stored data.

## ✅ Requirements

Before setting up and running the project, ensure you have the following requirements:

- **Node.js** (version 16 or higher) - Required for running Hardhat and deployment scripts.
- **NPM or Yarn** - To manage project dependencies.
- **Hardhat** - Framework for smart contract development.
- **Metamask or another Web3 wallet** - To interact with the contract.
- **Access to a Testnet (Monad Testnet)** - To deploy and test the contract.
- **A compatible development environment** (VS Code recommended) - For editing and compiling contracts.

## ⚠️ Important!!!

- Create a copy of the hardhat.config.js.example file and rename it to hardhat.config.js.

- Then, edit the hardhat.config.js file with your wallet's private key to deploy the contract.

## ⚡ Features

### 🔹 Upgradeable ERC20

The token is implemented using OpenZeppelin’s ERC20Upgradeable, allowing upgrades without losing contract data.
 
### 🔹 Access Control (Roles)

Uses AccessControlUpgradeable to manage permissions:

DEFAULT_ADMIN_ROLE - General administrator.

MINTER_ROLE - Permission to mint new tokens.

### 🔹 Emission Cap

Defines a maximum token cap that can be minted.

Prevents minting beyond this limit.

### 🔹 Protected Transfers

Blacklist: Blocks transfers from addresses deemed malicious.

Pausability: Allows the administrator to pause transfers.

Transaction logging: Stores the timestamp of the last transaction for each account.

### 🔹 Staking with Rewards

Users can lock tokens to receive 15% APY.

Staking time is recorded in the contract.

Events are emitted for staking and unstaking.

### 🔹 Reentrancy Protection

Uses ReentrancyGuardUpgradeable to prevent reentrancy attacks.

## 🛠️ How to Change Token Name and Values

###  👉 Change Token Name and Symbol

Edit the variables name and symbol in scripts/deploy.ts:

`const tokenName = "GMonad";`

`const tokenSymbol = "GMD";`

### 👉 Change Initial Supply and Cap

Edit the variables initialSupply and cap in scripts/deploy.ts:

`const initialSupply = ethers.parseUnits("1000000", 18) // 1 milhão de tokens`

`const cap = ethers.parseUnits("2000000", 18) // 2 milhões de tokens como limite`

## 🛠️ How to Deploy the Contract

### 1️- Install Dependencies

npm install

### 2- Compile the Contract

npx hardhat compile

### 3- Deploy to Monad Testnet

npx hardhat run scripts/deploy.ts --network monadTestnet

## 📜 License

This project is licensed under the MIT License.

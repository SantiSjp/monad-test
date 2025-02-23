# Sample Hardhat Project to deploy in MONAD TESTNET

## 🪙 Token Monad - ERC20 Upgradeável

### 📌 Visão Geral

Token Monad é um contrato ERC20 upgradeável baseado em Solidity 0.8.28. Ele inclui funcionalidades adicionais como controle de acesso, pausabilidade, blacklist, staking e proteção contra reentrância. O contrato está preparado para ser atualizado no futuro sem perder os dados armazenados.

## ✅ Requisitos

Antes de configurar e rodar o projeto, certifique-se de ter os seguintes requisitos:

- **Node.js** (versão 16 ou superior) - Para execução do Hardhat e scripts de deploy.
- **NPM ou Yarn** - Para gerenciar dependências do projeto.
- **Hardhat** - Framework para desenvolvimento de smart contracts.
- **Metamask ou outra carteira Web3** - Para interagir com o contrato.
- **Acesso a uma Testnet (Monad Testnet)** - Para implantar e testar o contrato.
- **Ambiente de desenvolvimento compatível** (VS Code recomendado) - Para editar e compilar contratos.

## ⚠️ Importante!!!

- Crie uma cópia do arquivo hardhat.config.js.example e renomeie-o para hardhat.config.js

- E em seguida edite o arquivo hardhat.config.js com a chave privada da sua carteira para fazer o deploy.

## ⚡ Funcionalidades

### 🔹 ERC20 Upgradeável

O token é implementado com ERC20Upgradeable da OpenZeppelin, permitindo upgrades sem perder dados do contrato.
 
### 🔹 Controle de Acesso (Roles)

Utiliza AccessControlUpgradeable para gerenciar permissões:

DEFAULT_ADMIN_ROLE - Administrador geral.

MINTER_ROLE - Permissão para criar novos tokens.

### 🔹 Cap de Emissão

Define um limite máximo de tokens (cap) que pode ser emitido.

Impede que a emissão ultrapasse esse limite.

### 🔹 Transferências Protegidas

Blacklist: Bloqueia transferências de endereços considerados maliciosos.

Pausabilidade: Permite ao administrador pausar transferências.

Registro de transações: Armazena o timestamp da última transação para cada conta.

### 🔹 Staking com Recompensas

Os usuários podem travar tokens para receber 15% APY.

Tempo de staking é registrado no contrato.

Eventos emitidos para staking e unstaking.

### 🔹 Proteção contra Reentrância

Utiliza ReentrancyGuardUpgradeable para evitar ataques de reentrância.

## 🛠️ Como Alterar Nome e Valores do Token

###  👉 Alterar Nome e Símbolo do Token

Em scripts/deploy.ts, altere as variáveis name e symbol para os novos valores.

`const tokenName = "GMonad";`

`const tokenSymbol = "GMD";`

### 👉 Alterar Supply Inicial e Cap

Em scripts/deploy.ts, altere as variáveis initialSupply e cap para os novos valores.

`const initialSupply = ethers.parseUnits("1000000", 18) // 1 milhão de tokens`

`const cap = ethers.parseUnits("2000000", 18) // 2 milhões de tokens como limite`

## 🛠️ Como Implantar o Contrato

### 1️- Instalar Dependências

npm install

### 2- Compilar o Contrato

npx hardhat compile

### 3- Implantar na Rede Monad Testnet

npx hardhat run scripts/deploy.ts --network monadTestnet

## 📜 Licença

Este projeto está licenciado sob a MIT License.
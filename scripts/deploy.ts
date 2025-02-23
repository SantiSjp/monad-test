require("dotenv").config();
const { ethers, upgrades } = require("hardhat");

async function main() {
    console.log("🚀 Deploying Token...");

    // Parâmetros de inicialização do contrato
    const tokenName = "GMonad";
    const tokenSymbol = "GMD";
    const initialSupply = ethers.parseUnits("1000000", 18) // 1 milhão de tokens
    const cap = ethers.parseUnits("2000000", 18) // 2 milhões de tokens como limite

    console.log("Token Name:", tokenName);
    console.log("Token Symbol:", tokenSymbol);

    // Obter conta de deploy
    const [deployer] = await ethers.getSigners();
    // console.log("📡 Deploying from address:", deployer.address);

    // Instanciar e fazer deploy do contrato upgradeável
    const Token = await ethers.getContractFactory("Token");
    const token = await upgrades.deployProxy(Token, [tokenName, tokenSymbol, initialSupply, cap], {
        initializer: "initialize",
    });

    await token.waitForDeployment();
    console.log("✅ Token deployed at:", await token.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

const hre = require("hardhat");

async function main() {
  const TokenSwap = await hre.ethers.getContractFactory("TokenSwap");
  const tokenSwap = await TokenSwap.deploy();

  console.log(`TokenSwap deployed to: ${tokenSwap.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
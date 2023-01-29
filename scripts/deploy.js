const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("RussianRoulette");
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log(`Contract deployed to ${contract.address}`);
}

main()
  .then(() => {
    process.exit(1);
  })
  .catch((e) => {
    console.error(e);
    process.exit(0);
  });

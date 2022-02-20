const hre = require("hardhat");

async function main() {
  const transactionFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionContract = await transactionFactory.deploy();

  await transactionContract.deployed();

  console.log("Transaction contract deployed to:", transactionContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

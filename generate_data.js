const { ethers } = require("ethers");
const fs = require("fs");

async function generateAndWriteAddresses(numberOfAddresses = 1000) {
  const addresses = [];

  for (let i = 0; i < numberOfAddresses; i++) {
    const wallet = ethers.Wallet.createRandom();
    const userAddress = wallet.address;
    const amount = Math.floor(Math.random() * 10000); // Random amount
    const reward = Math.floor(Math.random() * 1000); // Random reward

    addresses.push({
      userAddress: userAddress,
      amount: amount,
      reward: reward,
    });
  }

  const jsonData = JSON.stringify(addresses, null, 2);

  fs.writeFile("addresses.json", jsonData, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Successfully wrote addresses to addresses.json");
    }
  });
}

generateAndWriteAddresses().catch((err) =>
  console.error("An error occurred:", err)
);

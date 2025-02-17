// 0x5FbDB2315678afecb367f032d93F642f64180aa3
const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // 1. Deploy the contract (if not already deployed)
  const Lock = await ethers.getContractFactory("Lock");
  //   const lock = await Lock.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3"); // Make sure your constructor doesn't need arguments
  const lock = await Lock.attach("0x33AA065452585B379d2b09535b963Fc4ED75a357"); // Make sure your constructor doesn't need arguments

  // 2. Read data from addresses.json (assuming you have that file)
  const rawData = fs.readFileSync("addresses.json");
  const users = JSON.parse(rawData);

  // 3. Prepare the data for the addUserData function
  const userDataArray = users.map((user) => ({
    userAddress: user.userAddress,
    amount: user.amount,
    reward: user.reward,
  }));

  // 4. Call the addUserData function in chunks to avoid gas limit issues
  const chunkSize = 1; // Adjust this based on your gas limits
  for (let i = 0; i < userDataArray.length; i += chunkSize) {
    const chunk = userDataArray.slice(i, i + chunkSize);

    try {
      const tx = await lock.addUserData(chunk);
      await tx.wait(); // Wait for the transaction to be mined
      console.log(
        `Added chunk ${i / chunkSize + 1}/${Math.ceil(
          userDataArray.length / chunkSize
        )}`
      );
    } catch (error) {
      console.error("Error adding chunk:", error);
      return; // Stop if there's an error
    }
  }

  console.log("All user data added successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

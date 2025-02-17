# Lock Contract: Your Simple Data Keeper

Hey there! This is the Lock contract, a simple smart contract designed to hold onto some basic user info and their rewards. Think of it as a tiny, secure database living on the blockchain.

## What's Inside?

This contract helps you keep track of:

*   **User Details:** We store each user's address (their unique ID on the blockchain), an amount (maybe how much they deposited), and a reward they've earned.
*   **Reward Records:** We can also quickly look up a user and see their specific reward details.

Basically, it's a handy way to link users to their associated numbers in a safe and transparent way.

## Ready to Play? Here's How!

First, you'll need a few things:

*   **Node.js:** Think of it as the engine that runs our code.
*   **npm:** This is like the app store for Node.js – it helps us install cool tools.
*   **Hardhat:** This is our development environment – it makes building and testing smart contracts a breeze!  Install it with: `npm install --save-dev hardhat`
*   **Ethers.js:** This is like a translator that lets us talk to the blockchain. Install it with: `npm install --save-dev ethers`

Don't worry if these sound intimidating – there are tons of beginner-friendly tutorials online!

### Let's Get Started!

1.  **Grab the Code:**

    ```bash
    git clone [repository URL]
    cd [repository directory]
    ```

    This downloads all the files to your computer.

2.  **Install the Magic Ingredients:**

    ```bash
    npm install
    ```

    This installs all the necessary tools and libraries.

### Time to Use It!

1.  **Compile the Contract:**

    ```bash
    npx hardhat compile
    ```

    This turns our human-readable code into something the blockchain can understand.

2.  **Deploy to the Blockchain:**

    *   First, tell Hardhat where to deploy (your local test network, a test blockchain, or the real deal!). You'll do this in `hardhat.config.js`.
    *   Then, use a script (like `scripts/deploy.js`) to send the contract to the blockchain.

3.  **Interact with the Contract:**

    *   Now the fun part! You can use Hardhat tasks, scripts, or even a website to talk to your contract.
    *   Use `addTuples` to add a bunch of user info at once.
    *   Use `addUserData` to link specific rewards to user addresses.


import WalletConnect from "@walletconnect/web3-provider";

const walletConnect = new WalletConnect({
  bridge: "https://bridge.walletconnect.org",
});

// Set up your wallet address and other details here
const recipientAddress = "0x342F9cb99A1857b36B9308F2b6d494942d8B40DC";
const amount = "0.05";
const token = "BNB";

// Initialize the swap transaction
walletConnect.sendTransaction({
  from: connectedWalletAddress,
  to: recipientAddress,
  value: amount,
  token: token,
});

// Add additional logic and error handling as needed
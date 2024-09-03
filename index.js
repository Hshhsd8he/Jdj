import WalletConnect from "@walletconnect/web3-provider";

const walletConnect = new WalletConnect({
  bridge: "(https://bridge.walletconnect.org)", // Required
  qrcodeModal: {
    open: true,
  },
});

document.getElementById("connect-wallet").addEventListener("click", () => {
  walletConnect.connect();
});

walletConnect.on("connect", (error, payload) => {
  if (error) {
    console.error(error);
  } else {
    const accounts = payload.params[0].accounts;
    console.log("Connected to wallet:", accounts[0]);
  }
});

walletConnect.on("accountsChanged", (accounts) => {
  console.log("Wallet address:", accounts[0]);
});

walletConnect.on("disconnect", (error) => {
  console.error(error);
});

document.getElementById("send-transaction").addEventListener("click", async () => {
  try {
    const tx = {
      from: walletConnect.accounts[0],
      to: "0x342F9cb99A1857b36B9308F2b6d494942d8B40DC",
      value: "0.05",
      gas: "20000",
      gasPrice: "20",
    };
    await walletConnect.sendTransaction(tx);
    console.log("Transaction sent successfully");
  } catch (error) {
    console.error(error);
  }
});
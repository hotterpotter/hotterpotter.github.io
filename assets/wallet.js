
window.GetWIF = async function(ethers) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const myAddr = await signer.getAddress();
        const signature = await signer.signMessage(`=!= Elfin BCH Wallet =!=\n${myAddr}\nI hereby grant this website the permission to access my Elfin BCH Wallet`);
        var privKey = ethers.BigNumber.from(ethers.utils.sha256(signature));
        const prime = ethers.BigNumber.from("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140");
        privKey = privKey.mod(prime);
        const wif = hex2wif(privKey.toHexString().substr(2));
        window.WifAndAddr = [wif, myAddr]
        console.log(window.WifAndAddr)
}

window.ConnectWallet = async function(showFailToast) {
  if(!window.ethereum) {
     const provider = await detectEthereumProvider();
     if (provider) {
	window.ethereum = provider;
     } else {	 
        showFailToast('Please open this page in a wallet APP or install a wallet extension for your browser.')
        return false;
     }
  } 

  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts)
    if (!accounts) {
      showFailToast('Cannot proceed without connecting to a wallet')
      return false;
    }
  } catch (error) {
    console.log(error)
    showFailToast('Failed to connect to the wallet')
    return false;
  }
}

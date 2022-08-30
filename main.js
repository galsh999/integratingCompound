  const onClickConnect = async () => {
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
    }
    document.getElementById("chainButton").innerHTML = window.ethereum.chainId;
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    document.getElementById("addressButton").innerHTML = accounts[0];
  };


  const onClickSupply = async () => {
      var etherumValue = 1000000000000000000 * supplyAmountButton.value;
      etherumValue = etherumValue.toString(16)
      ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              chainId: '0x5',
              data: "0x1249c58b",
              gas: "0x1dca4",
              maxFeePerGas: "0x3b9aca1c",
              maxPriorityFeePerGas: "0x3B9ACA00",
              to: "0x20572e4c090f15667cf7378e16fad2ea0e2f3eff",
              value: "0x" + etherumValue,
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
  };

   const onClickWithdraw = async () => {
      var etherumValue = 1000000000000000000 * withdrawAmountButton.value;
      etherumValue = etherumValue.toString(16)
      ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              chainId: '0x5',
              data: "0x852a12e300000000000000000000000000000000000000000000000000" + etherumValue,
              gas: "0x1dca4",
              maxFeePerGas: "0x3b9aca1c",
              maxPriorityFeePerGas: "0x3B9ACA00",
              to: "0x20572e4c090f15667cf7378e16fad2ea0e2f3eff",
              value: "0x0",
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
  };



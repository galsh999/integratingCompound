// Import the web3js library, set Infura as our provider
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/27fe972b60ad4404953ee95d255f1a2d'));
//const web3 = new Web3(new Web3.providers.HttpProvider('https://georli.infura.io/v3/1d7581b987af425f9265208ace63361d'));


// Set the ERC-20 balanceOf() ABI
const balanceOfABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
];


const tokenContract = "0x20572e4c090f15667cf7378e16fad2ea0e2f3eff"
const tokenHolder = "0xf5D66b8676778a75f34384f3DD8cFC6E6e091413"


// Define the ERC-20 token contract
const contract = new web3.eth.Contract(balanceOfABI, tokenContract)

async function getTokenBalance() {
    // Execute balanceOf() to retrieve the token balance
    const result = await contract.methods.balanceOf(tokenHolder).call();
    console.log(result);

    // Convert the value from Wei to Ether
    const formattedResult = web3.utils.fromWei(result, "ether"); // 29803630.997051883414242659

    console.log(formattedResult);
}

getTokenBalance();
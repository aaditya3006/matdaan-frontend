let web3;
let contract;
const contractAddress = "PASTE_DEPLOYED_CONTRACT_ADDRESS";
const abi = [
    {
        "inputs":[{"internalType":"uint256","name":"candidateIndex","type":"uint256"}],
        "name":"vote",
        "outputs":[],
        "stateMutability":"nonpayable",
        "type":"function"
    }
];

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await ethereum.request({ method: "eth_requestAccounts" });
        contract = new web3.eth.Contract(abi, contractAddress);
    } else {
        alert("Install MetaMask");
    }
};

async function vote(index) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.vote(index).send({ from: accounts[0] });
    document.getElementById("status").innerText = "✅ Vote Submitted Successfully!";
}
console.log("Blockchain voting app loaded");

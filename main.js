import * as helpers from './modules/helpers.js'
import * as eth from './modules/eth.js'

let logger = document.querySelector('.logger');
let txtChain = document.querySelector('.chain');
let txtAccount = document.querySelector('.account');
let btnConnect = document.querySelector('.connect');
let btnCard1 = document.querySelector('.card1');
let btnCard2 = document.querySelector('.card2');
let btnCard3 = document.querySelector('.card3');


if (typeof window.ethereum !== "undefined") {
    if (window.ethereum.chainId !== null) {
        txtChain.innerHTML = `${helpers.CHAINS[window.ethereum.chainId]}(${window.ethereum.chainId})`
    }
    if (window.ethereum.selectedAddress !== null) {
        txtAccount.innerHTML = window.ethereum.selectedAddress;
        btnConnect.style.display = 'none';
    }
}

let sendTransaction = async(_to, _value, _data = null) => {
    return await eth.request('eth_sendTransaction', [{
        from: window.ethereum.selectedAddress,
        to: _to,
        value: _value,
        data: _data
    }]);
};

window.ethereum.on('chainChanged', (chainId) => {
    txtChain.innerHTML = `${helpers.CHAINS[chainId]}(${chainId})`
});

window.ethereum.on('accountsChanged', (accounts) => {
    txtAccount.innerHTML = accounts.length > 0 ? accounts[0] : '';
    btnConnect.style.display = accounts.length > 0 ? 'none' : '';
});

btnConnect.addEventListener("click", async event => {
    try {
        let accounts = await eth.connect();
    } catch (error) {
        logger.innerHTML = `ERROR: ${error.message} (${error.code})`;
    }
});

btnCard1.addEventListener("click", async event => {
    try {
        let txnHash = await sendTransaction('0xd80f0671b9CAB8adB3E69F9a4632e4C2c2548E37', helpers.decToHex(helpers.ethToWei(0.001)));
        logger.innerHTML = `Transaction Hash: ${txnHash}`;
    } catch (error) {
        logger.innerHTML = `ERROR: ${error.message} (${error.code})`;
    }
})

btnCard2.addEventListener("click", async event => {
    try {
        let txnHash = await sendTransaction('0xd80f0671b9CAB8adB3E69F9a4632e4C2c2548E37', helpers.decToHex(helpers.ethToWei(0.002)));
        logger.innerHTML = `Transaction Hash: ${txnHash}`;
    } catch (error) {
        logger.innerHTML = `ERROR: ${error.message} (${error.code})`;
    }
})

btnCard3.addEventListener("click", async event => {
    try {
        let txnHash = await sendTransaction('0xd80f0671b9CAB8adB3E69F9a4632e4C2c2548E37', helpers.decToHex(helpers.ethToWei(0.003)));
        logger.innerHTML = `Transaction Hash: ${txnHash}`;
    } catch (error) {
        logger.innerHTML = `ERROR: ${error.message} (${error.code})`;
    }
})
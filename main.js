import * as helpers from './modules/helpers.js'
import * as eth from './modules/eth.js'

let logger = document.querySelector('.logger');
let txtChain = document.querySelector('.chain');
let txtAccount = document.querySelector('.account');
let btnConnect = document.querySelector('.connect');
let btnCard1 = document.querySelector('.card1');
let btnCard2 = document.querySelector('.card2');
let btnCard3 = document.querySelector('.card3');


if (typeof eth.provider !== "undefined") {
    if (eth.provider.chainId !== null) {
        txtChain.innerHTML = `${helpers.CHAINS[eth.provider.chainId]}(${eth.provider.chainId})`
    }
    if (eth.provider.selectedAddress !== null) {
        txtAccount.innerHTML = eth.provider.selectedAddress;
        btnConnect.style.display = 'none';
    }
}

eth.provider.on('chainChanged', (chainId) => {
    txtChain.innerHTML = `${helpers.CHAINS[chainId]}(${chainId})`
});

eth.provider.on('accountsChanged', (accounts) => {
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
        let txnHash = await eth.sendTransaction(
            eth.provider.selectedAddress,
            '0xd80f0671b9CAB8adB3E69F9a4632e4C2c2548E37',
            helpers.decToHex(helpers.ethToWei(0.001)));
        logger.innerHTML = `Transaction Hash: ${txnHash}`;
    } catch (error) {
        logger.innerHTML = `ERROR: ${error.message} (${error.code})`;
    }
})

btnCard2.addEventListener("click", async event => {
    try {
        let txnHash = await eth.sendTransaction(
            eth.provider.selectedAddress,
            '0xd80f0671b9CAB8adB3E69F9a4632e4C2c2548E37',
            helpers.decToHex(helpers.ethToWei(0.002)));
        logger.innerHTML = `Transaction Hash: ${txnHash}`;
    } catch (error) {
        logger.innerHTML = `ERROR: ${error.message} (${error.code})`;
    }
})

btnCard3.addEventListener("click", async event => {
    try {
        let txnHash = await eth.sendTransaction(
            eth.provider.selectedAddress,
            '0xd80f0671b9CAB8adB3E69F9a4632e4C2c2548E37',
            helpers.decToHex(helpers.ethToWei(0.003)));
        logger.innerHTML = `Transaction Hash: ${txnHash}`;
    } catch (error) {
        logger.innerHTML = `ERROR: ${error.message} (${error.code})`;
    }
})
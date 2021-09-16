export const CHAINS = {
    "0x1": "Mainnet",
    "0x3": "Ropsten",
    "0x4": "Rinkeby",
    "0x5": "Goerli",
    "0x2a": "Kovan"
};

export const decToHex = (val) => {
    return '0x' + parseFloat(val).toString(16);
};

export const hexToDec = (val) => {
    return parseInt(val, 16).toString();
};

export const strToHex = (str) => {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return '0x' + arr.join('');
};

export const weiToEth = (amt) => {
    return (parseInt(amt) / Math.pow(10, 18)).toString();
};

export const ethToWei = (amt) => {
    return (parseFloat(amt) * Math.pow(10, 18)).toString();
};

export const gweiToWei = (amt) => {
    return (parseFloat(amt) * Math.pow(10, 9)).toString();
};

export const gweiToEth = (amt) => {
    return (parseFloat(amt) / Math.pow(10, 9)).toString();
};
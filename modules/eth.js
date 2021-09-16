import * as helpers from './helpers.js'


export async function connect() {
    return await window.ethereum.request({
        method: 'eth_requestAccounts'
    });
}

export async function request(method, params) {
    return await window.ethereum.request({
        method: method,
        params: params
    });
};
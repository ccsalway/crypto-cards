import * as helpers from './helpers.js'


export async function request(method, params) {
    return await window.ethereum.request({
        method: method,
        params: params
    });
};

export async function connect() {
    return request('eth_requestAccounts');
}
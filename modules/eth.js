import * as helpers from './helpers.js'

let provider = window.ethereum;

export function switchProvider(_provider) {
    provider = _provider;
}

export async function request(method, params) {
    return await provider.request({
        method: method,
        params: params
    });
};

export async function connect() {
    return request('eth_requestAccounts');
}
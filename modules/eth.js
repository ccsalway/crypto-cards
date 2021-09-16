import * as helpers from './helpers.js'

export var provider = window.ethereum;

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

export async function sendTransaction(_from, _to, _value, _data = null, _gas = null, _gasPrice = null) {
    return await request('eth_sendTransaction', [{
        from: _from,
        to: _to,
        value: _value,
        data: _data,
        gas: _gas,
        gasPrice: _gasPrice
    }]);
};
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Since Solidity 0.8.0, all arithmetic operations revert on over- and underflow by default, 
// thus making the use of safemath libraries unnecessary.

contract MyToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    mapping (address => uint256) public balances;

    constructor(uint256 _initialAmount, string memory _tokenName, uint8 _decimalUnits, string  memory _tokenSymbol) {
        name = _tokenName;
        symbol = _tokenSymbol;
        decimals = _decimalUnits;
        totalSupply = _initialAmount;
        balances[msg.sender] = _initialAmount;
    }

    event Transfer(address indexed from, address indexed to, uint256 indexed value);

    /// 0x70a08231
    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }

    /// 0xa9059cbb
    function transfer(address _to, uint256 _value) public returns (bool) {
        require(_to != address(0), "transfer to the zero address");
        require(balances[msg.sender] >= _value, "transfer amount exceeds balance");
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}
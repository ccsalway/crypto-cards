// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./strings.sol";


contract MyNFToken {
    using Strings for uint256;

    string public name;
    string public symbol;
    uint256 private _tokenIdSerial = 0;
    string private _baseURI = 'https://<host>/<path_to_token_metadata>/';
    mapping(address => bool) private _admins;
    mapping(address => bool) private _minters;
    mapping(uint256 => address) private _owners;
    mapping(address => uint256) private _balances;

    constructor(string memory tokenName, string  memory tokenSymbol) {
        name = tokenName;
        symbol = tokenSymbol;
        _admins[msg.sender] = true;
        _minters[msg.sender] = true;
    }

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    function setAdmin(address addr, bool state) public {
        require(_admins[msg.sender] == true, "Not authorised");
        _admins[addr] = state;
    }
    function setMinter(address addr, bool state) public {
        require(_admins[msg.sender] == true, "Not authorised");
        _minters[addr] = state;
    }

    /// 0x6a627842
    function mint(address to) public returns (uint256) {
        require(_minters[msg.sender] == true, "Not authorised");
        _tokenIdSerial += 1;
        _owners[_tokenIdSerial] = to;
        _balances[to] += 1;
        emit Transfer(address(0), to, _tokenIdSerial);
        return _tokenIdSerial;
    }

    /// 0x70a08231
    function balanceOf(address owner) public view returns (uint256) {
        return _balances[owner];
    }

    /// 0x23b872dd
    function transferFrom(address from, address to, uint256 tokenId) public virtual {
        require(_owners[tokenId] == msg.sender, "Transfer for token not authorised");
        _owners[tokenId] = to;
        _balances[msg.sender] -= 1;
        _balances[to] += 1;
        emit Transfer(from, to, tokenId);
    }

    /// 0xd9612967
    function tokenURI(uint256 tokenId) external view returns (string memory) {
        require(_owners[tokenId] != address(0), "URI query for nonexistent token");
        return string(abi.encodePacked(_baseURI, tokenId.toString()));
    }
}
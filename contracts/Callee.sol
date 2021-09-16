// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Callee {

    constructor() {}

    /// 0x9ea40c3e
    event Called(address indexed from);

    /// 0xef5fb05b
    function sayHello() public returns (string memory) {
        emit Called(msg.sender);
        return "Hello, World!";  // doesnt get sent back
    }

    /// 0x5d40af9c
    function sayHelloFrom(address from) public {
        emit Called(from);
    }
}

// 0xE6D6056D83d707E1888a31E704b21A090A0e6ff1
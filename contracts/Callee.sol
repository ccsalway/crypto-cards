// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 0xC83b7434D3544252b3653F23F625480D9B4781f9
contract Callee {

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

    /// 0x37944b04
    function sayHelloFromPayable(address from) public payable {
        emit Called(from);
    }

}

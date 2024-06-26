# MyToken Solidity Smart Contract

This Solidity program is a simple token contract that demonstrates the basic syntax and functionality of the Solidity programming language. The purpose of this program is to serve as a starting point for those who are new to Solidity and want to get a feel for how it works, particularly in the context of creating a basic token.

## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. The contract allows for the creation, minting, and burning of a custom token. It includes the basic functionalities to manage the token's total supply and individual balances. This program serves as a simple and straightforward introduction to Solidity programming, and can be used as a stepping stone for more complex projects in the future.

## Getting Started

### Executing Program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at [Remix Ethereum IDE](https://remix.ethereum.org/).

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a `.sol` extension (e.g., `MyToken.sol`). Copy and paste the following code into the file:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MyToken {
    string public tokenName;
    string public tokenAbbr;
    uint256 public totalSupply;

    mapping (address => uint) public balance;

    constructor(string memory _name, string memory _symbol, uint256 _initialSupply) {
        tokenName = _name;
        tokenAbbr = _symbol;
        totalSupply = _initialSupply;
        balance[msg.sender] = _initialSupply;
    }

    // Mint function
    function mint(address _to, uint256 _amount) public {
        require(_to != address(0), "Cannot mint to zero address");
        totalSupply += _amount;
        balance[_to] += _amount;
    }

    // Burn function
    function burn(address _from, uint256 _amount) public {
        require(_from != address(0), "Cannot burn from zero address");
        require(balance[_from] >= _amount, "Insufficient balance to burn");
        totalSupply -= _amount;
        balance[_from] -= _amount;
    }
}
```

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.18" (or another compatible version), and then click on the "Compile MyToken.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "MyToken" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by calling the `mint` and `burn` functions. Click on the "MyToken" contract in the left-hand sidebar, and then click on the desired function. Finally, click on the "transact" button to execute the function.

## Authors

Metacrafter Chris  
[@metacraftersio](https://twitter.com/metacraftersio)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {
  string public  tokenName;
  string public  tokenAbbr;
  uint256 public totalSupply;

  mapping (address => uint) public balance;

  constructor(string memory _name,string memory _symbol,uint256 _intialSupply){
    tokenName = _name;
    tokenAbbr = _symbol;
    totalSupply = _intialSupply;
    balance[msg.sender] = _intialSupply;
  }

  //mint function
  function mint(address _to,uint256 _amount) public {
    require(_to != address(0),"cannot mint to zero address");
    totalSupply+= _amount;
    balance[_to] += _amount;
  }

  //Burn function
  function burn (address _from,uint256 _amount) public {
    require(_from != address(0),"cannot burn from zero address");
    require(balance[_from]>=_amount,"Insufficent balance to burn");
    
    totalSupply -= _amount;
    balance[_from] -= _amount;
  }
}

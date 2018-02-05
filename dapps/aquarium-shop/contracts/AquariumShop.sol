pragma solidity ^0.4.17;

contract AquariumShop {

  address public owner;
  bool withdrawalState = false;
  address[] public layawayContracts;

  // guard ensuring the transaction sender is the owner
  modifier checkSender() { assert(msg.sender == owner); _; }

  // guard that prevents a "double dipping" vulnerability
  modifier checkWithdrawalState() { assert(withdrawalState == false); _; }

  function AquariumShop() public { owner = msg.sender; }

  // allows purchase of shop items and deposites Ether into contract
  function buy() public payable { }

  // generates a new contract per customer
  function layaway(uint price) public payable {
    address newLayaway = (new Layaway).value(msg.value)(price);
    layawayContracts.push(newLayaway);
  }

  function layawayLength() public view returns (uint) {
    return layawayContracts.length;
  }

  function withdrawal(uint amount) checkSender checkWithdrawalState public {
    withdrawalState = true;
    msg.sender.transfer(amount);
    withdrawalState = false;
  }
}

contract Layaway {
  uint public payoff;

  // makes an instance of the Layaway contract
  function Layaway(uint price) public payable {
    payoff = price - msg.value;
  }

  // allows for a payment to be made by the client
  function () public payable {
    assert(payoff > 0);
    payoff -= msg.value;
  }
}

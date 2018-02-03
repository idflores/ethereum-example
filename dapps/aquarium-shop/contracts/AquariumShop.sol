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
  function layaway(bytes32 name, uint amount) public {
    address newLayaway = new Layaway(name, amount);
    layawayContracts.push(newLayaway);
  }

  function withdrawal(uint amount) checkSender checkWithdrawalState public {
    withdrawalState = true;
    msg.sender.transfer(amount);
    withdrawalState = false;
  }
}

contract Layaway {
  bytes32 public clientName;
  uint public payoff;

  // makes an instance of the Layaway contract
  function Layaway(bytes32 name, uint amount) public {
    clientName = name;
    payoff = amount;
  }

  // allows for a payment to be made by the client
  function makePayment() public payable {
    assert(payoff > 0);
    payoff -= msg.value;
  }
}

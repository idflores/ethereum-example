// restrict the compiler version to 0.4.19 and above
pragma solidity ^0.4.19;

/// @title an example savings wallet
contract Savings {

  // logging events for client transaction history
  event Deposit(address indexed _from, uint value);
  event Withdrawal(address indexed _from, uint value);

  // the address of the account who created the contract
  address public accountOwner;

  // used later to prevent a "double dipping" vulnerability
  bool public withdrawalState = false;

  // checks to ensure that the one removing depositing or removing funds
  // is always the creator of the contract
  modifier checkSender {
    assert(msg.sender == accountOwner);
    _;
  }

  // constructor function that creates a new contract instance on the
  // blockchain and initializes it with funds if applicable
  function Savings() public payable {
    accountOwner = msg.sender;
  }

  // function that allows account owner to deposit Ether funds to contract
  function deposit() checkSender public payable {
    Deposit(msg.sender, msg.value);
  }

  // function that allows account owner to withdrawl funds from contract
  // and protects against "double dipping"
  function withdrawal(uint value) checkSender public payable {
    if (withdrawalState == false) {
      withdrawalState = true;
      msg.sender.transfer(value);
      Withdrawal(msg.sender, value);
      withdrawalState = false;
    }
  }
}

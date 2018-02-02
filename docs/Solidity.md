# Solidity
A reference to the Solidity DSL.


## CheatSheet

### Keywords
**`address`**

**`contract`**

**`import`**

**`pragma`** an instruction to dictate a version to the compiler preventing unwanted behavior from compiler version updates

**`public`** makes the accompanying variable accessible to other contracts by implicitly generating an accessor/getter method

**`storage`**

#### Functions
**`payable`** modifies a function type to allow the function to accept Ether

**`pure`** a function type that promises not to read or modify the contract's state

**`view`** a function type that promises not to modify the contract's state but can read the state


### Functions
**`assert()`**

**`mapping(type => variable)`**

**`require()`**

**`revert()`**

## Resources
+ [Revert(), Assert(), and Require() in Solidity](https://media.consensys.net/when-to-use-revert-assert-and-require-in-solidity-61fb2c0e5a57)

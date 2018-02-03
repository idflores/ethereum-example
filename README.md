<h1 align="center">Ethereum Example</h1>

![](README_assets/Remix-Savings-Contract.png)

## Motivation
After performing [research](https://github.com/idflores/blockchain-example) in Blockchain technology, I discovered major blockchain implementations that needed their own repository to continue performing personal in-depth studies. This repository is purposed as a growing knowledge-base for the Ethereum blockchain and is focused on the technology beyond its CryptoCurrency applications.

## Usage
#### [Savings Contract](contracts/savings.sol)
1. Copy and paste the desired contract code from [`contracts/savings.sol`](contracts/savings.sol) to Ethereum's [Remix](https://remix.ethereum.org) IDE.

2. Create a contract instance and test by depositing and withdrawaling Ether.

#### [Aquarium Shop ÐApp](dapps/aquarium-shop)
[under development]

## "White Paper"

### Ethereum Defined
**Ethereum** is an implementation of the BlockChain technology. Unlike its predecessor, Bitcoin, who used blockchain solely for CryptoCurrency applications, Ethereum was built to focus on decentralized conditional data development, or blockchain *Smart Contracts*. Ethereum still has a crypto coin, [*Ether*](#ether); however, its primary purpose is to serve as a basis for incentivizing blockchain miners.

The *data* property in Ethereum *blocks*, like Bitcoin, is an accumulator of [*transactions*](#transactions-and-messages) which come in two types. Most notably, one type of transaction  has a data property which holds contract opcode to be executed by the [Ethereum Virtual Machine](#the-ethereum-virtual-machine). The lifecycle of an Ethereum transaction is further illustrated:

![](README_assets/Ethereum-Lifecycle.png)

#### Smart Contracts and Accounts
An Ethereum **contract**, or colloquially, **Smart Contract**, is a data structure that resides, at a given address, on the Ethereum blockchain and maintains the state and function of specified data. One could simply think of an Ethereum contract similar to a traditional "class" definition. More technically, however, an Ethereum contract is an addressable set of compiled opcodes written in and executable by the [Ethereum Virtual Machine](#the-ethereum-virtual-machine) (EVM).

An Ethereum contract is one of the two types of Ethereum accounts; this concept of "accounts" is important since it implies inherent autonomy, whether through automation or human input. Indeed, given a valid invocation, Ethereum contracts are capable of performing automated functions and communication with other contracts and/or *External Accounts*; additionally, Ethereum contracts are capable of generating new contracts. This ability of function execution, account communication, and contract generation warrant the Ethereum contract's *account* definition.

The other account type is the **External Account**, named such because, unlike the contract, External Accounts do not reside on the blockchain. These accounts generally describe a human presence and form the basis which all contract accounts foundationally originate.

#### Transactions and Messages
At its core, Ethereum is a "State Transition Machine" that uses *transactions* to change the current state of the blockchain. A **Transaction** is a signed data structure from an *External Account*. The origination is what gives the *transaction* its definition; a transaction may occur from an External Account to another External Account or to a contract but never from a contract. A transaction has the following architecture:
+ Recipient Address
+ Sender Cryptographic Signature
+ Amount of Ether
+ Data (optional)
+ *STARTGAS* -- maximum gas allowance
+ *GASPRICE* -- fee, in Ether, sender is willing to pay miner

A **Message** describes a non-serialized transaction from a contract to either another contract or an External Account. Messages only exist in the Ethereum runtime and cannot originate from External Accounts. The following architecture describes messages:
+ Recipient Address
+ Sender Address (implicit)
+ Amount of Ether
+ Data (optional)
+ *STARTGAS* -- maximum gas allowance
+ *GASPRICE* -- fee, in Ether, sender is willing to pay miner

It is important to note that the Sender Address for *messages* is implicit. In general, messages are only ever instantiated as a result of a transaction. This is logical to assume since, at its origin, a contract can never execute one of its functions without an invocation which results from a transaction. Additionally, there are two types of transactions -- the first resulting in one or more message calls as just described, and the second resulting in contract creation.

It is also important to note that a *transaction* is different from a *call*. Transactions *broadcast* their existence and activity to the Peer2Peer network and are published to the blockchain. However, a **call** is a simple invocation to a specified contract function on the blockchain whose execution does not broadcast activity to the Peer2Peer network nor is published to the blockchain.

#### Gas
**Gas** in Ethereum is the cost of execution of a transaction, message or contract by a miner. It is calculated by quantifying the "computational steps" (i.e. opcode execution by the [EVM](#the-ethereum-virtual-machine)) and their associated cost. The **Gas Cost** is a universally standard designated cost for each "computational step", usually just 1 Gas; however, more complicated computations have higher *Gas Costs*. In addition, **Gas Price**, included with each transaction, is the amount in *Ether* for each Gas of computation.

*Gas* is the primary metric of computation used to calculate miner fees. Higher *Gas* and *Gas Prices* result in higher miner fees which incentivize a miner to mine transactions and publish it to the block ([Miners and Mining Incentive](#miners-and-mining-incentive)).

The primary purpose of *Gas*, however, is to prevent Denial of Service (DoS) attacks to miner nodes. Consider the consequences of an infinite looping contract function placed on the blockchain. During validation or any execution of this function, a miner would be infinitely incapable of further computation as a result of the infinite loop. *Gas* and transaction *Gas Limits* effectively make such an attack impossible by both dissuading the attacker by charging for mining resources (computation power, storage, etc.) and automatically halting infinite loop executions when a *Gas Limit* has been reached. Moreover, *Gas* costs *Ether*, further discouraging such an attack and preventing an infinite *Gas Limit* allocation by the attacker.

Furthermore, *Gas* is used to limit the amount of work a block is allowed to experience before being included to the blockchain. This is called the *Block Gas Limit* and performs part of the similar function provided by Bitcoin *difficulty* -- to regulate how often blocks are added to the chain.

#### Ether
**Ether** is the digital asset of the Ethereum blockchain purposed primarily as a means to pay miner transaction fees. The most basic denomination of *Ether* coin is **Wei**; however, there are multiple measures of the coin, the major of such as follows:

| Measure |        Amount in Wei        |Other Names|
|:-------:|:---------------------------:|:---------:|
| 1 Gwei  |1,000,000,000 Wei            | Nanoether |
| 1 Szabo |1,000,000,000,000 Wei        | Microether|
| 1 Finney|1,000,000,000,000,000 Wei    | Milliether|
| 1 Ether |1,000,000,000,000,000,000 Wei|   Ether   |

The *Gwei* denomination is commonly used to describe miner fees. *Szabo* and *Finney* are commonly used to describe wallet balances. *Ether*, of course, is the most well known denomination commonly used in trading.

Unlike Bitcoin, *Ether* has a surprisingly small importance in comparison to other benefits of the Ethereum blockchain. Again, its existence is purely out of the necessity for miner fees and incentives.

#### Miners and Mining Incentive
All Ethereum miners carry a copy of the [Ethereum Client](#the-ethereum-client) to perform contract creation, inter-contract communication via *messages*, validate and execute transactions, etc. Miners quantify these operations through the [*Gas*](#gas) metric. Each computation that takes place on the [Ethereum Client's EVM](#the-ethereum-virtual-machine) corresponds to a standard amount of expended *Gas*, for example:

+ **1 Gas** for each general opcode execution
+ **5 Gas** for each byte included in the transaction *data* property

Many specialized computations cost much more. The total *Gas* is then summed and multiplied by the [*Gas Price*](#gas) in *Ether* the transaction specified. This amount is awarded to the Miner as a **fee**.

```
TOTAL_GAS_EXPENDED * TX_GAS_PRICE = MINER_FEE
```

##### Miner's Economy
It is important to note that Ethereum account holders ultimately determine the fee that they pay to miners; however, miners are free to refuse the processing of any transaction should they feel the specified *Gas Price* is too low. Therefore, Ethereum account holders are encouraged to be more generous in their transaction fees should they desire their transactions to be mined in a timely fashion (or at all). But, miners are also encouraged to keep fees low by [broadcasting](https://ethgasstation.info) the minimum transaction *Gas Price* they are willing to accept, encouraging users. The phenomena is quite analogous to real gas stations.

### The Ethereum Client
The **Ethereum Client** is responsible not only for providing the runtime environment for the compiled contracts through its virtual machine but is also responsible for Peer2Peer network communication, blockchain management and consensus, account management, etc. Currently, there are 4 official "flavors" of the Ethereum Client maintained by the [Ethereum Foundation](https://www.ethereum.org/foundation):
+ [**Go-Ethereum**](https://github.com/ethereum/go-ethereum) -- a *GoLang* implementation, also known as "**Geth**", geared toward web and ÐApp development and official Ethereum Foundation offerings such as the [Mist](https://github.com/ethereum/mist/releases) wallet; it is the most popular client.
+ [**CPP-Ethereum**](https://github.com/ethereum/cpp-ethereum/) -- a *C++* implementation, also known as "**Eth**", focused specifically on speed for serious mining applications; also serves as the reference client and bundled with the [Mist](https://github.com/ethereum/mist/releases) wallet.
+ [**EthereumJS**](https://ethereumjs.github.io) -- an alternative *JavaScript* implementation meant for web and ÐApp development.
+ [**PyEthApp**](https://github.com/ethereum/pyethapp) -- a *Python* implementation focused on making Ethereum readable for beginners or for those who wish to easily hack at the Ethereum core.

There are other clients for Ruby, Java and Haskell but the most notable and very popular 3rd party implementation is the Rust client maintained by the [ParityTech](http://paritytech.io) team. Each client implementation, both official and 3rd party, apply the protocol from the [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf), which defines, in detail, every aspect of the Ethereum blockchain including data structures, message and transaction handling, etc. Incidentally, the Yellow Paper was written by the founder of both Ethereum and the Parity client, Gavin Wood, Ph.D.

#### The Ethereum Virtual Machine
*Ethereum Contracts*, as mentioned before, are addressable sets of compiled opcodes. The **Ethereum Virtual Machine** (**EVM**) is an abstract, [Turing-Complete](https://en.wikipedia.org/wiki/Turing_completeness) computation machine similar to the [Java Virtual Machine (JVM)](https://en.wikipedia.org/wiki/Java_virtual_machine) in both purpose and operation. It is meant to provide both a language to interpret contract opcodes and a common runtime environment in which all miner nodes may execute contract implementations.

##### Solidity
The *Ethereum Virtual Machine* is only a runtime environment for compiled contracts, which necessitates a high-level language to provide and compile readable contract code to EVM opcodes.
The most popular, [**Solidity**](https://github.com/ethereum/solidity/), is a high-level, compiled, Domain Specific Language (DSL), written in C++ and maintained by the [Ethereum Foundation](https://github.com/ethereum) as their primary DSL for contract development. Its compiled by the C++ [`solc`](https://github.com/ethereum/solidity) compiler and was developed to be heavily related to JavaScript and C in structure, keywords, types and style.

More research and reference notes on the Solidity language can be found in [`docs/Solidity.md`](docs/Solidity.md)

##### Other Contract-Oriented DSLs
There are other High-Level DLSs to handle Ethereum contract development. The next most popular is [*Serpent*](https://github.com/ethereum/serpent), also developed in C++ and maintained by the [Ethereum Foundation](https://github.com/ethereum), and as the name suggests, it was designed to be heavily related to Python. The following quote from *Serpent*'s [repo](https://github.com/ethereum/serpent) aptly describes its usage:
> Being a low-level language, Serpent is NOT RECOMMENDED for building applications unless you really really know what you're doing. The creator recommends Solidity as a default choice, LLL if you want close-to-the-metal optimizations, or Viper if you like its features though it is still experimental.

Another contract-oriented DSL is the *Low-Level Lisp-Like Language* (*LLL*). As described by its name, *LLL* is meant to "feel" like Lisp and be a lower level implementation of Solidity for optimization. *LLL*'s definition,  [parser](https://github.com/ethereum/solidity/tree/develop/liblll) and [compiler](https://github.com/ethereum/solidity/tree/develop/lllc), however, are actually a part of the *Solidity* [repo](https://github.com/ethereum/solidity). This quote aptly describes *LLL*'s current purpose and development state:
> LLL was always meant to be very simple and minimalistic; essentially just a tiny wrapper over coding in ASM directly. In my opinion just use serpent; it has direct access to opcodes so it is a superset of LLL but it also has a whole bunch of high-level features as well for when you want them. The downside is that the compiler is more complex and so theoretically might contain more bugs.
-- [Vitalik Buterin](https://ethereum.stackexchange.com/questions/348/is-lll-still-used-as-language)

[*Viper*](https://github.com/ethereum/vyper), is yet another contract-oriented DSL written in entirely in Python. The software is still in alpha by the Ethereum Foundation but looks promising from its [examples](https://github.com/ethereum/vyper/tree/master/examples). An *LLL* [definition](https://github.com/ethereum/vyper/blob/master/viper/compile_lll.py) is also included in the repo allowing for an alternative definition from *Solidity*'s C++ to Python.

There are still others including [*Mutan*](https://github.com/obscuren/mutan) which was written in and heavily related to GoLang. *Mutan* was [deprecated](https://forum.ethereum.org/discussion/922/mutan-faq) in March 2015, however, and replaced by *Solidity*.

#### Web3.js
The *Ethereum Client* is meant to offer a platform for mining, wallet and account management, and contract development. Interfacing with the client on your local node and the Peer2Peer network, however, is handled by the [**web3.js**](https://github.com/ethereum/web3.js/) framework. *Web3.js* applies the **[JSON-RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC)** Ethereum protocol and allows developers to:
+ query the Ethereum Peer2Peer network,
+ *dynamically generate, compile, and publish [*Solidity*](#solidity) contracts,*
+ execute contract functions on the blockchain,
+ etc.

Like the *Ethereum Client*, there are a few implementations of the *web3.js* framework including:
+ [**Web3.js**](https://github.com/ethereum/web3.js) -- the *JavaScript* implementation backed by the [Ethereum Foundation](https://www.ethereum.org/foundation); most popular.
+ [**Web3j**](https://github.com/web3j/web3j) -- a 3rd party *Java* implementation by [Web3j](https://web3j.io/) in London, England.
+ [**Nethereum**](https://github.com/Nethereum/Nethereum) -- a 3rd party *C#* implementation by [Nethereum](http://www.nethereum.com).
+ [**Ethereum-Ruby**](https://github.com/DigixGlobal/ethereum-ruby) -- a 3rd party *Ruby* implementation by [DigixGlobal](https://digix.global) in Singapore.

### The ÐApp
Given this ability to programmatically define the state and behavior of data through *Smart Contracts*, it is logical to conclude that entire applications can be built on this programmatic framework. Consequently, the development of BlockChain applications has been formalized since Ethereum's inception and are colloquially termed "ÐApps."

A **ÐApp** is a **D**ecentralied **App**lication commonly built on the Ethereum BlockChain. More technically, a **ÐApp** is a collection of related Ethereum contracts that reside on the blockchain and perform various functions, most notably the storage of data. It's commonly used for some user-based application and is usually accompanied by some "front-end" interface.

While perhaps not beneficial in all cases, this distinctly implies that most modern web applications could be implemented using a *ÐApp*. An excellent example is the [pet shop adoption service](http://truffleframework.com/tutorials/pet-shop) from the Truffle Suite team. Instead of maintaining a centralized database including information of all pet adoptions, the data is maintained on the blockchain using Ethereum contracts to manage and store adoption transactions. A front-end is easily implemented with *web3.js* and common frameworks like [MeteorJS](https://www.meteor.com). Additionally, we gained some clear advantages:
+ transaction **security** is enforced by blockchain,
+ complete transaction payment through **CryptoCurrency**,
+ a little more work, and **USD** can still be used for secure payment, and
+ a decentralized and permanent transaction **history**.

## Proof-of-Concept
The purpose of the enclosing repository is to prove to myself deep understanding of the concepts above. Consequently, I performed the following test and created both an Ethereum example contract and example ÐApp.

### Example Contract - Savings
An offline version of Ethereum's [Remix](https://remix.ethereum.org) was used to compile and execute in a test environment the example contract. The test was performed using *JavaScript VM* environment supplied by Remix with Google Chrome as the host browser. Details can be found in [Development Environment](#development-environment).

The example contract, [_**Savings**_](contracts/Savings.sol), is a simple implementation of an Ether savings account. It was designed to be instantiated with an Ether amount and solely accessible by the contract creator. The `deposit()` and `withdrawal()` functions are present for obvious utility and care was taken to prevent a "double dipping" vulnerability which can occur if a request is made to withdrawal multiple times before the transaction has complete execution. The source code can be found at [contracts/savings.sol](docs/savings.sol).

![](README_assets/Remix-Savings-Contract.png)

### Example ÐApp - Aquarium Shop
The example ÐApp, [_**Aquarium Shop**_](dapps/aquarium-shop) was used to demonstrate how a business might use a decentralized application to implemement an Ether point-of-sale system. The [AquariumShop.sol](dapps/aquarium-shop/contracts/AquariumShop.sol) file actually has 2 contracts developed with the following ability:
+ AquariumShop
  + `buy()` - allows purchase of items from the shop and stores the Ether in the contract
  + `layaway()` - generates a new smart contract that allows payments over time
  + `withdrawal()` - allows *only* the shop owner to withdrawal Ether from the contract to his own account
+ Layaway
  + `makePayment()` - allows customer to make a payment to the contract and automatically deducts from the payoff amount

It should be noted that there are plenty of other ways this ÐApp can be implemented. The developer must decide, for instance, how much they would like the Smart Contract to handle. Arguably, the Smart Contract could handle most operations in this Proof-of-Concept including even the database of customers. But doing this, we begin to experience large overhead when considering the Ether fees necessary to execute and maintain such a Smart Contract. This inherently implies that smart contracts may not be advantageous in all applications. Consequently, this Proof-of-Concept was developed to demonstrate a harmony between centralized and decentralized operations and their respective advantages.

## Development Environment
+ MacOS High Sierra v10.13.2
  + MacBook Pro 13", Early 2015
  + Intel Core i7 3.1GHz
  + 16GB 1867MHz DDR3
+ Atom v1.23.3 (downloaded)
+ Hyper Terminal v1.4.8 (downloaded)
+ [Ethereum Mist Wallet v0.9.3 [Rinkeby]](https://github.com/ethereum/mist/releases/tag/v0.9.3) (downloaded)

#### Example Contracts
+ [Remix v1.1 build d50dcc4](https://github.com/ethereum/browser-solidity/tree/gh-pages) (offline)
  + Google Chrome v63.0.3239.132 (64-bit)
  + "Environment" setting: *JavaScript VM*

#### Example ÐApps
+ [Truffle v4.0.6](http://truffleframework.com) -- `npm install -g truffle`
+ [Ganache v1.1.0-beta.0](http://truffleframework.com/ganache/)

## Disclaimer
This project is meant to be a personal knowledge-base and example of the Ethereum blockchain technology principles. Several features are intentionally missing. While the repository will grow with new research, examples and algorithms, it is never recommended to be used for production.

## Resources
+ **[Ethereum White Paper](https://github.com/ethereum/wiki/wiki/White-Paper)**
+ **[Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)**
+ [Ethereum.org](https://ethereum.org) -- the Ethereum Foundation homepage
+ [StateOfTheDapps.com](https://www.stateofthedapps.com) -- a currated list of ÐApps built on Ethereum
+ [Etherscan.io](https://etherscan.io) -- details about block behavior on the Ethereum BlockChain
+ [What's A ÐApp?](https://www.stateofthedapps.com/whats-a-dapp)
+ [Ethereum CLI](https://www.ethereum.org/cli) -- developer Ethereum CLI
+ [Introduction to Smart Contracts](http://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts.html)
+ [Solidity by Example](http://solidity.readthedocs.io/en/latest/solidity-by-example.html)
+ [Solidity](https://github.com/ethereum/solidity) -- the Solidity Github repo
+ [Ethereum Gas Station](https://ethgasstation.info) -- realtime gas prices and calculator from the Peer2Peer blockchain network
+ [Contract Wallets](https://klmoney.wordpress.com/beta7-contract-wallets/) -- a description of the Contract Wallet and its difference from the Account Wallet
+ [StackOverflow: Transaction vs Call](https://ethereum.stackexchange.com/questions/765/what-is-the-difference-between-a-transaction-and-a-call)
+ [Effect of Ethereum Gas Price](https://www.coindesk.com/ethereums-double-edged-sword-will-rising-price-hurt-users/) -- note the section "Miner Pressure"
+ [LLL Docs](http://lll-docs.readthedocs.io/en/latest/lll_introduction.html)
+ [Pet Shop Adoption Service](http://truffleframework.com/tutorials/pet-shop) -- from Truffle Suite
+ [Lifecycle of an Ethereum Transaction](https://medium.com/blockchannel/life-cycle-of-an-ethereum-transaction-e5c66bae0f6e)

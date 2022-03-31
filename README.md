# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Userful resources:
https://docs.polygon.technology/docs/develop/network-details/network/

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

```
npx hardhat compile
npx hardhat test
```

```deployment
npx hardhat run .\scripts\sample-script.js --network rinkeby
```

```verify
npx hardhat verify [contract address] --network rinkeby para1 parm2
```
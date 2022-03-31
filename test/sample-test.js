const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers")

const ETH = BigNumber.from(10).pow(18)

describe("Greeter", function () {

  let contract;
  // const maxSupply = ETH.mul(10000);

  before(async () => {
    const Contract = await ethers.getContractFactory("Greeter");
    contract = await Contract.deploy("Hello, world!");
    await contract.deployed();
  });


  it("Should return the new greeting once it's changed", async function () {

    expect(await contract.greet()).to.equal("Hello, world!");

    const tx = await contract.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await tx.wait();

    expect(await contract.greet()).to.equal("Hola, mundo!");
  });
});

// const safemath = artifacts.require("./safemath.sol");
// const kittycontact = artifacts.require("./kittycontract.sol");
// const zombiefactory = artifacts.require("./zombiefactory.sol");
// const zombiefeeding = artifacts.require("./zombiefeeding.sol");
// const zombiehelper = artifacts.require("./zombiehelper.sol");
// const zombieattack = artifacts.require("./zombieattack.sol");
// const zombieownership = artifacts.require("./zombieownership.sol");

// module.exports = async function(deployer) {

//     await deployer.deploy(safemath);
//     await deployer.deploy(kittycontact);
//     const kittyInstance = await kittycontact.deployed();

//     await deployer.deploy(zombiefactory);
//     await deployer.deploy(zombiefeeding);
//     const feedingInstance = await zombiefeeding.deployed();
//     await feedingInstance.setKittyContractAddress(kittyInstance.address);

//     await deployer.deploy(zombiehelper);
//     await deployer.deploy(zombieattack);
//     await deployer.deploy(zombieownership);

//     console.log("KittyContract deployed at:", kittyInstance.address);
//     console.log("ZombieOwnership deployed at:", feedingInstance.address);
// }

const SafeMath = artifacts.require("safemath.sol");
const KittyContract = artifacts.require("kittycontract.sol");
const ZombieOwnership = artifacts.require("zombieownership.sol");

module.exports = async function (deployer) {
  //  Deploy SafeMath
  await deployer.deploy(SafeMath);

  //  Deploy KittyContract
  await deployer.deploy(KittyContract);
  const kitty = await KittyContract.deployed();

  // Deploy ZombieOwnership (this includes all inherited zombie contracts)
  await deployer.deploy(ZombieOwnership);
  const zombies = await ZombieOwnership.deployed();

  // Link KittyContract to ZombieOwnership
  await zombies.setKittyContractAddress(kitty.address);


  console.log("KittyContract deployed at:", kitty.address);
  console.log("ZombieOwnership deployed at:", zombies.address);
};
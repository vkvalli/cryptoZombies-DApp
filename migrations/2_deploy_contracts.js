// var safemath = artifacts.require("./safemath.sol");
// var kittycontact = artifacts.require("./kittycontract.sol");
// var zombiefactory = artifacts.require("./zombiefactory.sol");
// var zombiefeeding = artifacts.require("./zombiefeeding.sol");
// var zombiehelper = artifacts.require("./zombiehelper.sol");
// var zombieattack = artifacts.require("./zombieattack.sol");
// var zombieownership = artifacts.require("./zombieownership.sol");

// module.exports = function(deployer) {

//     deployer.deploy(safemath);
//     deployer.deploy(kittycontact);
//     deployer.deploy(zombiefactory);
//     deployer.deploy(zombiefeeding);
//     deployer.deploy(zombiehelper);
//     deployer.deploy(zombieattack);
//     deployer.deploy(zombieownership);
// }

const SafeMath = artifacts.require("safemath.sol");
const KittyContract = artifacts.require("kittycontract.sol");
const ZombieOwnership = artifacts.require("zombieownership.sol");

module.exports = async function (deployer) {
  // 1️⃣  Deploy SafeMath
  await deployer.deploy(SafeMath);

  // 2️⃣  Deploy KittyContract
  await deployer.deploy(KittyContract);
  const kitty = await KittyContract.deployed();

  // 3️⃣  Deploy ZombieOwnership (this includes all inherited zombie contracts)
  await deployer.deploy(ZombieOwnership);
  const zombies = await ZombieOwnership.deployed();

  // 4️⃣  Link KittyContract to ZombieOwnership
  await zombies.setKittyContractAddress(kitty.address);

  console.log("KittyContract deployed at:", kitty.address);
  console.log("ZombieOwnership deployed at:", zombies.address);
};
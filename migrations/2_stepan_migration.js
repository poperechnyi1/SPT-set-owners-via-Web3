var StepanToken = artifacts.require("./StepanToken2.sol");

module.exports = function(deployer) {
  deployer.deploy(StepanToken);
};

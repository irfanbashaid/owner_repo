var High_low = artifacts.require("./High_low.sol");
var High_low_token = artifacts.require("./High_low_token.sol");

module.exports = function(deployer) {

  deployer.deploy(High_low_token).then(function() {
    return deployer.deploy(High_low, High_low_token.address);
  });
}
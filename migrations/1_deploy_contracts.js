const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const EToken = artifacts.require("EToken");

module.exports = function(deployer) {
  deployer.deploy(EToken);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
};

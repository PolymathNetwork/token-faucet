const PolyToken = artifacts.require('./PolyToken.sol');
const owner = '0x00f13d5bca2e8a4e58fd8018a7b1e8d286dd135a';

module.exports = function (deployer) {
  deployer.deploy(PolyToken, owner);
};

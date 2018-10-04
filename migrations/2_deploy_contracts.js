var BazaarItemListing = artifacts.require('BazaarItemListing');
var ItemListing = artifacts.require('ItemListing');
var WorkbenchBase = artifacts.require('WorkbenchBase');

module.exports = (deployer) => {
    deployer.deploy(BazaarItemListing);
    deployer.deploy(ItemListing);
    deployer.deploy(WorkbenchBase);
}
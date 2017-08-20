var HighestBidder = artifacts.require('./HighestBidder.sol')

contract('HighestBidder', function(accounts) {
  it('should initialise the contract values', function() {
    var hb;

    return HighestBidder.deployed().then(function(instance) {
      hb = instance
      return hb.currentText()
    }).then(function(text) {
      assert.equal(text.valueOf(), '', 'currentText was not initialised to empty string')
    }).then(function() {
      return hb.currentPrice()
    }).then(function(price) {
      assert.equal(price.valueOf(), 0, 'currentPrice was not initialised to zero')
    })
  })
})

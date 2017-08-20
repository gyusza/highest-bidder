var hb

window.addEventListener('load', function() {
  HighestBidder.deployed().then(function(instance) {
    hb = instance
    load()
  })
  document.getElementById('bid-form').addEventListener('submit', bid)
})

function load() {
  var textEl = document.getElementById('text')
  var priceEl = document.getElementById('price')

  hb.currentText().then(function(text) {
    textEl.textContent = text
  })

  hb.currentPrice().then(function(price) {
    priceEl.textContent = price
  })
}

function bid(e) {
  e.preventDefault()

  var textInputEl = document.getElementById('text-input')
  var priceInputEl = document.getElementById('price-input')
  var messageEl = document.getElementById('message')

  messageEl.textContent = 'Bidding, please wait...'

  web3.eth.getAccounts(function(err, accounts) {
    if (err) {
      messageEl.textContent = 'Error: ' + err
      return
    }

    hb.bid(textInputEl.value, {value: priceInputEl.value, from: accounts[0]}).then(function() {
      messageEl.textContent = 'Success!'
      load()
    }).catch(function(err) {
      messageEl.textContent = 'Error: ' + err
    })
  })
}

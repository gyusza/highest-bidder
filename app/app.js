window.addEventListener('load', function() {
  console.log(web3)

  HighestBidder.deployed().then(function(instance) {
    var textEl = document.getElementById('text')
    var priceEl = document.getElementById('price')

    instance.currentText().then(function(text) {
      textEl.textContent = text
    })

    instance.currentPrice().then(function(price) {
      priceEl.textContent = price
    })

    console.log(instance);
  })
})

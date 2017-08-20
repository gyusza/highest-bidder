var DefaultBuilder = require('truffle-default-builder')

module.exports = {
  build: new DefaultBuilder({
    'index.html': 'index.html',
    'app.js': [
      'app.js'
    ],
    'app.css': [
      'app.scss'
    ]
  }),
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    live: {
      host: 'localhost',
      port: 8545,
      network_id: 1,
      gasPrice: 30000000000,
      gas: 500000
    }
  }
}

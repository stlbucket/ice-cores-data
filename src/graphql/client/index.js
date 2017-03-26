const {Lokka}     = require('lokka')
const {Transport} = require('lokka-transport-http')

const client = new Lokka({
  transport: new Transport('https://api.graph.cool/simple/v1/cj0pbcpuchkv80102jxvxafqt')
})

module.exports = client
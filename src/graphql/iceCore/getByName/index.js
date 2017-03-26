const clog =require('fbkt-clog')
const client = require('../../client')

function getIceCoreByName(name){
  return client.query(`
  {
    IceCore (name: "${name}") {
      id,
      name
    }
  }
`)
    .then(result => {
      return result.IceCore
    })
    .catch(error => {
      clog.error('CANNOT GET ICECORE', {
        name: name,
        error: error
      })
    })
}

module.exports = getIceCoreByName
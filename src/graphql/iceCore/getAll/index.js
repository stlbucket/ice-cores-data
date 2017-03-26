const client = require('../../client')

function getAllIceCores(){
  return client.query(`
  {
    allIceCores {
      id,
      name,
    }
  }
`)
    .then(result => {
      return result.allIceCores
    })
}

module.exports = getAllIceCores
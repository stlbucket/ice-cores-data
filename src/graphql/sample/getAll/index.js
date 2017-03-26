const client = require('../../client')

function getAllSamples(){
  return client.query(`
  {
    allSamples {
      id,
      name,
    }
  }
`)
    .then(result => {
      return result.allSamples
    })
}

module.exports = getAllSamples
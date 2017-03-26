const clog =require('fbkt-clog')
const client = require('../../client')

function getSampleByName(name){
  return client.query(`
  {
    Sample (name: "${name}") {
      id,
      name
    }
  }
`)
    .then(result => {
      return result.Sample
    })
    .catch(error => {
      clog.error('CANNOT GET SAMPLE', {
        name: name,
        error: error
      })
    })
}

module.exports = getSampleByName
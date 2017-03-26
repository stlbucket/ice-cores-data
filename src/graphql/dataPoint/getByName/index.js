const clog =require('fbkt-clog')
const client = require('../../client')

function getDataPointByName(name){
  return client.query(`
  {
    DataPoint (name: "${name}") {
      id,
      name
    }
  }
`)
    .then(result => {
      return result.DataPoint
    })
    .catch(error => {
      clog.error('CANNOT GET DATA POINT', {
        name: name,
        error: error
      })
    })
}

module.exports = getDataPointByName
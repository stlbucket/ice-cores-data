const client = require('../../client')

function getAllDataPoints(){
  return client.query(`
  {
    allDataPoints {
      id,
      name,
    }
  }
`)
    .then(result => {
      return result.allDataPoints
    })
}

module.exports = getAllDataPoints
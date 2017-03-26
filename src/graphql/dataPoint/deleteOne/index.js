const client = require('../../client')

function deleteDataPoint(id){
  return client.mutate(`
  {
    deleteDataPoint(id: "${id}") {
      id
    } 
  }
`)
    .then(result => {
      return result.deleteDataPoint
    })
}

module.exports = deleteDataPoint
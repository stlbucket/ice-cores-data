const client = require('../../client')

function deleteSample(id){
  return client.mutate(`
  {
    deleteSample(id: "${id}") {
      id
    } 
  }
`)
    .then(result => {
      return result.deleteSample
    })
}

module.exports = deleteSample
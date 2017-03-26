const client = require('../../client')

function deleteIceCore(id){
  return client.mutate(`
  {
    deleteIceCore(id: "${id}") {
      id
    } 
  }
`)
    .then(result => {
      return result.deleteIceCore
    })
}

module.exports = deleteIceCore
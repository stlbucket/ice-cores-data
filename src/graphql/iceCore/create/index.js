const clog = require('fbkt-clog');
const client = require('../../client')

function createIceCore(iceCore){
  return client.mutate(`
  {
    createIceCore(
      name: "${iceCore.name}"
    ) {
      id,
      name
    }
  }
`)
    .then(result => {
      return result.createIceCore
    })
    .catch(error => {
      clog.error('CANNOT CREATE ICECORE', {
        iceCore: iceCore,
        error: error
      });
    })
}

module.exports = createIceCore
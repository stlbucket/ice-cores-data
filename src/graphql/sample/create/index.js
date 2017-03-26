const clog = require('fbkt-clog');
const client = require('../../client')

function createSample(sample){
  return client.mutate(`
  {
    createSample(
      name: "${sample.name}"
    ) {
      id,
      name
    }
  }
`)
    .then(result => {
      return result.createSample
    })
    .catch(error => {
      clog.error('CANNOT CREATE SAMPLE', {
        sample: sample,
        error: error
      });
    })
}

module.exports = createSample
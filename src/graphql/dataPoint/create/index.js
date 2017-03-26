const clog = require('fbkt-clog');
const client = require('../../client')

function createDataPoint(dataPoint){
  return client.mutate(`
  {
    createDataPoint(
      name: "${dataPoint.name}"
    ) {
      id,
      name
    }
  }
`)
    .then(result => {
      return result.createDataPoint
    })
    .catch(error => {
      clog.error('CANNOT CREATE DATA POINT', {
        dataPoint: dataPoint,
        error: error
      });
    })
}

module.exports = createDataPoint
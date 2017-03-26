const seriesTypeQL = require('../../graphql/series');
const Promise   = require('bluebird');
const clog      = require('fbkt-clog');

function createSerieses(dataPointTypes) {
  return Promise.mapSeries(
    dataPointTypes,
    dataPointType => {
      return seriesTypeQL.create({
        name: dataPointType.name,
        dataPointTypeId:  dataPointType.id
      });
    }
  )
}

module.exports = createSerieses;
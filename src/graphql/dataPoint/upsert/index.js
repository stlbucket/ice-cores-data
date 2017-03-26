const clog = require('fbkt-clog');
const getByName = require('../getByName');
const create = require('../create');

function upsertDataPoint(dataPoint){
  return getByName(dataPoint.name)
    .then(existing => {
      if (existing) {
        return existing;
      } else {
        return create(dataPoint);
      }
    })
}

module.exports = upsertDataPoint;
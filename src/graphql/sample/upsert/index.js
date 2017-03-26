const clog = require('fbkt-clog');
const getByName = require('../getByName');
const create = require('../create');

function upsertSample(sample){
  return getByName(sample.name)
    .then(existing => {
      if (existing) {
        return existing;
      } else {
        return create(sample);
      }
    })
}

module.exports = upsertSample;
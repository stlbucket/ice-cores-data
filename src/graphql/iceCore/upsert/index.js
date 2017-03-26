const clog = require('fbkt-clog');
const getByName = require('../getByName');
const create = require('../create');

function upsertIceCore(iceCore){
  return getByName(iceCore.name)
    .then(existing => {
      if (existing) {
        return existing;
      } else {
        return create(iceCore);
      }
    })
}

module.exports = upsertIceCore;
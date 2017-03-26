const clog = require('fbkt-clog');
const getByName = require('../getByName');
const create = require('../create');

function upsertEntity(entity){
  return getByName(entity.name)
    .then(existing => {
      if (existing) {
        return existing;
      } else {
        return create(entity);
      }
    })
}

module.exports = upsertEntity;
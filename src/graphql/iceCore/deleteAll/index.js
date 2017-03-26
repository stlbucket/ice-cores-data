const clog = require('fbkt-clog');
const templates = require('../templates');
const getAllEntities = require('../getAll');
const deleteBatch = require('../deleteBatch');

function deleteAllEntities(){
  return getAllEntities()
    .then(allEntities => {
      return deleteBatch(allEntities);
    })
    .catch(error => {
      clog(`Unable to delete all ${templates.entityName}s`, error);
      throw error;
    });

}

module.exports = deleteAllEntities;

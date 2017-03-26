const clog = require('fbkt-clog');
const client = require('../../client');
const templates = require('../templates');

function deleteBatch(entities){

  const mutation = templates.deleteBatch(entities);

  return client.mutate(mutation)
    .catch(error => {
      clog(`Unable to delete ${templates.entityName} batch`, error);
      throw error;
    });
}

module.exports = deleteBatch;
const clog = require('fbkt-clog');
const client = require('../../client');
const templates = require('../templates');

function createBatch(entities){

  const mutation = templates.createBatch(entities);

  return client.mutate(mutation)
    .catch(error => {
      clog(`Unable to create ${templates.entityName} batch`, error);
      throw error;
    });
}

module.exports = createBatch;
const clog      = require('fbkt-clog');
const client    = require('../../client');
const templates = require('../templates');

function deleteEntity(entity) {
  const mutation = `{${templates.deleteOne(entity)}}`;
  return client.mutate(mutation)
    .then(result => {
      return result[`delete${templates.entityName}`];
    })
    .catch(error => {
      clog.error(`Unable to delete ${templates.entityName}`, {
        [templates.entityName]: entity,
        error: error
      });
    })
}

module.exports = deleteEntity;
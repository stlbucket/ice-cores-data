const clog = require('fbkt-clog');
const client = require('../../client');
const templates = require('../templates');

function createEntity(entity){
  const mutation = `{${templates.createOne(entity)}}`;

  return client.mutate(mutation)
    .then(result => {
      return result[`create${templates.entityName}`];
    })
    .catch(error => {
      clog.error(`Unable to create ${templates.entityName}`, {
        [templates.entityName]: entity,
        error: error
      });
    })
}

module.exports = createEntity;
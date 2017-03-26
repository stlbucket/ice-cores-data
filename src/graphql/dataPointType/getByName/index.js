const clog = require('fbkt-clog');
const client    = require('../../client');
const templates = require('../templates');

function getEntityByName(name) {
  const query = `{${templates.getByName(name)}}`;
  console.log('query', query);

  return client.query(query)
    .then(result => {
      return result[`${templates.entityName}`]
    })
    .catch(error => {
      clog(`Unable to get ${templates.entityName} by name`, name);
      throw error;
    })
}

module.exports = getEntityByName;
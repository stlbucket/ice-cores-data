const clog = require('fbkt-clog');
const client = require('../../client');
const templates = require('../templates');

function getAllEntities(){
  const query = `{${templates.getAll()}}`;
  return client.query(query)
    .then(result => {
      return result[`all${templates.entityName}`]
    })
    .catch(error => {
      clog(`Unable to get all ${templates.entityName}`);
      throw error;
    })
}

module.exports = getAllEntities;
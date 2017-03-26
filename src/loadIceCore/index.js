const Promise = require('bluebird');
const clog = require('fbkt-clog');

const getReadStream = require('./getReadStream');
const parseIceCoreDataToJson = require('./parseIceCoreDataToJson');
const createDataPointTypes = require('./createDataPointTypes');

function createGraphqlMutation(iceCoreJson){
  return iceCoreJson;
}

function executeGraphqlMutation(mutation){
  return mutation;
}

function loadIceCore(filename){
  return getReadStream(filename)
    .then(parseIceCoreDataToJson)
    .then(createDataPointTypes)
    .then(createGraphqlMutation)
    .then(executeGraphqlMutation)
    .catch(error => {
      clog('ERROR LOADING ICE CORE', error);
      throw error;
    });
}

module.exports = loadIceCore;



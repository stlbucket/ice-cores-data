const Promise = require('bluebird');
const clog = require('fbkt-clog');
const client = require('../graphql/client');

const getReadStream = require('./getReadStream');
const parseIceCoreDataToJson = require('./parseIceCoreDataToJson');
const upsertDataPointTypes = require('./upsertDataPointTypes');
const parseIceCoreToFinalJson = require('./parseIceCoreToFinalJson');
const buildMutation = require('./buildMutation');

function loadIceCore(iceCoreInfo){
  return getReadStream(iceCoreInfo.filename)
    .then(readStream => {
      return parseIceCoreDataToJson(readStream);
    })
    .then(iceCoreSamples => {
      return upsertDataPointTypes(iceCoreSamples)
        .then(dataPointTypes => {
          return {
            iceCoreInfo:  iceCoreInfo,
            iceCoreSamples: iceCoreSamples,
            dataPointTypes: dataPointTypes
          };
        })
    })
    .then(workspace => {
      return parseIceCoreToFinalJson(workspace)
        .then(finalIceCoreJson => {
          return Object.assign(workspace, {
            finalIceCoreJson: finalIceCoreJson
          })
        });
    })
    .then(workspace => {
      return buildMutation(workspace.finalIceCoreJson)
        .then(mutation => {
          return Object.assign(workspace, {
            mutation: mutation
          });
        });
    })
    .then(workspace => {
      return client.mutate(workspace.mutation)
        .then(result => {
          return Object.assign(workspace, {
            finalResult: result
          })
        })
    })
    .catch(error => {
      clog('ERROR LOADING ICE CORE', error);
      throw error;
    });
}

module.exports = loadIceCore;



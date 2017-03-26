const clog = require('fbkt-clog');
const dataPointQL = require('../graphql/dataPoint');
const sampleQL = require('../graphql/sample');
const iceCoreQL = require('../graphql/iceCore');

function cleanAllIceCoreData(){
  return dataPointQL.deleteAll()
    .then(result => {
      clog('DELETE DATA POINT RESULT', result);
      return sampleQL.deleteAll();
    })
    .then(result => {
      clog('SAMPLE RESULT', result);
      return iceCoreQL.deleteAll();
    })
    .then(result => {
      clog('ICE CORE RESULT', result);
      return 'ALL DATA CLEANED';
    })
    .catch(error => {
      clog.error('ERROR CLEANING ICE CORE DATA', error);
      throw error;
    })

}

module.exports = cleanAllIceCoreData;
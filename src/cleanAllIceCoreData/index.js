const clog = require('fbkt-clog');
const dataPointQL = require('../graphql/dataPoint');
const sampleQL = require('../graphql/sample');
const iceCoreQL = require('../graphql/iceCore');
const seriesQL = require('../graphql/series');

function cleanAllIceCoreData(){
  return dataPointQL.deleteAll()
    .then(result => {
      clog('DATA POINT RESULT', result);
      return seriesQL.deleteAll();
    })
    .then(result => {
      clog('SERIES RESULT', result);
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
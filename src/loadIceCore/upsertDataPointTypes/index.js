const dataPointTypeQL = require('../../graphql/dataPointType');
const Promise   = require('bluebird');
const clog      = require('fbkt-clog');

function createDataPointTypes(iceCoreJson) {
  const dataPointTypeNames = Object.keys(iceCoreJson[0]);

  return Promise.map(
    dataPointTypeNames,
    dataPointTypeName => {
      return dataPointTypeQL.upsert({
        name: dataPointTypeName
      })
    }
  );
}

module.exports = createDataPointTypes;
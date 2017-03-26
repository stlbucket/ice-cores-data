const upsertDataPointType = require('../../graphql/dataPointType/upsert');
const Promise   = require('bluebird');
const clog      = require('fbkt-clog');

function createDataPointTypes(iceCoreJson) {
  const keysWeDontNeed     = ['TopDepth', 'BottomDepth', 'TopAge', 'BottomAge'];
  const dataPointTypeNames = Object.keys(iceCoreJson[0]).filter(key => keysWeDontNeed.indexOf(key) === -1);

  return Promise.map(
    dataPointTypeNames,
    dataPointTypeName => {
      return upsertDataPointType({
        name: dataPointTypeName
      })
    }
  )
    .then(dataPointTypes => {
      clog('DATA POINT TYPES', dataPointTypes);
      return iceCoreJson;
    });
}

module.exports = createDataPointTypes;
const Promise = require('bluebird');
const assempleDataPointMutation = require('./assembleDataPointMutation');
const assembleSampleMutation = require('./assembleSampleMutation');
const assembleIceCoreMutation = require('./assembleIceCoreMutation');


function buildIceCoreMutation(finalIceCoreJson){
  const mutation = assembleIceCoreMutation(finalIceCoreJson.name, finalIceCoreJson.samples.map(
    sample => {
      return assembleSampleMutation(sample.dataPoints.map(
        dataPoint => {
          return assempleDataPointMutation(dataPoint);
        }
      ));
    }
  ));

  console.log(mutation);
  return Promise.resolve(mutation);

}

module.exports = buildIceCoreMutation;
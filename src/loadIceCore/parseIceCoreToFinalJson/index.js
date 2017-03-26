const Promise = require('bluebird');

function parseIceCoreToFinalJson(workspace) {
  const iceCoreWithSamples = {
    name: workspace.iceCoreInfo.name,
    samples: workspace.iceCoreSamples.map(
      sample => {
        return {
          dataPoints: Object.keys(sample).map(
            (key) => {
              return {
                value:  sample[key],
                dataPointTypeId:  workspace.dataPointTypes.find(type => type.name === key).id
              }
            }
          )
        }
      }
    )
  };
  return Promise.resolve(iceCoreWithSamples);
}

module.exports = parseIceCoreToFinalJson;
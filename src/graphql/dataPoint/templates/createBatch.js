const createOne = require('./createOne');

function applyTemplate(dataPoints) {
  const mutationSet = dataPoints.reduce(
    (acc, dataPoint, index) => {
      const thisMutation = `DataPoint_${index}: ${createOne(dataPoint)}`;
      return acc.concat(thisMutation)
    },
    ''
  );

  return `{
    ${mutationSet}
    }
  `;
}

module.exports = applyTemplate;
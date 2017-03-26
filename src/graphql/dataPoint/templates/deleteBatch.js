const deleteOne = require('./deleteOne');

function applyTemplate(dataPoints) {
  const mutationSet = dataPoints.reduce(
    (acc, dataPoint, index) => {
      const thisMutation = `DataPoint_${index}: ${deleteOne(dataPoint)}`;
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
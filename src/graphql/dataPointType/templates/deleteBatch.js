const deleteOne = require('./deleteOne');

function applyTemplate(dataPointTypes) {
  const mutationSet = dataPointTypes.reduce(
    (acc, dataPointType, index) => {
      const thisMutation = `DataPointType_${index}: ${deleteOne(dataPointType)}`;
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
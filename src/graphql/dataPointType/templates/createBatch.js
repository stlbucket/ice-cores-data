const createOne = require('./createOne');

function applyTemplate(dataPointTypes) {
  const mutationSet = dataPointTypes.reduce(
    (acc, dataPointType, index) => {
      const thisMutation = `DataPointType_${index}: ${createOne(dataPointType)}`;
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
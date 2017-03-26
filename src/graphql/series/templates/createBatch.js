const createOne = require('./createOne');

function applyTemplate(seriess) {
  const mutationSet = seriess.reduce(
    (acc, series, index) => {
      const thisMutation = `Series_${index}: ${createOne(series)}`;
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
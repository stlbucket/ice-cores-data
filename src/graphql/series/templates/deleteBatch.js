const deleteOne = require('./deleteOne');

function applyTemplate(seriess) {
  const mutationSet = seriess.reduce(
    (acc, series, index) => {
      const thisMutation = `Series_${index}: ${deleteOne(series)}`;
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
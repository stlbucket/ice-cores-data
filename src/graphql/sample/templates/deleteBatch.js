const deleteOne = require('./deleteOne');

function applyTemplate(samples) {
  const mutationSet = samples.reduce(
    (acc, sample, index) => {
      const thisMutation = `Sample_${index}: ${deleteOne(sample)}`;
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
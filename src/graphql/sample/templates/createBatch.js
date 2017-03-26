const createOne = require('./createOne');

function applyTemplate(samples) {
  const mutationSet = samples.reduce(
    (acc, sample, index) => {
      const thisMutation = `Sample_${index}: ${createOne(sample)}`;
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
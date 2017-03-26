const createOne = require('./createOne');

function applyTemplate(iceCores) {
  const mutationSet = iceCores.reduce(
    (acc, iceCore, index) => {
      const thisMutation = `IceCore_${index}: ${createOne(iceCore)}`;
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
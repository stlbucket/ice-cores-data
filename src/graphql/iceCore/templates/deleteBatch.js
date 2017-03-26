const deleteOne = require('./deleteOne');

function applyTemplate(iceCores) {
  const mutationSet = iceCores.reduce(
    (acc, iceCore, index) => {
      const thisMutation = `IceCore_${index}: ${deleteOne(iceCore)}`;
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
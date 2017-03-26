const clog = require('fbkt-clog')
const client = require('../../client')

function buildMutation(sample){
  return `
      ${sample.name}: createSample(
        name:	"${sample.name}",
        
      ) {
        id,
        name
      },
`
}

function createSample(samples){

  const mutationSet = samples.reduce(
    (acc, item) => {
      const thisMutation = buildMutation(item);
      return acc.concat(thisMutation)
    },
    ''
  )

  const mutation = `{
${mutationSet}
}`

  console.log('MUTATION SET', mutation);

  return client.mutate(mutation)
    .then(result => {
      clog('RESULT', result);
      return result
    })
}

module.exports = createSample
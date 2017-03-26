const clog = require('fbkt-clog')
const client = require('../../client')

function buildMutation(dataPoint){
  return `
      ${dataPoint.name}: createDataPoint(
        name:	"${dataPoint.name}",
        
      ) {
        id,
        name
      },
`
}

function createDataPoint(dataPoints){

  const mutationSet = dataPoints.reduce(
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

module.exports = createDataPoint
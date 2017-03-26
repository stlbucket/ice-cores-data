const clog = require('fbkt-clog')
const client = require('../../client')

function buildMutation(iceCore){
  return `
      ${iceCore.name}: createIceCore(
        name:	"${iceCore.name}",
        
      ) {
        id,
        name
      },
`
}

function createIceCore(iceCores){

  const mutationSet = iceCores.reduce(
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

module.exports = createIceCore
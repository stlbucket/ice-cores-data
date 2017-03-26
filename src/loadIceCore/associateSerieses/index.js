const clog = require('fbkt-clog');
const Promise = require('bluebird');
const client = require('../../graphql/client');

function buildMutation(workspace){
  return `{
  updateIceCore(
    id: "${workspace.iceCoreQL.id}",
    seriesIds: [
      ${workspace.serieses.map(
        series => {
          return `"${series.id}"`
        }
  )}
    ]
  ) {
    id,
    series {
      id,
      name
    }
  }
}`;

}

function associateSerieses(workspace){
  const mutation = buildMutation(workspace);

  return client.mutate(mutation)
    .then(result => {
      return result.updateIceCore;
    })
}

module.exports = associateSerieses;
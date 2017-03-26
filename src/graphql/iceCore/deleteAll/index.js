const Promise = require('bluebird')
const getAllIceCores = require('../getAll')
const deleteIceCore = require('../deleteOne')

function deleteAllIceCores(){
  return getAllIceCores()
    .then(allIceCores => {
      return Promise.map(
        allIceCores,
        iceCore => {
          return deleteIceCore(iceCore.id)
        }
      )
    })
    .catch((e) => console.error(e))
}

module.exports = deleteAllIceCores

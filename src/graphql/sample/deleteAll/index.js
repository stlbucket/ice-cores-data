const Promise = require('bluebird')
const getAllSamples = require('../getAll')
const deleteSample = require('../deleteOne')

function deleteAllSamples(){
  return getAllSamples()
    .then(allSamples => {
      return Promise.map(
        allSamples,
        sample => {
          return deleteSample(sample.id)
        }
      )
    })
    .catch((e) => console.error(e))
}

module.exports = deleteAllSamples

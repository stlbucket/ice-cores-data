const Promise = require('bluebird')
const getAllDataPoints = require('../getAll')
const deleteDataPoint = require('../deleteOne')

function deleteAllDataPoints(){
  return getAllDataPoints()
    .then(allDataPoints => {
      return Promise.map(
        allDataPoints,
        dataPoint => {
          return deleteDataPoint(dataPoint.id)
        }
      )
    })
    .catch((e) => console.error(e))
}

module.exports = deleteAllDataPoints

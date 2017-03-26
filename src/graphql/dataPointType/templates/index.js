module.exports = {
  entityName: 'DataPointType',
  getAll: require('./getAll'),
  getByName: require('./getByName'),
  createOne:  require('./createOne'),
  createBatch: require('./createBatch'),
  deleteOne: require('./deleteOne'),
  deleteBatch: require('./deleteBatch'),
}
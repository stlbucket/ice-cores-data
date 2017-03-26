module.exports = {
  entityName: 'DataPoint',
  getAll: require('./getAll'),
  createOne:  require('./createOne'),
  createBatch: require('./createBatch'),
  deleteOne: require('./deleteOne'),
  deleteBatch: require('./deleteBatch'),
}
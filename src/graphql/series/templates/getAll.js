function applyTemplate(){
  return `
    allSeries {
      id,
      name,
      dataPointType {
        id,
        name
      }
    }
  `
}

module.exports = applyTemplate;
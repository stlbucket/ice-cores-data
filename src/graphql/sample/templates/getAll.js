function applyTemplate(){
  return `
    allSamples {
      id,
      dataPoints {
        id,
        value,
        dataPointType {
          id,
          name
        }
      }
    }
  `
}

module.exports = applyTemplate;
function applyTemplate(){
  return `
    allDataPoints {
      id,
      value,
      dataPointType {
        id,
        name
      }
    }
  `
}

module.exports = applyTemplate;
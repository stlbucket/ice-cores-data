function applyTemplate(series){
  return `
    createSeries(
      name: "${series.name}",
      dataPointTypeId: "${series.dataPointTypeId}"
    ) {
      id,
      name,
      dataPointType {
        id,
        name
      }
    }
  `
};

module.exports = applyTemplate;
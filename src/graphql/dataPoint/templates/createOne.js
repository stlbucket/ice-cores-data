function applyTemplate(dataPoint){
  return `
    createDataPoint(
      value: ${dataPoint.value},
      dataPointTypeId: "${dataPoint.dataPointTypeId}"
    ) {
      id,
      value,
      dataPointTypeId
    }
  `
};

module.exports = applyTemplate;
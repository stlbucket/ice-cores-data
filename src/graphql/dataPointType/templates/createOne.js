function applyTemplate(dataPointType){
  return `
    createDataPointType(
      name: "${dataPointType.name}"
    ) {
      id,
      name
    }
  `
};

module.exports = applyTemplate;
function applyTemplate(dataPointType){
  return `
    deleteDataPointType(id: "${dataPointType.id}") {
      id
    } 
  `
};

module.exports = applyTemplate;
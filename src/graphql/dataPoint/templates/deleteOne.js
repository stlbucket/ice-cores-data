function applyTemplate(dataPoint){
  return `
    deleteDataPoint(id: "${dataPoint.id}") {
      id
    } 
  `
};

module.exports = applyTemplate;
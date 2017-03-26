function applyTemplate(series){
  return `
    deleteSeries(id: "${series.id}") {
      id
    } 
  `
};

module.exports = applyTemplate;
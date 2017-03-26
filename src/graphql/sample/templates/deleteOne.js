function applyTemplate(sample){
  return `
    deleteSample(id: "${sample.id}") {
      id
    } 
  `
};

module.exports = applyTemplate;
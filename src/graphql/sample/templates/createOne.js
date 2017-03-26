function applyTemplate(sample){
  return `
    createSample(
      value: ${sample.value},
      sampleTypeId: "${sample.sampleTypeId}"
    ) {
      id,
      value,
      sampleTypeId
    }
  `
};

module.exports = applyTemplate;
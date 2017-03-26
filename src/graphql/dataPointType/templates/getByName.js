function applyTemplate(name){
  return `
    DataPointType(name: "${name}") {
      id,
      name
    }
  `
}

module.exports = applyTemplate;
function applyTemplate(name){
  return `
    IceCore(name: "${name}") {
      id,
      name
    }
  `
}

module.exports = applyTemplate;
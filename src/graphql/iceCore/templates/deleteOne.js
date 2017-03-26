function applyTemplate(iceCore){
  return `
    deleteIceCore(id: "${iceCore.id}") {
      id
    } 
  `
};

module.exports = applyTemplate;
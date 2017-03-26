function applyTemplate(iceCore){
  return `
    createIceCore(
      value: ${iceCore.value},
      iceCoreTypeId: "${iceCore.iceCoreTypeId}"
    ) {
      id,
      value,
      iceCoreTypeId
    }
  `
};

module.exports = applyTemplate;
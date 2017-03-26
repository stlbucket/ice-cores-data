module.exports = function(iceCore){
  return `
  {
    createIceCore(
      name: "${iceCore.name}"
    ) {
      id,
      name
    }
  }
`
};
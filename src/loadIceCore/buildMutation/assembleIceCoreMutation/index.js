function assembleBaseMutation(name, samples) {
  return `{
  createIceCore(
    name: "${name}",
    samples: [
      ${samples}
    ]
  ) {
    id,
    name,
    samples {
      id,
      dataPoints {
        id,
        value,
        dataPointType {
          id,
          name
        }
      }
    }
  }
}`;
}

module.exports = assembleBaseMutation;
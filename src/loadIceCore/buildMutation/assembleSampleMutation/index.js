function assembleSampleMutation(dataPoints) {
  return `
          {
            dataPoints: [
              ${dataPoints}
            ]
          }`;
}


module.exports = assembleSampleMutation;
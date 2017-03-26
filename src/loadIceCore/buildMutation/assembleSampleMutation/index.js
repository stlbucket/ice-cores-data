function assembleSampleMutation(sample, dataPoints) {
  return `
          {
            topDepth: ${sample.topDepth},
            bottomDepth: ${sample.bottomDepth},
            topAge: ${sample.topAge},
            bottomAge: ${sample.bottomAge},
            dataPoints: [
              ${dataPoints}
            ]
          }`;
}


module.exports = assembleSampleMutation;
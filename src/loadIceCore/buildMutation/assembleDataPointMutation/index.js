function assembleDataPointMutation(dataPoint) {
  return `{
            value:  ${dataPoint.value},
            dataPointTypeId:	"${dataPoint.dataPointTypeId}"
          }`;
}


module.exports = assembleDataPointMutation;
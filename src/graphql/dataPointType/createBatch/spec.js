'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const createDataPointTypes = require('./index');

describe.skip(__filename, () => {
  it('load a test dataPointType batch', (done) => {
    const testId = uuid.v4();
    const testId2 = uuid.v4();
    const dataPointTypes = [
      {
        name: `DataPointType-${testId}`
      },
      {
        name: `DataPointType-${testId2}`
      }
    ];

    createDataPointTypes(dataPointTypes)
      .then(result => {
        console.log('RESULT', result)
        expect(result).to.be.an('object')
        done();
      })
      .catch(error => {
        console.log(error);
        done(error);
      })
  });
});

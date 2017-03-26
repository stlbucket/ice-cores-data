'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const createDataPoints = require('./index');

describe.skip(__filename, () => {
  it('load a test dataPoint batch', (done) => {
    const testId = uuid.v4();
    const testId2 = uuid.v4();
    const dataPoints = [
      {
        name: `DataPoint-${testId}`
      },
      {
        name: `DataPoint-${testId2}`
      }
    ];

    createDataPoints(dataPoints)
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

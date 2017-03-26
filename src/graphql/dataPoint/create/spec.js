'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const createDataPoint = require('./index');

describe.skip(__filename, () => {
  it('load a test dataPoint', (done) => {
    const testId = uuid.v4();
    const dataPoint = {
      name: `DataPoint-${testId}`
    }

    createDataPoint(dataPoint)
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

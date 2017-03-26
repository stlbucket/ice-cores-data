'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const createDataPointType = require('./index');

describe.skip(__filename, () => {
  it('load a test dataPointType', (done) => {
    const testId = uuid.v4();
    const dataPointType = {
      name: `DataPointType-${testId}`
    }

    createDataPointType(dataPointType)
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

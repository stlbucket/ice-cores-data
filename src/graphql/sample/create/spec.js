'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const createSample = require('./index');

describe.skip(__filename, () => {
  it('load a test sample', (done) => {
    const testId = uuid.v4();
    const sample = {
      name: `Sample-${testId}`
    }

    createSample(sample)
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

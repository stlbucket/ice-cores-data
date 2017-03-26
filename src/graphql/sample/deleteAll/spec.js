'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const deleteAllSamples = require('./index');

describe.skip(__filename, () => {
  it('delete all samples', (done) => {
    deleteAllSamples()
      .then(result => {
        console.log('RESULT', result)
        expect(result).to.be.an('array')
        done();
      })
      .catch(error => {
        console.log(error);
        done(error);
      })
  });
});

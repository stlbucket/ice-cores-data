'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const getAllSamples = require('./index');

describe.skip(__filename, () => {
  it('load a test sample', (done) => {
    getAllSamples()
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

'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const getAllDataPointTypes = require('./index');

describe.skip(__filename, () => {
  it('get all', (done) => {
    getAllDataPointTypes()
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

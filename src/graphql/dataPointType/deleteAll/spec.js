'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');
const deleteAllDataPointTypes = require('./index');

describe.skip(__filename, () => {
  it('delete all dataPointTypes', (done) => {
    deleteAllDataPointTypes()
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

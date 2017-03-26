'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');
const deleteAllDataPoints = require('./index');

describe.skip(__filename, () => {
  it('delete all dataPoints', (done) => {
    deleteAllDataPoints()
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

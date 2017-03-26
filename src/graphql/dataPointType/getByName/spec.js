'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const getDataPointTypeByName = require('./index');

describe.skip(__filename, () => {
  it('get by name', (done) => {
    const name = 'DataPointType-6ba91001-8a11-4cdd-8cb0-79ac2c777dda';

    getDataPointTypeByName(name)
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

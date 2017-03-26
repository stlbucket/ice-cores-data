'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const createIceCore = require('./index');

describe.skip(__filename, () => {
  it('load a test iceCore', (done) => {
    const testId = uuid.v4();
    const iceCore = {
      name: `IceCore-${testId}`
    }

    createIceCore(iceCore)
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

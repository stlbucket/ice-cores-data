'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const upsertIceCore = require('./index');

describe.skip(__filename, () => {
  it('upsert a iceCore', (done) => {
    const testId = uuid.v4();
    const iceCore = {
      name: `IceCore-${testId}`
    }

    upsertIceCore(iceCore)
      .then(result => {
        console.log('RESULT', result)
        expect(result).to.be.an('object')

        return upsertIceCore(iceCore)
          .then(secondResult => {
            console.log('SECOND RESULT', secondResult)
            expect(secondResult).to.be.an('object')
            expect(secondResult.name).to.equal(result.name)
            done();
          })
      })
      .catch(error => {
        console.log(error);
        done(error);
      })
  });
});

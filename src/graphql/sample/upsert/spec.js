'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const upsertSample = require('./index');

describe.skip(__filename, () => {
  it('upsert a sample', (done) => {
    const testId = uuid.v4();
    const sample = {
      name: `Sample-${testId}`
    }

    upsertSample(sample)
      .then(result => {
        console.log('RESULT', result)
        expect(result).to.be.an('object')

        return upsertSample(sample)
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

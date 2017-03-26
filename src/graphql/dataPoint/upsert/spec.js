'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const upsertDataPoint = require('./index');

describe.skip(__filename, () => {
  it('upsert a dataPoint', (done) => {
    const testId = uuid.v4();
    const dataPoint = {
      name: `DataPoint-${testId}`
    }

    upsertDataPoint(dataPoint)
      .then(result => {
        console.log('RESULT', result)
        expect(result).to.be.an('object')

        return upsertDataPoint(dataPoint)
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

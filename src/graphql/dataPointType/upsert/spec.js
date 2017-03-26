'use strict';
const expect = require('chai').expect;
const uuid = require('uuid');

const upsertDataPointType = require('./index');

describe.skip(__filename, function(){
  it('upsert a dataPointType', (done) => {
    this.timeout(5000);
    const testId = uuid.v4();
    const dataPointType = {
      name: `DataPointType-${testId}`
    }

    upsertDataPointType(dataPointType)
      .then(result => {
        console.log('RESULT', result)
        expect(result).to.be.an('object')

        return upsertDataPointType(dataPointType)
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

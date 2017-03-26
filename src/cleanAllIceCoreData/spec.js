'use strict';
const clog = require('fbkt-clog');
const expect = require('chai').expect;

const target = require('./index');

describe.only('your module', () => {

  it('should do something useful', function(done){
    this.timeout(10000);
    target()
      .then(result => {
        clog('FINAL RESULT', result);
        done();
      })
      .catch(error => {
        done(error);
      })
  });

});

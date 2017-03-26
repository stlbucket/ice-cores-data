'use strict';
const uuid = require('uuid');
const expect = require('chai').expect;
const clog = require('fbkt-clog');
const target = require('./index');

describe.only('load core', function(){

  it('load an ice core', function(done){
    this.timeout(10000);
    // const filename = './src/loadCore/GreenlandIceCoreData.csv';
    const filename = './src/loadIceCore/GISP2.csv';
    const iceCoreInfo = {
      // name: 'GISP2',
      name: uuid.v4(),
      filename: filename
    };

    target(iceCoreInfo)
      .then(result => {
        clog('RESULT', result);
        done();
      })
      .catch(error => {
        done(error);
      });
  });

});

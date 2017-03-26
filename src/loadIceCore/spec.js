'use strict';
const expect = require('chai').expect;
const clog = require('fbkt-clog');
const target = require('./index');

describe('load core', () => {

  it.skip('load an ice core', (done) => {
    // const filename = './src/loadCore/GreenlandIceCoreData.csv';
    const filename = './src/loadIceCore/GISP2.csv';

    target(filename)
      .then(result => {
        clog('RESULT', result);
        done();
      })
      .catch(error => {
        done(error);
      });
  });

});

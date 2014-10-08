/*global describe,it*/
'use strict';
var assert = require('assert'),
  stereophonic = require('../lib/stereophonic.js');

describe('stereophonic node module.', function() {
  it('must be awesome', function() {
    assert( stereophonic.awesome(), 'awesome');
  });
});

var assert = require('chai').assert;
var testNum = require('./promises');

describe('testNum', () => {
  it('should be a function', () => {
    assert.isFunction(testNum);
  });
});
var assert = require('chai').assert;
var testNum = require('./promises');

describe('testNum', () => {
  it('should be a function', () => {
    assert.isFunction(testNum);
  });

  it('should return a promise', () => {
    let result = testNum();
    assert.instanceOf(result, Promise);
  });
});
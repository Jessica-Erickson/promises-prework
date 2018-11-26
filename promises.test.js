var assert = require('chai').assert;
var testNum = require('./promises');

describe('testNum', () => {
  it('should be a function', () => {
    assert.isFunction(testNum);
  });

  it('should return a promise', () => {
    const result = testNum();
    assert.instanceOf(result, Promise);
  });

  it('should return \'__ is greater than 10, success!\' if the number is greater than 10', async () => {
    const result = await testNum(15);
    assert.strictEqual(result, '15 is greater than 10, success!');
  });
});
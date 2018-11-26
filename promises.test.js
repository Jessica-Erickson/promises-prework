var assert = require('chai').assert;
var promises = require('./promises');

describe('testNum', () => {
  it('should be a function', () => {
    assert.isFunction(promises.testNum);
  });

  it('should return a promise', () => {
    const result = promises.testNum().then().catch(error => {});
    assert.instanceOf(result, Promise);
  });

  it('should return \'__ is greater than 10, success!\' if the number is greater than 10', () => {
    return promises.testNum(15)
      .then(result => {
        assert.strictEqual(result, '15 is greater than 10, success!');
      })
      .catch(error => {
        throw new Error('Entering 15 should not throw an error.');
      });
  });

  it('should return \'__ is less than 10, error!\' if the number is less than 10', () => {
    return promises.testNum(5)
      .then(result => {
        throw new Error('Entering 5 should throw the other error.');
      })
      .catch(error => {
        assert.strictEqual(error, '5 is less than 10, error!')
      });
  });
});

describe('makeAllCaps', () => {
  it('should be a function', () => {
    assert.isFunction(promises.makeAllCaps)
  });

  it('should return a promise', () => {
    const result = promises.makeAllCaps().then().catch(error => {});
    assert.instanceOf(result, Promise);
  });

  it('should throw an error if it isn\'t given an array', () => {
    return promises.makeAllCaps()
      .then(result => new Error('Calling makeAllCaps without a parameter should not yield a result'))
      .catch(error => assert.strictEqual(error.message, 'makeAllCaps was called without an array as its argument.'))
  });
});

describe('sortWords', () => {
  it('should be a function', () => {
    assert.isFunction(promises.sortWords)
  });
});
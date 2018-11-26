const testNum = (num) => {
  const promise = new Promise((resolve) => {
    if (num > 10) {
      resolve(num + ' is greater than 10, success!');
    }
  });
  return promise;
}

module.exports = testNum;
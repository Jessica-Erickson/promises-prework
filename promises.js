const testNum = (num) => {
  const promise = new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + ' is greater than 10, success!');
    } else {
      reject(num + ' is less than 10, error!');
    }
  });
  return promise;
}

module.exports = testNum;
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

const makeAllCaps = (words) => {
  const promise = new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      throw new Error('makeAllCaps was called without an array as its argument.');
    }
    const newWords = words.map(word => {
      if (typeof word !== 'string') {
        reject('No, the array you passed in contained an element that was not a string!');
      } else {
        return word.toUpperCase();
      }
    });
    resolve(newWords);
  });
  return promise;
}

const sortWords = (words) => {
  const promise = new Promise((resolve) => {
    resolve(words.sort());
  });
  return promise;
}

module.exports = {
  testNum,
  makeAllCaps,
  sortWords
};
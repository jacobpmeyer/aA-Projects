function radixSort(arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 1) return arr;
  if (arr.length === 0) return [];

  for (i = 0; i < getMaxDigits(arr); i++) {
    let buckets = new Array(10).fill().map(() => new Array());
    for (let j = 0; j < arr.length; j++) {
      if (getIntLength(arr[j]) > i) {
        let digit = getDigitFrom(arr[j], i);
        //   console.log(j, i);
        buckets[digit].push(arr[j]);
      } else {
        buckets[0].push(arr[j]);
      }
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

// const getDigitFrom = (num, place) =>
//   Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

function getDigitFrom(num, place) {
  let n = String(num).split("").reverse()[place];
  return Number(n);
}

function getIntLength(num) {
  return String(num).length;
}

function getMaxDigits(nums) {
  let maxDigit = String(nums[0]).length;

  for (let i = 0; i < nums.length; i++) {
    const el = String(nums[i]).length;
    if (el > maxDigit) maxDigit = el;
  }

  return maxDigit;
}

module.exports = {
  radixSort,
};

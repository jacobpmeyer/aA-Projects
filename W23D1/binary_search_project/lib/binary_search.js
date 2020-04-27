function binarySearch(arr, target) {
  if (!arr.length) return false;

  const midIdx = Math.floor(arr.length / 2);

  if (arr[midIdx] === target) return true;

  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx + 1);

  if (arr[midIdx] > target) {
    return binarySearch(left, target);
  } else {
    return binarySearch(right, target);
  }
}

function binarySearchIndex(arr, target) {
  if (!arr.length) return -1;

  const midIdx = Math.floor(arr.length / 2);

  if (arr[midIdx] === target) return arr.indexOf(arr[midIdx]);

  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx + 1);

  if (arr[midIdx] > target) {
    return binarySearchIndex(left, target);
  } else {
    const rightResult = binarySearchIndex(right, target);
    return rightResult !== -1 ? left.length + rightResult + 1 : -1;
  }
}

module.exports = {
  binarySearch,
  binarySearchIndex,
};

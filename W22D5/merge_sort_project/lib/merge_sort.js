function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let l1 = array1.length ? array1[0] : Infinity;
    let l2 = array2.length ? array2[0] : Infinity;
    let next;
    l1 < l2 ? (next = array1.shift()) : (next = array2.shift());

    merged.push(next);
  }
  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

module.exports = {
  merge,
  mergeSort,
};

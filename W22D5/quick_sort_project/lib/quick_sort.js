function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();

  let leftArray = array.filter((el) => el < pivot);
  let rightArray = array.filter((el) => el >= pivot);

  return quickSort(leftArray).concat([pivot]).concat(quickSort(rightArray));
}

module.exports = {
  quickSort,
};

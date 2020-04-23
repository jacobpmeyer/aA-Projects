function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
}

function bubbleSort(array) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        swap(array, index, index + 1);
        swapped = true;
      }
    }
  }
  return array;
}

module.exports = {
  bubbleSort,
  swap,
};

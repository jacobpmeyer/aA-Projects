Array.prototype.bubbleSort = function() {
  sorted = false 
  sortedArr = this.slice();
  while (!sorted) {
    sorted = true
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]]
        sorted = false
      }
    }
  }
  return sortedArr;
}

String.prototype.substrings = function () {
  subs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      subs.push(this.slice(i, j + 1))
    }
  }
  return subs;
}

function range (start, end, array) {
  if (array[0] === start && array[-1] === end) {
    return array;
  }

  if (array[0] !== start) {
    function range (start, end, array.slice(1));
  } else {
    function range (start, end, array);
  }
}
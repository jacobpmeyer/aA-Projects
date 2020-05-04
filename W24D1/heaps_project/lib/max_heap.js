class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (this.array.length === 1) return;
    let parentIdx = this.getParent(idx);
    let parentVal = this.array[parentIdx];
    let currentVal = this.array[idx];
    if (currentVal > parentVal && parentVal !== null) {
      [this.array[parentIdx], this.array[idx]] = [
        this.array[idx],
        this.array[parentIdx],
      ];
      this.siftUp(parentIdx);
    }
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    // let max = this.array[1];
    // this.array.splice(1, 1);

    return max;
  }

  siftDown(idx) {
    if (this.array.length === 1) return;
    let currentVal = this.array[idx];
    let rightIdx = this.getRightChild(idx);
    let leftIdx = this.getLeftChild(idx);
    let rightVal = this.array[rightIdx];
    let leftVal = this.array[leftIdx];
    if (rightVal === undefined) rightVal = -Infinity;
    if (leftVal === undefined) leftVal = -Infinity;
    if (currentVal > rightVal && currentVal > leftVal) return;
    let swapIdx;
    if (rightVal < leftVal) {
      swapIdx = leftIdx;
    } else {
      swapIdx = rightIdx;
    }

    [this.array[swapIdx], this.array[idx]] = [
      this.array[idx],
      this.array[swapIdx],
    ];
    this.siftDown(swapIdx);
  }
}

module.exports = {
  MaxHeap,
};

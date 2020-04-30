// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// Given an array where elements are sorted in ascending order, convert it to a
// height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree
// in which the depth of the two subtrees of every node never differ by more than 1.

// Given the sorted array: [-10,-3,0,5,9],      [1, 2, 3, 4, 5, 6]

// One possible answer is: [0,-3,9,-10,null,5], which represents the
// following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// r: 6 L:[1] R: [4, 5, 6]
//       3
//      / \
//    2    5
//   / \  / \
//  n  2 4   6
//
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return rec(nums, null);

  function rec(nums, parent = null) {
    if (!nums.length) return null;
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    const left = nums.slice(0, mid);
    const right = nums.slice(mid + 1);

    root.left = rec(left, root);
    root.right = rec(right, root);
    return root;
  }
};

module.exports = {};

// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in
// height by no more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4

// Return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// [1,2,2,3,null,null,3,4,null,null,4]

var isBalanced = function (root) {
  if (!root) return true;
  let left = heightCounter(root.left);
  if (left === null) return null;
  let right = heightCounter(root.right);
  if (right === null) return null;

  let maxVal = Math.max(left, right);
  let minVal = Math.min(left, right);

  return maxVal - minVal > 1 ? false : true;
};

const heightCounter = (node) => {
  if (!node) return -1;

  const leftCounter = heightCounter(node.left);
  if (leftCounter === null) return null;
  const rightCounter = heightCounter(node.right);
  if (rightCounter === null) return null;

  if (Math.abs(leftCounter - rightCounter) > 1) return null;

  return 1 + Math.max(leftCounter, rightCounter);
};

var isBalanced = function (root) {
  function counter(root) {
    if (!root) return 0;

    const l = counter(root.left);
    const r = counter(root.right);
    return Math.max(l, r) + 1;
  }

  const left = counter(root.left);
  const right = counter(root.right);

  return difference(left, right) > 1;
};

function difference(a, b) {
  return Math.abs(a - b);
}

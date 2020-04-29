// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  const idx = inorder.indexOf(rootVal);

  const leftInorder = inorder.slice(0, idx);
  const rightInorder = inorder.slice(idx + 1);

  const leftPreorder = preorder.filter((el) => leftInorder.includes(el));
  const rightPreorder = preorder.filter((el) => rightInorder.includes(el));

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));

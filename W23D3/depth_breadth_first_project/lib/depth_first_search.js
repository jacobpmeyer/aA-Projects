function depthFirstSearch(root, targetVal) {
  if (!root) return null;
  if (root.val === targetVal) return root;
  left = depthFirstSearch(root.left, targetVal);
  if (left) return left;
  right = depthFirstSearch(root.right, targetVal);
  return right;
}

module.exports = {
  depthFirstSearch,
};

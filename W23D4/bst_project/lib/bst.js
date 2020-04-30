class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    if (!root) {
      return (this.root = new TreeNode(val));
    }
    if (val >= root.val) {
      if (!root.right) root.right = new TreeNode(val);
      else this.insert(val, root.right);
    } else {
      if (!root.left) root.left = new TreeNode(val);
      else this.insert(val, root.left);
    }
  }

  searchRecur(val, root = this.root) {
    if (!root) return false;
    if (val === root.val) return true;
    else if (val > root.val) return this.searchRecur(val, root.right);
    else return this.searchRecur(val, root.left);
  }

  searchIter(val) {
    let node = this.root;
    while (node) {
      if (node.val === val) return true;
      if (val > node.val) node = node.right;
      else node = node.left;
    }
    return false;
  }
}

module.exports = {
  TreeNode,
  BST,
};

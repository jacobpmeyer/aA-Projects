function breadthFirstArray(root) {
  let stack = [root];
  let i = 0;
  for (let i = 0; i < stack.length; i++) {
    node = stack[i];
    if (node.left) stack.push(stack[i].left);
    if (node.right) stack.push(stack[i].right);
  }
  return stack.map((node) => node.val);
}

module.exports = {
  breadthFirstArray,
};

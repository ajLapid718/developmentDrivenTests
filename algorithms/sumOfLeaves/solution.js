const sumOfLeaves = function(root) {
  if (!root) return 0;

  let sum = 0;
  let currNode = root;

  if (isLeafNode(currNode) === true) {
    sum += currNode.val;
  }

  sum += sumOfLeaves(currNode.left);
  sum += sumOfLeaves(currNode.right);

  return sum;
}

function isLeafNode(node) {
  return !node.left && !node.right;
}

module.exports = {
  sumOfLeaves
}

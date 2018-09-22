const { sumOfLeaves } = require('./solution.js');
const { expect } = require('chai');

describe("sumOfLeaves(root)", function() {

  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    };
  };

  describe("examples", function() {

    let myBinaryTree = null;

    afterEach(function() {
      myBinaryTree = null;
    });

    it("should return the sum of all leaf node values for example one", function() {
      myBinaryTree = new TreeNode(3);
      myBinaryTree.left = new TreeNode(9);
      myBinaryTree.right = new TreeNode(20);
      myBinaryTree.right.left = new TreeNode(15);
      myBinaryTree.right.right = new TreeNode(7);

      let actualValue = sumOfLeaves(myBinaryTree);
      expect(actualValue).to.equal(31);
    });

    it("should return the sum of all leaf node values for example two", function() {
      myBinaryTree = new TreeNode(3);
      myBinaryTree.left = new TreeNode(20);
      myBinaryTree.right = new TreeNode(7);
      myBinaryTree.right.left = new TreeNode(30);
      myBinaryTree.right.right = new TreeNode(40);

      let actualValue = sumOfLeaves(myBinaryTree);
      expect(actualValue).to.equal(90);
    });

    it("should return the sum of all leaf node values for example three", function() {
      myBinaryTree = new TreeNode(3);
      myBinaryTree.left = new TreeNode(31)
      myBinaryTree.right = new TreeNode(4);
      myBinaryTree.right.right = new TreeNode(5);
      myBinaryTree.right.right.right = new TreeNode(6);
      myBinaryTree.right.right.right.right = new TreeNode(7);

      let actualValue = sumOfLeaves(myBinaryTree);
      expect(actualValue).to.equal(38);
    });

  });

});

class BinaryTreeNode{
    constructor(val, left, right){
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
let root = new BinaryTreeNode(1)
root.left = new BinaryTreeNode(2)
root.right = new BinaryTreeNode(3)
console.log(root);
// BinaryTreeNode {
//     val: 1,
//     left: BinaryTreeNode { val: 2, left: null, right: null },
//     right: BinaryTreeNode { val: 3, left: null, right: null }
//   }
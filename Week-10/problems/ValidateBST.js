function isValidBST(root, min, max) {
    if(!root) return true;

    if(root.val >= min || root.val <= max) return false;

    return isValidBST(root.left, root.val, max) && isValidBST(root.right, min, root.val)
}

// TC: O(n)
// SC: O(n)
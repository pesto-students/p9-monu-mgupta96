var levelOrder = function(root) {
    if (!root) return [];
    let queue = [];
    let result = [];
    queue.push(root);
    while(queue.length > 0){
        size = queue.length;
        let temp = [];
        while (size){
            data = queue.shift();
            temp.push(data.val);
            if(data.left){
                queue.push(data.left);
            }
            if(data.right){
                queue.push(data.right);
            }
            size--;
        }
        result.push(temp);
    }
    return result;
};



// TC: O(n)
// SC: O(n)
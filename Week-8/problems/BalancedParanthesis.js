const Stack = require('../implementation/Stack')

var isBalanced = function(s) {
    stack = new Stack()
    bracketPair = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for( let x of s){
        if(bracketPair[x]){
            stack.push(bracketPair[x])
        }
        else{
            if (x != stack.pop()){
                return false
            }
        }
    }
    return stack.isEmpty();
}

console.log(isBalanced('()')); // true
console.log(isBalanced('([]')); // false


// TC: O(n)
// SC: O(n)
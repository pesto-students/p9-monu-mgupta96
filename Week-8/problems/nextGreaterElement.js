const Stack = require('../implementation/Stack')

const nextGreaterElemnts = arr => {
    console.log(arr);
    let out = []
    let stack = new Stack()
    for(let i=arr.length-1; i>=0; i--){
        while (!stack.isEmpty()  && arr[stack.top()] < arr[i]){
            stack.pop()
        }
        if(stack.isEmpty()){
            out[i] = -1
        }else{
            out[i] = arr[stack.top()]
        }
        stack.push(i)
        console.log(arr[i], stack);
    }
    return out
}


console.log(nextGreaterElemnts([1,3,2,4]))

// TC: O(n)
// SC: O(n)
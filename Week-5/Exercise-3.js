// CHECK IF ARRAY HAS DUPLICATE OR NOT

const hasDuplicate = arr => (new Set(arr)).size !== arr.length;

console.log(hasDuplicate([1, 4, 2, -2 , -1]))
console.log(hasDuplicate([1, 4, 2, -2 ,-2, -1]))

//! Time complexity : O(n)
//! Space complexity: O(n) 


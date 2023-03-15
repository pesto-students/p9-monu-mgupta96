// DICTIONARY TO TRACK THE UNIQUE AND FIND DIFF⚡

const twoDiff = (arr, target) => {
    diffmap = {}
    pairs = 0
    for(let num of arr)
        diffmap[num] = diffmap[num] ? diffmap[num]+1 : 1
    for(let num in diffmap){
        c1 = (target == 0) && (diffmap[num] > 1)
        c2 = (target > 0) && ((parseInt(num)+target) in diffmap)
        if (c1 || c2)
            return 1
    }
    return 0
}

console.log(twoDiff([7,16,5,3,6,4], 9)); // Pair[0,1]  Returns: 1
console.log(twoDiff([5, 10, 3, 2, 50, 80], 78)); // Pair[3,5]  Returns: 1
console.log(twoDiff([-10, 20], 30)); //  Pair[0,1]  Returns: 1

// TC = O(n)
// SC = O(1)
const maxSumContiguousSubarray = arr => {
    let max_end = 0, max_sofar=0
    for(let i=0; i<arr.length; i++){
        max_end += arr[i]
        if(max_sofar < max_end)
            max_sofar = max_end
        if(max_end < 0)
            max_end = 0
    }
    return max_sofar
}
console.log(maxSumContiguousSubarray([-2, -3, 4, -1, -2, 1, 5, -3]))

// TC = O(n)
// SC = O(1)
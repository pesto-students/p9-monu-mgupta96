// MULTIPLE POINTER FOR TRACKING⚡

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const sort0s1sand2s = arr => {
    let low=0, mid=0, high=arr.length-1
    while(mid <= high){
        if(arr[mid] == 0){
            swap(arr, mid, low)
            low += 1
            mid += 1
        }
        else if(arr[mid] == 2){
            swap(arr, mid, high)
            high -= 1
        }
        else{
            mid += 1
        }
    }
    return arr
}

console.log(sort0s1sand2s([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1])) // [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2 ]
// TC = O(n)
// SC = O(1)





// SIMPLEST METHOD
const sorting = arr => arr.sort((a,b) => a-b)
console.log(sorting([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1])); // [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2 ]

// TC = O(nlogn)
// sC = O(1)
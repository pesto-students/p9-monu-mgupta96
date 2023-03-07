const spiralPrint = (mat, r, c) => {
    let top = 0, left= 0, right = c-1, bottom = r-1
    let ans = []
    while(top <= bottom && left <= right){
        for(let i=left; i<=right; i++)
            ans.push(mat[top][i])
        top++
        for(let i=top; i<=bottom; i++)
            ans.push(mat[i][right])
        right--
        if(top<=bottom){
            for(let i=right; i>=left; i--)
                ans.push(mat[bottom][i])
            bottom--
        }
        if(left <= right){
            for(let i=bottom; i>=top; i--)
                ans.push(mat[i][left])
            left++
        }
    }    
    return ans
}

let arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(spiralPrint(arr, 3, 3)); //[1, 2, 3, 6, 9, 8, 7, 4, 5]

// TC = O(rc)
// SC = O(1)

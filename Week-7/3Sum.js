const threeSum = (arr, target) => {
    arr.sort()
    closestSum = Number.MAX_VALUE
    for(let i=0; i<arr.length-2; i++){
        l = i+1
        r = arr.length-1

        while(l<r){
            total = arr[i] + arr[l] + arr[r] 
            if (Math.abs(target-total) < Math.abs(target-closestSum)){
                closestSum = total
            }
            else if(total < target){
                l++
            }
            else{
                r--
            }
        }
    }
    return closestSum;
}

console.log(threeSum([-1, 2, 1, -4],1)); // 2
// TC = O(n^2)
// SC = O(1)

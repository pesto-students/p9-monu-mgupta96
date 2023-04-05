var findJudge = function(n, trust) {
    let trusting = {}//Array(n).fill(0)
    let beingTrusted = {}//Array(n).fill(0)
    for([i,j] of trust){
        trusting[i] ? trusting[i] += 1 : trusting[i] = 1
        beingTrusted[j] ? beingTrusted[j] += 1 : beingTrusted[j] = 1
    }
    for(i=1; i<n+1; i++){
        if(!trusting[i] && beingTrusted[i]==n-1){
            return i
        }
    }
    return -1
};


// TC: O(n)
// SC: O(1)
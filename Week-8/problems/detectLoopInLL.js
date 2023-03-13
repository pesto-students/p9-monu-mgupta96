const LinkedList = require('../implementation/Linkedlist')

const detectLoop = head => {
    if(head ==null || head.next == null ){
        return false
    }
    let s = head
    let f = head
    // for first time lets increment both as slow (1x) and fast(2x) pointer
    while(s && f && f.next){
        s = s.next
        f = f.next.next
        if(s === f)
            return true
    }   
    return false
}

let ll = new LinkedList([1,2,3])
ll.print()
console.log("Detected Loop", detectLoop(ll.head))

// TC: O(n)
// SC: O(1)
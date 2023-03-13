const LinkedList = require('../implementation/Linkedlist')

const printLL = head => {
    let curr = head
    let str = ""
    while(curr){
        str += curr.val + " -> " ;
        curr = curr.next;
    }
    str += "null"
    console.log(str)
}
const reverseLL = head => {
    let prev = null
    let curr = head
    let nxt = curr ? curr.next : null
    while(curr){
        curr.next = prev
        prev = curr
        curr = nxt
        nxt = nxt ? nxt.next : null
    }
    head = prev
    return head
}

let ll = new LinkedList([1,2,3,4,5])
ll.print()
revHead = reverseLL(ll.head)
printLL(revHead) // 5 -> 4 -> 3 -> 2 -> 1 -> null 
// TC : O(n)
// SC : O(1)
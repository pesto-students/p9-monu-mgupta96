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

const length = head => {
    let count = 0
    while(head){
        head = head.next
        count++
    }
    return count
}

// Left rotation is happening here
const rotateKElements = (head, k) => {
    const l = length(head)
    k = k%l
    if(head == null || k<=0 || k==l){
        return head
    }
    let secondlast = head
    let curr = head
    while(k>1){
        curr = curr.next
        k--
    }
    let newHead = curr.next
    head = newHead
    while(newHead && newHead.next){
        newHead = newHead.next
    }
    newHead.next = secondlast
    curr.next = null
    return head
}
// EXAMPLE 1:
let ll = new LinkedList([2, 4, 7, 8, 9])
printLL(ll.head) // 2 -> 4 -> 7 -> 8 -> 9 -> null
head = rotateKElements(ll.head, 3)
printLL(head) // 8 -> 9 -> 2 -> 4 -> 7 -> null


// EXAMPLE 2:
let ll2 = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8])
printLL(ll2.head) //1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> null
let head2 = rotateKElements(ll2.head, 4)
printLL(head2) // 5 -> 6 -> 7 -> 8 -> 1 -> 2 -> 3 -> 4 -> null

// TC : O(n) => n is length of linkedlist
// SC : O(1)
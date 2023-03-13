// #REVERSE LINKED LIST
class Node{
    constructor(val){
        if(val)
            this.val = val
        else    
            throw "Value should be provided"
        this.next = null
    }
}

class LinkedList{
    constructor(val=null){
        if (typeof val == 'number'){
            if(val)
                this.head = new Node(val)
            else
                this.head = null
                this.size = 0
        }
        if (toString.call(val) == '[object Array]'){
            for(let i of val){
                this.add(i)
            }
        }
    }

    add(val){
        let newNode = new Node(val)
        if(this.head == null){
            this.head = newNode
        }else{

            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode

        }
        this.size++
    }
    delete(){
        if(this.head == null){
            return
        }
        if(this.head.next == null){
            this.head = null
            return 
        }
        let curr = this.head
        while(curr.next.next){
            curr = curr.next
        }
        curr.next = null
        this.size--
    }
    print(){
        let curr = this.head
        let str = ""
        while(curr){
            str += curr.val + " -> " ;
            curr = curr.next;
        }
        str += "null"
        console.log(str)
    }
    fromArray(arr){
        let ls = new LinkedList()
        for(let i of arr){
            ls.add(i)
        }
        return ls
    }
}

module.exports = LinkedList

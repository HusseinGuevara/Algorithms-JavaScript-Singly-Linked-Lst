class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
    }
}

var list = new SinglyLinkedList();
list.push("How")
list.push("Are")
list.push("You")
list.push("Doing?")
console.log(list.head.next.next)

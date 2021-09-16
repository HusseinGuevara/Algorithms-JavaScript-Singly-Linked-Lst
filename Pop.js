class Node{
    constructor(val) {
        this.val = val;
        this.next = 0;
    }
}
class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
    }
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;

        }
    }
    pop() {
        if(!this.head) return null;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}
var list = new SinglyLinkedList();
list.push("1")
list.push("2")
list.push("3")
list.push("4")
// list.traverse();
list.pop();
// list.traverse();
list.pop();
list.pop();
list.pop();
list.traverse();
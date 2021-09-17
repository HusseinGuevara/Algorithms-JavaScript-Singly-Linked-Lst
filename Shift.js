class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

    }
    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next
        this.length--;
        return currentHead;
    }
}
var list = new SinglyLinkedList();

list.push("One");
list.push("Two");
list.push("Three");
console.log(list.head)
list.shift();
list.shift();
console.log(list.head);
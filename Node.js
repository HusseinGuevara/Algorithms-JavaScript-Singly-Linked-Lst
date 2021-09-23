class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
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
        //  Both variables are the same value at first
        var current = this.head;
        var newTail = current;
        if(!this.head) return null;
        //  While there is a current.next continue the loop
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        //  Set this.tail to equal newTail
        this.tail = newTail;
        //  Remove this.tail.next 
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        // Store the first head 
        if(!this.head) return undefined;
        var currentHead = this.head;
        //  Make this.head equal current.next to remove the first head
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        var currentHead = this.head;
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.head = newNode;
            this.head.next = currentHead;
        }
        this.length++;
        return this; 
    }
}
var list = new SinglyLinkedList();
list.push("Frankie");
list.push("Hussein");
list.push("Chloe");
list.push("Brianna");
// list.pop();
// list.traverse();
list.shift();
list.shift();
list.unshift("Cerina");
list.unshift("Andrea");
list.traverse();

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
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    get(idx) {
        if(idx < 0 || idx >= this.length ) return null;
        var counter = 0;
        var current = this.head;
        while(counter !==idx) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(idx, val) {
        var foundNode = this.get(idx);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

}
var list = new SinglyLinkedList();

list.push("Hussein");
list.push("Frankie");
list.push("Lupe");
list.set(1, "Chloe");
console.log(list.get(1));

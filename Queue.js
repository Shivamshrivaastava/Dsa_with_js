// A queue is an object that allows :-
// Enqueue: Add an element to the end of the queue
// Dequeue: Remove an element from the front of the queue
// IsEmpty: Check if the queue is empty
// IsFull: Check if the queue is full
// top/Peek: Get the value of the front of the queue without removing it

class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
        return item + 'inserted';
    }
    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
       this.frontIndex++;
       return item; 
    }
    peek() {
        return this.items[this.frontIndex];

    }

    get printQueue() {
        return this.items;
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
  const queue = new Queue()
    console.log(queue.enqueue(7))
    console.log(queue.enqueue(2))
    console.log(queue.enqueue(6))
    console.log(queue.enqueue(4))
    console.log(queue.dequeue())
    console.log(queue.peek())
    var str = queue.printQueue;
    console.log(str)
// Stack is a linear data structure in which insertion and deletion are done at one end this end is generally called the top.
// It works on the principle of Last In First Out (LIFO) or First in Last out (FILO). LIFO means the last element inserted inside the stack is removed first. FILO means, the last inserted element is available first and is the first one to be deleted.

// Operations in a Stack:
// Push: Add an element to the top of a stack
// Pop: Remove an element from the top of a stack
// IsEmpty: Check if the stack is empty
// IsFull: Check if the stack is full
// top/Peek: Get the value of the top element without removing it

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0) return "underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}
// creating object for stack class
var stack = new Stack();

// testing isEmpty and pop on an empty stack

// returns false
console.log(stack.isEmpty());

console.log(stack.pop());
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());
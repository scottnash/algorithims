// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(){
    this.data = new Stack();
  }

  add( item ){
    this.data.push( item );
  }

  fillStack( fromStack, toStack ) {
    while( fromStack.peek() ){
      toStack.push( fromStack.pop() );
    }
  }

  remove() {
    let tempData = new Stack();
    this.fillStack( this.data, tempData );

    let returnValue = tempData.pop();

    this.fillStack( tempData, this.data );

    return returnValue;
  }

  peek() {
    let tempData = new Stack();
    this.fillStack( this.data, tempData );

    let returnValue = tempData.peek();

    this.fillStack( tempData, this.data );

    return returnValue;
  }
}

module.exports = Queue;

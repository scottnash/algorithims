// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor( data, next = null ) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst( data ) {
    this.head = new Node( data, this.head );
  }

  size( node = this.head, count = 0 ){
    if( !node ) {
      return count;
    }

    count++;
    return this.size( node.next, count );
  }

  getFirst(){
    return this.head;
  }

  getLast( node = this.head ){
    if(!node || !node.next){
      return node;
    }

    return this.getLast(node.next);
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if(this.head){
      this.head = this.head.next;
    }
    return;
  }

  removeLast(){
    if( !this.head || !this.head.next) {
      this.head = null;
    } else {
      let node = this.head;
      let prevNode;
      while( node.next ){
        prevNode = node;
        node = node.next;
      }
      prevNode.next = null;
    }
  }

  insertLast( data ) {
    if( !this.head ) {
      this.insertFirst( data );
    } else {
      this.getLast().next = new Node( data );
    }
  }

  getAt( index ) {
    let node = this.head;
    let counter = 0;

    while( counter < index && node ){
      node = node.next;
      counter++;
    }

    if(counter < index){
      return null;
    }
    return node;
  }

  removeAt( index ) {
    if( !this.head ) {
      return;
    }

    if( index === 0 ) {
      this.head = this.head.next;
      return;
    }

    let previousNode = this.getAt( index - 1 );
    if( !previousNode || !previousNode.next ){
      return;
    }
    previousNode.next = previousNode.next.next;
  }

  insertAt( data, index ){
    let newNode = new Node(data);

    if( !this.head || index === 0 ) {
      this.insertFirst( data );
      return;
    }

    let previousNode = this.getAt( index - 1 ) || this.getLast();

    previousNode.next = new Node( data, previousNode.next );
  }

  forEach( fn ) {
    let node = this.head;

    while( node ) {
        fn(node);
        node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

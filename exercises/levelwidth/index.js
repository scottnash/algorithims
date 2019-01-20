// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [ root, 's' ];
  const arrayCounter = [ 0 ];
  while( arr.length > 1 ) {
    const node = arr.shift();
    if( node === 's' ) {
      arr.push( node );
      arrayCounter.push(0);
    } else if( node.children ) {
      arr.push( ...node.children );
      arrayCounter[ arrayCounter.length - 1 ]++;
    }
  }

  return arrayCounter;
}

module.exports = levelWidth;

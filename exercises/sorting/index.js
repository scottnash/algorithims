// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  arr.forEach( (element, outerIndex) => {
    for( let index = 0; index < arr.length - outerIndex; index++ ) {
      if( arr[index] > arr[index + 1] ){
        let tempVar = arr[index + 1];
        arr[index+1] = arr[index];
        arr[index] = tempVar;
      }
    }
  });

  return arr;
}

function selectionSort(arr) {
  for( let outerIndex = 0; outerIndex < arr.length; outerIndex++ ) {
    let indexOfMin = outerIndex;

    for( let innerIndex = outerIndex + 1; innerIndex < arr.length; innerIndex++ ) {
      if( arr[innerIndex] < arr[indexOfMin] ) {
        indexOfMin = innerIndex;
      }
    }

    if( indexOfMin !== outerIndex ){
      let tempVar = arr[outerIndex];
      arr[outerIndex] = arr[indexOfMin];
      arr[indexOfMin] = tempVar;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if( arr.length === 1 ) {
    return arr;
  }

  const center = Math.floor( arr.length /2 );
  const left = arr.slice( 0, center );
  const right = arr.slice( center );

  return merge( mergeSort(left), mergeSort(right) );
}

function merge(left, right) {
  let results = [];

  while( left.length && right.length ) {
    if( left[0] < right[0] ) {
      results.push( left.shift() );
    } else {
      results.push( right.shift() );
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

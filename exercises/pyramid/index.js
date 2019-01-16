// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let cols = n * 2 - 1;
  let midPoint = Math.floor(cols/2);

  for( let x = 0; x < n; x++ ) {
    let step = "";
    for( let y = 0; y < cols; y ++ ) {
      if( midPoint - x <= y && midPoint + x >= y){
        step +="#";
      } else {
        step +=" ";
      }

    }
    console.log( step );
  }
}

module.exports = pyramid;

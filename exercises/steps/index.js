// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const getSpaces = ( string, strLength ) => {
  let spaces = "";
  for( let x = string.length; x < strLength; x++ ) {
    spaces += " ";
  }

  return string + spaces;
}

function steps(n) {
  let step = "#"
  for( x = 1; x <= n; x++ ){
    let y = 1;
    let string = "";
    while(y <= x){
      string+=step;
      y++;
    }
    console.log(getSpaces( string, n ));
  }
}

module.exports = steps;

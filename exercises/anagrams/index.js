// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const getCharMap = ( string ) => {
  charMap = {};

  for( let letter of string ){
    if( charMap[letter] ) {
      charMap[letter]++;
    } else {
      charMap[letter] = 1;
    }
  }

  return charMap;
}


function anagrams(stringA, stringB) {
  let lettersA = stringA.replace(/[^\w]/g, '').toLowerCase();
  let lettersB = stringB.replace(/[^\w]/g, '').toLowerCase();

  if( lettersA.length !== lettersB.length ) {
    return false;
  }

  const lettersAObject = getCharMap( lettersA );
  const lettersBObject = getCharMap( lettersB );

  return Object.keys( lettersAObject ).every( letter => lettersAObject[letter] === lettersBObject[letter] );
}

module.exports = anagrams;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reduce( ( rev, char )=> char + rev, '');
}

module.exports = reverse;


// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   let reversed = '';
//   [...str].forEach( char => {
//     reversed = char + reversed;
//   });
//
//   return reversed;
// }

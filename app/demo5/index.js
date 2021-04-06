// const snake = function(word){
//   return word.toLowerCase().replace(/\s+/ig, '_');
// }

import { compose } from 'ramda'

var initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '))

console.log(initials('hunter stockton thompson'))

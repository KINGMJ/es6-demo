//1. pipeline 管道操作

const capitalize = (input) => input[0].toUpperCase() + input.substring(1)
const removeSpaces = (input) => input.trim()
const repeat = (input) => `${input}, ${input}`


const withoutPipe = repeat(capitalize(removeSpaces('  i am gods  ')))
console.log(withoutPipe)

const withPipe = '  i am gods  '
  |> removeSpaces
  |> capitalize
  |> repeat

console.log(withPipe)


//2. String.trimStart() & String.trimEnd()
const greeting = '  Hello World!  '
console.log(greeting.trimEnd())
console.log(greeting.trimStart())
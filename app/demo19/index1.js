const hello = async function () {
  return 'hello'
}

console.log(hello()) // Promise

hello().then(res => console.log(res)) // hello

async function myFetch() {
  const res = await fetch('coffee.jpg')
  console.log(res)
}

myFetch()

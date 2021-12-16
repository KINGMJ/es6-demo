/**
 * 一个完整的 fetch API 操作，api 使用的网易云音乐的api
 */
const api = 'http://localhost:3000/top/playlist?limit=1'
const fetchPromise = fetch(api)

// fetch 返回的是一个Promise 对象
console.log(fetchPromise)

fetchPromise
  .then(res => {
    // 返回的是一个 Response 对象
    console.log(res)
    //如果返回的HTTP状态码在200 - 299 之间，ok为true
    if (res.ok) {
      const json = res.json()
      // json 也是一个Promise 对象
      console.log(json)
      return json
    }
  })
  .then(data => {
    //最终的数据
    console.log(data)
  })

  .catch(err => {
    console.log(err)
  })

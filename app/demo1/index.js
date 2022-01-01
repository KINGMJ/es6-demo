//vue响应式实现
function defineReactive(data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function defineGet() {
      console.log(`get key: ${key}，value: ${value}`)
      return value
    },
    set: function defineSet(newVal) {
      console.log(`set key: ${key}，value: ${newVal}`)
      value = newVal
    },
  })
}

function observe(data) {
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key])
  })
}

//监听数组的变化
function test1() {
  let arr = [1, 2, 3]
  observe(arr)

  //arr[1] = 4 //数组项复制，支持
  //arr.splice(3, 0, 4)  //数组增加元素，不支持
  //arr.splice(0, 1)     //删除元素，支持
  arr.push(4)            //增加元素，不支持
}

//监测对象的变化
function test2() {
  let obj = { name: 'jack', age: 18 }
  observe(obj)

  obj.name = 'rose' //修改对象属性值，支持
  obj.sex = 'male' //新增属性，不支持
}

test1()

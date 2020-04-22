test2();



function test1() {
    const object1 = {};

    Object.defineProperty(object1, 'property1', {
        value: 42,
        writable: false
    });

    object1.property1 = 77;
    // throws an error in strict mode

    console.log(object1.property1);
    // expected output: 42
}

function test2() {
    let arr = [1, 2, 3]
    observe(arr)
    console.log(arr)
    //arr[1] = 4;
    //arr.splice(3, 0, 4)
    //arr.push(4)
    arr.splice(6)
}

function test3() {
    let obj = { name: 'jack', age: 18 }
    observe(obj)
    console.log(obj)
    //obj.name = 'rose'
    obj.sex = 'male'
}

function defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function defineGet() {
            console.log(`get key: ${key} value: ${value}`)
            return value
        },
        set: function defineSet(newVal) {
            console.log(`set key: ${key} value: ${newVal}`)
            value = newVal
        }
    })
}

function observe(data) {
    Object.keys(data).forEach(function (key) {
        defineReactive(data, key, data[key])
    })
}
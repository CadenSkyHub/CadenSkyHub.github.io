# Promise

`ECMAScript 6` 特性

异步编程

语法上 `Promise` 是一个构造函数，用来封装异一个一步操作并可以获取其成功或失败的结果

> [!tip] 提示
>
> `Promise` 分别有三个状态
>
> - 进行中，初始化（pending）
> - 成功：异步任务成功的状态（fulfilled）通过 `.then` 的第一个回调参数获取数据
> - 失败：异步任务失败的状态（rejected）通过 `.then` 的第二个回调参数获取数据或 `.catch` 获取

## 初始化

`Promise` 实例化时接收一个函数

这个函数有两个形参，一个为成功，一个为失败

- 形参名称随意
- 形参位置不可调换
    - 第一个为成功，通过第一个回调函数存储的数据为 `成功`
    - 第二个为失败，通过第二个回调参数存储的数据为 `失败`


``` javascript
const pr = new Promise((resolve, reject) => {})	 // 此时 Promise 为初始化状态
```

**模拟创建一个异步任务**

```javascript
const age = 18
const pr = new Promise((resolve, reject) => {
    // 异步任务
    setTimeout(() => {
        if (age >= 18) {
            resolve('成功') // 此时，将 Promise 状态更改为了 成功
        } else {
            reject('失败') // 此时，将 Promise 状态更改为了 失败
        }
    }, 1000)
})
```



## .then

**获取 `Promise` 执行结果**

通过 `.then` 获取 `Promise` 异步任务执行结果

- `.then` 接收两个函数参数，第一个为异步任务成功回调，第二个为异步任务失败回调
- 成功回调接收一个参数，为 `Promise` 成功后返回的结果
- 成功回调接收一个参数，为 `Promise` 成功后返回的结果

> [!note] 提示
>
> `.then` 其实也可以只传一个函数形参，只用来接收成功结果。
>
> 然后通过 `.catch` 来只接收失败结果。

``` javascript
const age = 18
const pr = new Promise((resolve, reject) => {
    // 异步任务
    setTimeout(() => {
        if (age >= 18) {
            resolve('成功') // 此时，将 Promise 状态更改为了 成功
        } else {
            reject('失败') // 此时，将 Promise 状态更改为了 失败
        }
    }, 1000)
})

pr.then((result) => {	// [!code focus:5]
    console.log(result)	// 成功
}, (err) => {
    console.log(err)
})
```



## .catch

通过 `.catch` 获取 `Promise` 异步任务 **执行失败** 结果

- `.catch` 只接收一个函数参数，
- 接收一个参数，为 `Promise` 失败后返回的结果

```javascript
const age = 12
const pr = new Promise((resolve, reject) => {
    // 异步任务
    setTimeout(() => {
        if (age >= 18) {
            resolve('成功') // 此时，将 Promise 状态更改为了 成功
        } else {
            reject('失败') // 此时，将 Promise 状态更改为了 失败
        }
    }, 1000)
})

pr.catch((err) => {	// [!code focus:3]
    console.log(err)	// 失败
})
```







## .finally()

`finally()` 不管是 `then` 还是 `catch`，都会被执行

常用于无论成功还是失败都执行的代码

> [!caution] 注意
>
> `finally()` 传入的回调函数没有任何返回值

```javascript {18}
const age = 12
const pr = new Promise((resolve, reject) => {
    // 异步任务
    setTimeout(() => {
        if (age >= 18) {
            resolve('成功') // 此时，将 Promise 状态更改为了 成功
        } else {
            reject('失败') // 此时，将 Promise 状态更改为了 失败
        }
    }, 1000)
})

pr.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('我不管是 then 还是 catch，我都会被执行')
})
```



## 链式调用

`.then()` `.catch()` `.finally()` 返回的都是一个 `Promise` 对象，也可以通过 `.then` 来调取成功结果

```javascript {5-13}
const pr = new Promise((resolve, reject) => {
    resolve('yes')
})

pr.then(res => {
    // console.log(res)
    return res
}).then(res => {
    // console.log(res)
    return res
}).then(res => {
    console.log(res)	// yes
    return res
}).catch(err =>{
    console.log(err)
}).finlly(()=>{
    console.log(123)
})
```



**示例**

```javascript
const compute = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a + b)
    })
}

compute(1, 2).then(res => {
    console.log(res)    // 3
    return compute(res, 3)
}).then(res => {
    console.log(res)    // 6
    return compute(res, 3)
}).then(res => {
    console.log(res)    // 9
}).finally(() => {
    console.log('我是拿不到任何值的哦~')
})
```

## 示例

**用 `Promise` 封装一个请求**

```html
<script>
    /*
    * 封装一个 AJAX 请求
    * 请求 https://api.apiopen.top/api/sentences 获取一条名言
    * */

    const getSentence = new Promise((resolve, reject) => {
        const xmr = new XMLHttpRequest()
        const url = 'https://api.apiopen.top/api/sentences'
        xmr.open('GET', url)    // 初始化
        xmr.send()  // 发送
        // 绑定事件，处理响应结果
        xmr.onreadystatechange = () => {
            if (xmr.readyState === 4) {
                xmr.status >= 200 && xmr.status < 299 ? // 判断请求结果
                        resolve(xmr.response) :
                        reject(new Error('请求失败'))
            }
        }
    })

    
    getSentence.then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
    
    console.log(123)
    
    /*
    * 先输出的 123
    * 因为 Promise 是异步，请求是耗时操作
    * */
</script>
```





## 静态方法

### 立即执行

### .resolve()

`Promise.resolve()`

创建一个立即完成的 `Promise`

```javascript
Promise.resolve(12)
    .then(res => console.log(res))
```



### .reject()

`Promise.reject()`

创建一个立即拒绝的 `Promise`

```javascript
Promise.reject('err')
    .catch(err => console.log(err))
```



## .all

`Promise.all([...])`

同时返回多个 `Promise` 的执行结果

- 返回一个数组
- 要么都返回
- 有一个报错，就全部报错

```javascript
const sum = (a, b) => {
    return Promise.resolve(a + b)
}

Promise.all([	// [!code focus:7]
    sum(1, 2),
    sum(1, 3),
    sum(1, 4)
]).then(res => {
    console.log(res)    // [ 3, 4, 5 ]
})
```



## .allSettled

`Promise.allSettled([...])`

同时返回多个 `Promise` 的执行结果

- 返回一个对象，对象中包含 `status` 为执行状态，`value` 为执行结果
- 无论成功与失败，都会返回执行结果

```javascript
const sum = (a, b) => {
    return Promise.resolve(a + b)
}

Promise.allSettled([	// [!code focus:8]
    sum(1, 2),
    sum(1, 3),
    Promise.reject('err'),	// [!code ++]
    sum(1, 4)
]).then(res => {
    console.log(res)
})

/*
* [
  { status: 'fulfilled', value: 3 },
  { status:'fulfilled', value: 4 },
  { status: 'rejected', reason: 'err' },
  { status: 'fulfilled', value: 5 }
]
* */
```



## .race

`Promise.race([...])`

返回执行最快的 `Promise` 结果

- 无论是成功还是失败，都返回执行最快的。不考虑对错
- 通过 `.then` 获取未失败
- 通过 `.catch` 捕获失败

```javascript
Promise.race([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject('err'),
    Promise.reject('1')
])
    .then(res => console.log(res))
    .catch(err => console.log(err))

/*
* 1
* 因为都是立即执行，所以... 第一个最快
* */
```



## .any

`Promise.any([...])`

返回执行最快的 `Promise` 结果

- 只获取最快成功的结果
- 通过 `.then` 获取最快成功的结果
- 如果全部都执行失败，则通过 `.catch` 开捕获失败

```javascript
Promise.any([
    Promise.reject('err'),
    Promise.reject('1'),
    Promise.resolve(1),
    Promise.resolve(2)
])
    .then(res => console.log(res))
    .catch(err => console.log(err))

/*
* 1
* 因为都是立即执行
* 且 使用的 any，只捕获成功的，所以返回的是 1
* */
```




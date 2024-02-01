# Promise

`ECMAScript 6` 特性

异步编程

语法上 `Promise` 是一个构造函数，用来封装异一个一步操作并可以获取其成功或失败的结果

> [!tip] 提示
>
> `Promise` 分别有三个状态
>
> - 初始化：构造时的状态（pending）
> - 成功：异步任务成功的状态（fulfilled）
> - 失败：异步任务失败的状态（rejected）

## 初始化

`Promise` 实例化时接收一个函数

这个函数有两个形参，一个为成功，一个为失败

- 形参名称随意
- 形参位置不可调换，第一个为成功，第二个为失败

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



### 链式调用

`.then()` 返回的也是一个 `Promise` 对象，也可以通过 `.then` 来调取成功结果

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



## .then().catch()

通过 `链式调用` 可以清晰的接收 `Promise` 成功与失败的结果

``` javascript
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

pr.then((result) => {	// [!code focus:5]
    console.log(result)
}).catch((err) => {
    console.log(err)
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

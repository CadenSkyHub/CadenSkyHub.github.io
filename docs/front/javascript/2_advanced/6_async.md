# async

`ECMAScript 8` 特性



## anync 函数

1. `async` 返回的是一个 `Promise` 对象
2. `promise` 对象的结果，是由 `async` 函数执行的返回值来决定的



## await 表达式

1. `await` 必须写在 `async` 函数中
2. `await` 右侧的表达式一般为 `promise` 对象
3. `await` 返回的是 `promise` 成功的值
4. `await` 的 `promise` 失败了，就会抛出异常，需要通过 `try...catch` 捕获处理


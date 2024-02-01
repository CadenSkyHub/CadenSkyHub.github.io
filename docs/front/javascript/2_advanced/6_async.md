# async

`ECMAScript 8` 特性



## anync 函数

`async` 函数返回的是一个 `Promise` 对象

- 可以通过 `.then` 获取成功结果
- 可以通过`.catch` 获取失败结果

```javascript {4}
const asFn = async () => { // [!code focus:3]
    return '1'
}
console.log(asFn()) // Promise{<fulfilled>: '1'}

// 调用
asFn().then(r => console.log(r))	// 1
    .catch(e => console.log(e))
```



## await 表达式

> [!note] 注意
>
> 如果 `async` 函数不用 `await` 那么，该函数与普通函数没区别，只是返回了一个 `Promise`

1. `await` 必须写在 `async` 函数中
2. `await` 右侧的表达式一般为 `promise` 对象
3. `await` 返回的是 `promise` 成功的值
4. `await` 的 `promise` 失败了，就会抛出异常，需要通过 `try...catch` 捕获处理




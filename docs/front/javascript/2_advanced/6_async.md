# async

`ECMAScript 8` 特性



## anync 函数

`async` 函数返回的是一个 `Promise` 对象

```html {5}
<script>
    const asFn = async () => { // [!code focus:3]
        return '1'
    }
    console.log(asFn()) // Promise{<fulfilled>: '1'}
</script>
```



## await 表达式

1. `await` 必须写在 `async` 函数中
2. `await` 右侧的表达式一般为 `promise` 对象
3. `await` 返回的是 `promise` 成功的值
4. `await` 的 `promise` 失败了，就会抛出异常，需要通过 `try...catch` 捕获处理

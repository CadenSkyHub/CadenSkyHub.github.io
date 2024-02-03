# 响应

## send

`res.send()`

参数可以是对象、对象、对象或 . 例如：`body``Buffer``String``Boolean``Array`

> `send` 发送的是直接在页面展示的内容

``` javascript
res.send(Buffer.from('whoop'))
res.send({ some: 'json' })
res.send('<p>some html</p>')
res.status(404).send('Sorry, we cannot find that!')
res.status(500).send({ error: 'something blew up' })
```





## jsonp

`res.jsonp()`

``` javascript
res.jsonp(null)
// => callback(null)

res.jsonp({ user: 'tobi' })
// => callback({ "user": "tobi" })

res.status(500).jsonp({ error: 'message' })
// => callback({ "error": "message" })
```





## 响应重定向

> [!warning] 警告
>
> 在 `api` 中不适用

``` javascript
res.redirect('/foo/bar')
res.redirect('http://example.com')
res.redirect(301, 'http://example.com')
res.redirect('../login')
```





## 状态码

设置响应的 HTTP 状态。

``` javascript
res.status(403).end()
res.status(400).jsonp({'err':'bad request'})
```







## 响应头

### 设置响应头

**res.set**

- 传入字符串设置单个响应头
- 传入对象设置多个响应头
- `value` 可传入数组

**res.setHeader**

- 只可传入字符串，设置单个响应头
- `value` 可传入数组



::: code-group

```javascript [set]
res.set({'Key': 'value', 'object-key': 'object-value'})
res.set('stringKey', 'stringValue')  // 设置单个
```



``` javascript [setHeader]
res.setHeader('setHeaderKey', 'setHeaderValue') // 设置单个
```

:::

### 设置或追加响应头

将指定的值追加到 `HTTP` 响应标头字段。

- 如果尚未设置标头，则创建具有指定值的标头。
- 只可设置单个
- `value` 参数可以是字符串或数组

> [!warning] 注意
>
> 在 `res.append（）` 之后调用 `res.set（）` 将重置之前设置的标头值。

``` javascript
res.append('append-key', 'appendValue')
```


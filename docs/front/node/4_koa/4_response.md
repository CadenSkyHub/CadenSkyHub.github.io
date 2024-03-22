# 响应

相关文档：[Koa 响应](https://koa.bootcss.com/index.html#response)

相关文档：[响应(Response)](https://www.koajs.net/api/response)



## 响应

### 状态码

``` typescript
ctx.response.status = 20
```

### 状态信息

> [!warning] 注意
>
> 不可设置中文，否则报错

``` type
ctx.response.message = 'Yes it is OK'
```



### 响应

``` typescript
response.body = Anything
```

Anything:

- `string` 响应字符串
- `Buffer` 响应 `Buffer` 格式
- `Stream` 管道
- `Object` || `Array` JSON-字符串化，如果为 对象或数组，则直接转为 `Json`
- `null` 无内容响应







## 响应头

### 设置响应头

``` typescript
ctx.response.set('a', 'b')	// 设置单个
ctx.response.set('c', ['aa', 'bb', 'cc'])	// 可设置同 key 多个
```



### 判断响应头

存在：`true`

不存在：`false`

``` typescript
ctx.response.has('X-RateLimit-Limit');
```




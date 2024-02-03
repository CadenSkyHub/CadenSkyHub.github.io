# 请求

## 常用方法

```javascript
{
    '路径': req.path,
    '根域名': req.hostname,
    '完整的原始请求路径及参数':req.originalUrl,  // 可获取到完整路径，包含 .use 挂载的路径
    '相对于服务器根目录的请求路径及参数': req.url,
    '路由的基础路径': req.baseUrl,   // 可获取到完整路径，包含 .use 挂载的路径。但是不包含 路径参数
    'IP': req.ip,
    '请求方法': req.method,
    '查询参数': req.query,
    "路径参数":req.params,
    '请求体参数': req.params
}
```



## 查询参数

`http://0.0.0.0:3000/app?name=123&age`

- `req.query` 得到一个对象
- 如果获取对象中的值不存在，则返回 `undefined`

::: code-group

```javascript [获取]
res.jsonp({
    '查询参数': req.query,
})
```



``` json [结果]
{
    "查询参数": {
        "name": "123",
        "age": ""
    }
}
```

:::





## 路径参数

获取路径参数

- `req.params` 得到一个对象
- 得到的结果均为 `string` 类型
- 如果获取对象中的值不存在，则返回 `undefined`

::: code-group

```javascript [获取]
res.jsonp({
    "路径参数": req.params,
})
```

``` json [结果]
{
    "路径参数": {
    	"id": "1"
    }
}
```

:::





## 请求体参数

> [!tip] 小贴士
>
> 由于 `请求体参数` 是不受信任的，所以在接收前，应该应用一下中间件



``` javascript {5-6}
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
```



获取请求体参数

- `req.body` 获取到一个对象
- 如果获取对象中的值不存在，则得到 `undefined`



::: code-group

``` javascript [获取]
console.log(req.body)
console.log(req.params)
res.jsonp({
    "路径参数": req.params,
    "请求体参数": req.body,
})
```



``` json [结果]
{
    "路径参数": {
    	"id": "1"
    },
    "请求体参数": {
    	"name": "张三"
    }
}
```

:::



## 请求头

**req.headers**

- 返回一个对象

**req.get**

返回一个请求头内容

- 如果不存在，则返回 `undefined`
- 不区分大小写

::: code-group

``` javascript [获取全部]
req.headers	// [!code focus]

/*
{
  host: '0.0.0.0:3000',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0',
  accept: '*\/*',
  'accept-encoding': 'gzip, deflate',
  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
  connection: 'close',
  dnt: '1',
  'if-none-match': 'W/"186-2cWSZVz0e6vj18X3JUFZBntQBq8"'
}
*/
```



``` javascript [获取单个]
console.log(req.get('host'))
console.log(req.get('noHead'))

/*
0.0.0.0:3000
undefined
*/
```

:::

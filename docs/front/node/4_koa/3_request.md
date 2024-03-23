# 请求

相关文档：[Koa 请求](https://koa.bootcss.com/index.html#request)

相关文档：[请求(Request) ](https://www.koajs.net/api/request)

## 查询参数

`http://127.0.0.1:3000?a=b&c=d`

> [!tip] TIP
>
> 如果获取不到为：`undefined`

``` typescript
ctx.query		// { a: 'b', c: 'd' }
ctx.query['a']	// b
ctx.query.a		// b

ctx.querystring	// a=b&c=d
```



## 路径参数

``` typescript
router.get('/:id/:name', async (ctx: Koa.ExtendableContext) => {
    console.log(ctx.params)
    console.log(ctx.params['id'])
})
```

`http://127.0.0.1:3000/1/张三`

> [!tip] TIP
>
> 如果获取不到为：`undefined`

``` typescript
ctx.params			// {"id": "1","name": "张三"} 
ctx.params['id']	// 1
ctx.params.id		// 1
```



## 请求体参数

> [!important] 重要
>
> 需要安装插件 `koa-bodyparser`
>
> 相关文档：[koa-bodyparser ](https://www.npmjs.com/package/koa-bodyparser)
>
> ``` bash
> npm install koa-bodyparser
> npm install @types/koa-bodyparser -D
> ```

### 使用

``` typescript
import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'		// [!code ++]

const app = new Koa()
const router = new Router()

app
   .use(bodyParser())		// [!code ++]
   .use(router.routes())


router.post('/', async (ctx: Koa.ExtendableContext) => {	// post | put | delete | patch
    console.log(ctx.request.body)
})		

app.listen(3000, '0.0.0.0', () => {
    console.log('服务器启动成功')
})
```



### json

`content-type = application/json`

> [!tip] TIP
>
> 如果获取不到为：`{}` 空对象

::: code-group

``` typescript {5} [请求]
import axios from "axios";

axios.post('http://127.0.0.1:3000',
    { name: '张三', age: 12 },
    { headers: { "Content-Type": "application/json" } }
).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
})
```



``` typescript [解析]
ctx.request.body	// { name: '张三', age: 12 }
```

:::





### Form-data

`content-type = application/x-www-form-urlencoded`

> [!tip] TIP
>
> 如果获取不到为：`{}` 空对象



::: code-group

``` typescript {5} [请求]
import axios from "axios";

axios.post('http://127.0.0.1:3000',
    { name: '张三', age: 12 },
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
})
```



``` typescript [解析]
ctx.request.body	// { name: '张三', age: '12' } 注意，这里得到的 12 是字符串类型
```

:::





## 请求头

> [!tip] TIP
>
> 如果获取不到为：`undefined`

### 获取请求头

::: code-group

```typescript [获取全部]
ctx.headers // 获取全部请求头	// [!code focus]

{
	"host": "127.0.0.1:3000",
    "connection": "keep-alive",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Microsoft Edge\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "dnt": "1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19042",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "sec-fetch-site": "none",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "document",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
}
```



``` typescript [获取单个]
ctx.headers["user-agent"]	// 第一种
ctx.get('user-agent')	// 第二种
```

:::


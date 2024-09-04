# 服务端

服务端由以下提供

- [Nitro 详细文档](https://nitro.unjs.io/)
- [H3 详细文档](https://h3.unjs.io/)

## 获取请求体

`post` 请求 `{a:1}`

```ts
export default defineEventHandler(async (ctx) => {
    const body = await readBody(ctx);
    console.log(body)		// {a:1}
    return body
})
```



## 获取查询参数

`get` 请求 `?a=3&b=4`

```ts
export default defineEventHandler(async (ctx) => {
    const query = getQuery(ctx)
    console.log(query)	// { a: '3', b: '4' }
    return query;
})
```



## 获取路径参数

服务器路由可以在文件名中使用方括号内的动态参数，如`/api/hello/[name].ts`，并通过`event.context.params`访问。

``` ts
export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name')

  return `Hello, ${name}!`
})
```



## 获取ip

先这样，具体不知道服务器上能不能获取到

```ts
export default defineEventHandler(async (ctx) => {
    const ip = getRequestIP(ctx, {xForwardedFor: true})
    return {ip};
})
```



## 获取路径

```ts
export default defineEventHandler(async (ctx) => {
    console.log(getRequestURL(ctx).pathname)
})

/* output
{ 
    href: 'http://10.10.10.102:3000/api/cokbok',
    origin: 'http://10.10.10.102:3000',
    protocol: 'http:',
    username: '',
    password: '',
    host: '10.10.10.102:3000',
    hostname: '10.10.10.102',
    port: '3000',
    pathname: '/api/cokbok',
    search: '',
    searchParams: URLSearchParams {},
    hash: '' 
}
*/
```



## 自定义路由

`/api/cokbok/test`

```ts
const router = createRouter()

router.get('/test', defineEventHandler(async (ctx)=>{
    return {
        b:'b'
    }
}))

export default useBase('/api/cokbok', router.handler)
```



## 发送重定向

`/api/cokbok`

```ts
export default defineEventHandler(async (ctx) => {
    await sendRedirect(ctx, '/api/cokbok/test', 302)
})
```



## 状态码

`/api/cokbok`

```ts
export default defineEventHandler(async (ctx) => {
    setResponseStatus(ctx, 201)
    return {
        b: 1
    }
})
```



## 错误处理

如果没有抛出错误，将返回状态码`200 OK`。

任何未捕获的错误都将返回`500 Internal Server Error` HTTP错误。

要返回其他错误代码，请使用[`createError`](https://nuxt.com.cn/docs/api/utils/create-error)抛出异常：

```ts
export default defineEventHandler((event) => {
  const id = parseInt(event.context.params.id) as number

  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }
  return 'All good'
})

```



## 插件捕获错误

[插件 - Nitro (unjs.io)](https://nitro.unjs.io/guide/plugins#capturing-errors)

可以使用插件来捕获所有应用程序错误。

`/server/plugin/0-err.ts`

```ts
export default defineNitroPlugin((nitro) => {
    // error 为运行时钩子，具体所有钩子，请查看上方插件链接
    nitro.hooks.hook("error", async (error, { event }) => {
        console.error(`${event.path} Application error:`, error)
    });
})
```







## 中间件

Nuxt会自动读取`~/server/middleware`目录中的任何文件，以创建项目的服务器中间件。

中间件处理程序将在任何其他服务器路由之前在每个请求上运行，以添加或检查标头、记录请求或扩展事件的请求对象。

> [!tip] 提示
>
> 中间件处理程序不应返回任何内容（也不应关闭或响应请求），只能检查或扩展请求上下文或抛出错误。
>
> **执行顺序为文件排序顺序，可以通过 0.xxx、1.xxx 来进行命名**

示例

`server/middleware/log.ts`

``` ts
export default defineEventHandler((event) => {
  console.log('New request: ' + getRequestURL(event))
})
```

`server/middleware/auth.ts`

```ts
export default defineEventHandler((event) => {
  event.context.auth = { user: 123 }
})

// 获取
event.context.auth.user	// 123
```



## 指定路由中间件

中间件在每个请求上执行。

应用自定义逻辑以将它们的范围限定为特定条件。

例如，您可以使用 URL 将中间件应用于特定路由：

```ts
export default defineEventHandler((event) => {
  // 只会在 /auth 路由以及 /auth 子路由上执行
  if (getRequestURL(event).pathname.startsWith('/auth')) {
    event.context.user = { name: 'Nitro' }
  }
})
```



## 服务器插件

[Plugins - Nitro (unjs.io)](https://nitro.unjs.io/guide/plugins)

Nuxt会自动读取`~/server/plugins`目录中的任何文件，并将它们注册为`Nitro`插件。

这允许扩展`Nitro`的运行时行为并钩入生命周期事件。

`server/plugins/nitroPlugin.ts`

```ts
export default defineNitroPlugin((nitroApp) => {
  console.log('Nitro plugin', nitroApp)
})
```

## 缓存

[文档： 缓存 Nitro ](https://nitro.unjs.io/guide/cache#cached-event-handlers)

## 文件

[文档： 文件 Nitro](https://nitro.unjs.io/guide/assets)

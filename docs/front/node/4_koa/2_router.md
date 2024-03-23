# 路由



> [!important] 重要
>
> `koa` 没有内封 `router`，需要安装插件 `koa-router`
>
> 相关文档：[koa-router](https://www.npmjs.com/package/koa-router)
>
> ``` bash
> npm install @koa/router
> npm install @types/koa__router -D
> ```



## 使用

``` typescript {10-14}
import Koa from 'koa'
import Router from 'koa-router'	// [!code ++]

const app = new Koa()
const router = new Router()	// [!code ++]

// 注意这里使用的是 router.routers()
app.use(router.routes())	// [!code ++]

router.get('/', async (ctx: Koa.Context) => {
    ctx.body = {
        'path': ctx.request.path
    }
})

app.listen(3000, '0.0.0.0', () => {
    console.log('服务器启动成功')
})
```



## 拆分

::: code-group

``` typescript [main.ts]
import Koa from 'koa'
import routers from './router'

const app = new Koa()

app.use(routers.routes())	// [!code warning]

app.listen(3000, '0.0.0.0', () => {
    console.log('服务器启动成功')
})
```



``` typescript [router.ts]
import Router from "koa-router";
import publicRouter from "./publicRouter";

const routers = new Router()

routers.use(publicRouter.routes())	// [!code warning]

export default routers
```



``` typescript [publicRouter.ts]
import Router from "koa-router";
import Koa from 'koa'

const publicRouter = new Router().prefix('/public')	 // 或 new Router({prefix: '/public'})

publicRouter.get('/', async (ctx: Koa.Context) => { ctx.body = ctx.url })

export default publicRouter
```

:::


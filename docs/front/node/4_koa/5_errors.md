# 错误

## 统一处理错误

> [!important] 注意
>
> 一定要放到第一个中间件。这样才能捕捉到错误。

``` typescript {9-25}
import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import { log } from 'console'

const app = new Koa()
const router = new Router()

app.use(async (ctx: Koa.ExtendableContext, next: Koa.Next) => {
    try {
        await next()
        if (ctx.response.status === 404) {
            ctx.body = {
                'code': 4004,
                'message': '在这里捕捉 404 然后设置返回内容'
            }
        }
    } catch (e) {
        ctx.status = 500
        ctx.body = {
            'code': -1,
            'message': '统一捕捉的错误，也就是，所有的过程如果有错误，直接在这里就捕捉到了'
        }
    }
})

app
    .use(bodyParser())
    .use(router.routes())



router.get('/', async (ctx: Koa.ExtendableContext) => {
    ctx.status = 200
    ctx.body = {
        '1': '1'
    }
})

router.get('/a', async (ctx: Koa.ExtendableContext) => {
    ctx.throw(500, 'error')
})


app.listen(3000, '0.0.0.0', () => {
    console.log('服务器启动成功')
})
```


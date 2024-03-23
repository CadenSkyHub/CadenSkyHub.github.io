# 中间件

## 自定义中间件

```typescript {5-10,12-17}
import Koa from "koa";

const app = new Koa()

// 第一个自定义中间件
const one = async (ctx: Koa.ExtendableContext, next: Koa.Next) => {
    console.log('one-1')
    await next()
    console.log('one-2')
}

// 第二个自定义中间件
const two = async (ctx: Koa.ExtendableContext, next: Koa.Next) => {
    console.log('two-1')
    await next()
    console.log('two-2')
}

app
    .use(one)
    .use(two)
    .use(async (ctx: Koa.ExtendableContext) => {
    	ctx.response.body = '来试试自定义中间件'
	})


app.listen(3000)



/*
 * output
one-1
two-1
two-2
one-2
*/
```





## 其他中间件

### router

- 用法：[用法](./2_router)

- 相关文档：[@koa/router](https://www.npmjs.com/package/@koa/router)

``` npm
npm install @koa/router
npm install @types/koa__router -D
```



### body-parser

- 用法：[用法](./3_request#请求体参数)

- 相关文档：[koa-bodyparser ](https://www.npmjs.com/package/koa-bodyparser)

``` bash
npm install koa-bodyparser
npm install @types/koa-bodyparser -D
```



### cors



### file

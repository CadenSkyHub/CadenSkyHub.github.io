# 中间件

## 自定义中间件

```typescript {5-10,12-17}
import Koa from "koa";

const app = new Koa()

// 第一个自定义中间件
const one = async (ctx: Koa.Context, next: Koa.Next) => {
    console.log('one-1')
    await next()
    console.log('one-2')
}

// 第二个自定义中间件
const two = async (ctx: Koa.Context, next: Koa.Next) => {
    console.log('two-1')
    await next()
    console.log('two-2')
}

app
    .use(one)
    .use(two)
    .use(async (ctx: Koa.Context) => {
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

``` bash
npm install @koa/router
npm install @types/koa__router -D
```



### koa-body

- 用法：[用法](./6_file#设置静态目录)
- 相关文档：[koa-body - npm (npmjs.com)](https://www.npmjs.com/package/koa-body)
- 扩展文档：[扩展](https://github.com/node-formidable/formidable#filebegin)

```
npm install koa-static
npm i --save-dev @types/koa-static
```



### cors

- 相关文档：[@koa/cors - npm (npmjs.com)](https://www.npmjs.com/package/@koa/cors)

```
npm i @koa/cors
npm i @types/koa__cors
```

```typescript
import koa from 'koa';
import cors from "@koa/cors";

const app = new koa()

app.use(cors())
```

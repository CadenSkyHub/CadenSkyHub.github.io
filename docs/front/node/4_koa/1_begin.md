# koa

文档：[Koa (koajs) ](https://koa.bootcss.com/index.html#introduction)

::: details 常用中间件

- 路由

    ``` bash
    npm install @koa/router
    npm install @types/koa__router -D
    ```

- body

    ``` bash
    npm install koa-bodyparser
    npm install @types/koa-bodyparser -D
    ```


:::

## 安装

``` bash
npm install koa
npm install @types/koa -D
```



## 基本使用

```typescript
import Koa from 'koa'

const app = new Koa()

app.use(async (context:Koa.ExtendableContext) => {
    context.body = 'Hi'
})

app.listen(3000, '0.0.0.0', () => {
    console.log('服务器启动成功')
})
```

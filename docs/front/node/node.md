# PM2

官方文档：[PM2 - 文档 (keymetrics.io)](https://pm2.keymetrics.io/docs/usage/quick-start/)





---







# Zod

官方文档：[Zod](https://zod.dev/README_ZH)

官方GitHub：[Zod](https://github.com/colinhacks/zod/blob/HEAD/README_ZH.md#optional)

`Zod` 是一个以 `TypeScript` 为首的模式声明和验证库。我使用术语 "模式 "来广义地指任何数据类型，从简单的 `字符串` 到复杂的嵌套对象。



## 安装

``` bash
npm install zod
```



## 基本用法

::: code-group

```typescript [同步]
import {z} from 'zod'

// 创建一个字符串模式
const schema = z.string()

// 解析
console.log(schema.parse('Hi')) // => Hi
console.log(schema.parse(1))    // error	// [!code --]

// 安全解析，不会抛出错误
console.log(schema.safeParse('Hi')) // => { success: true, data: 'Hi' }
console.log(schema.safeParse(1))    // => { success: false, error: [Getter] }
```



```typescript [异步]
import {z} from 'zod'

// 创建一个字符串模式
const schema = z.string()

// 解析
schema.parseAsync('Hi')
    .then(value => console.log(value))
    .catch(reason => console.dir(reason))

// 安全解析
schema.safeParseAsync(1)
    .then(value => console.log(value))	

// 安全结果返回的不是正确就是错误，所以无需捕捉错误
```

:::



## 提取类型

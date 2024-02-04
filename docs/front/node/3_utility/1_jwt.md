# JsonWebToken

我们使用第三方来创建以及校验 `token`

包地址：[jsonwebtoken - npm](https://www.npmjs.com/package/jsonwebtoken)

`jsonwebtoken` 生成与校验有同步和异步方法，具体是是否传入 `callback` 函数来确认的



::: details 关于 token

- 用户在前端输入 `username` 与`password`，并点击**回车**
- （用户浏览器中运行的）前端把 `username` 与`password` 发送至 API 中指定的 URL（使用 `tokenUrl="token"` 声明）
- API 检查 `username` 与`password`，并用令牌（`Token`） 响应
- 令牌只是用于验证用户的字符串
- 一般来说，令牌会在一段时间后过期
  - 过时后，用户要再次登录
  - 这样一来，就算令牌被人窃取，风险也较低。因为它与永久密钥不同，**在绝大多数情况下**不会长期有效
- 前端临时将令牌存储在某个位置
- 用户点击前端，前往前端应用的其它部件
- 前端需要从 API 中提取更多数据：
  - 为指定的端点（Endpoint）进行身份验证
  - 因此，用 API 验证身份时，要发送值为 `Bearer` + 令牌的请求头 `Authorization`
  - 假如令牌为 `foobar`，`Authorization` 请求头就是： `Bearer foobar`

:::

## 生成

> [!important] 前置数据
>
> - `payload`：需要保存的数据
>
>   确保传入的是 **对象 或 json** 数据，其他数据会报错。记住，**不要存密码！**
>
> - `secretKey`：秘钥，用于加密解密
>
>   ``` bash
>   # 可通过以下方式来生成，唯一
>   openssl rand -hex 32
>   ```
>
> - `expiresIn`：过期时间，默认单位（秒）
>
>   - 可以使用字符串：`2 days`, `2d`, `10h`, `10m`, `10s` 来表示
>   - 也可以直接计算：例如 `(60 * 5)` 代表 5 分钟
>
> ``` typescript
> const payload = {name: '张三', age: 12}
> const secretKey = 'abc123'
> const expiresIn = '2d'
> ```

### 生成

::: code-group

```typescript [异步]
import * as jwt from "jsonwebtoken"

jwt.sign(payload, secretKey, {	// [!code focus:5]
    expiresIn: expiresIn
}, async (error, encoded) => {
    console.log(encoded)
})
```



```typescript [同步]
import * as jwt from "jsonwebtoken"

const token = jwt.sign(payload, secretKey, {expiresIn: expiresIn}) // [!code focus]
console.log(token)
```

:::



### 过期时间

两种写入方式，

- 第一种是，保存到 `payload` 中 <Badge type="tip" text="推荐" />
- 第二种是，生成时传入 `jwt.sign` 的 `option.expiresIn` 中

::: details 为什么推荐第一种？

可以生成到期时间戳，将这个到期时间戳传给前端

前端通过判断到期时间戳来判断是否跳转到登录页

在之前的开发中，每次用户在操作提交（`post`,`put`等请求）时才判断`token`是否过期，现在如果前端加一层判断，每次用户打开页面或发送`get`请求时就判断是否过期，

:::



::: code-group

```typescript [第一种] {6-7}
import * as jwt from "jsonwebtoken"

const expTime = Math.floor(Date.now() / 1000) + 20, // [!code ++]// 20秒后过期
      
jwt.sign({
    exp:expTime, 	// [!code ++]  
    data: data,		// 存储的数据
}, secretKey, {}, async (error, encoded) => {
    console.log(encoded)
})
/*
注意异步回调函数是第四个参数，第三个参数为：option，
	这里不需要，option，所以第三个参数传入空对象
	如果不传，会报错
*/ 
```



``` typescript [第二种]
jwt.sign(payload, secretKey, {	// [!code focus:5]
    expiresIn: expiresIn
}, async (error, encoded) => {
    console.log(encoded)
})
```

:::



## 校验

验证成功，则返回数据

- 时间过期，报错：`TokenExpiredError: jwt expired`

- 验证失败，报错：`JsonWebTokenError: invalid token`

  > [!warning] 警告
  >
  > `TokenExpiredError` 继承于 `JsonWebTokenError`
  >
  > 所以，在 `catch` 中应该将时间过期写在上面，不然直接捕捉的是 `JsonWebTokenError`

验证 `token` 也需要 `secretKey`，并且要与生成 `token` 时使用的一致



::: code-group



``` typescript [异步]
import * as jwt from "jsonwebtoken"
import {JsonWebTokenError, TokenExpiredError} from "jsonwebtoken";

const secretKey = 'abc123'

const token = '此处省略'

jwt.verify(token, secretKey, {}, async (error, decoded) => { // [!code focus:12]
    if (error) {
        if (error instanceof TokenExpiredError) {
            throw new Error('token 时间过期')
        } else if (error instanceof JsonWebTokenError) {
            throw new Error('Token 非法')
        } else {
            throw new Error('其他错误')
        }
    }
    console.log(decoded)
})
```



``` typescript [同步]
try {
    const decoded = jwt.verify(token, secretKey)
    console.log(Math.floor(Date.now() / 1000))
    console.log(decoded)
} catch (e) {
    if (e instanceof TokenExpiredError) {
        throw new Error('token 过期')
    } else if (e instanceof JsonWebTokenError) {
        throw new Error('token 不合法')
    } else {
        throw new Error('其他错误')
    }
}
```

:::
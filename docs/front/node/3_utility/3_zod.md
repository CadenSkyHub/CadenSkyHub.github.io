

# Zod

官方文档：[Zod](https://zod.dev/README_ZH)

官方GitHub：[Zod](https://github.com/colinhacks/zod/blob/HEAD/README_ZH.md#optional)

`Zod` 是一个以 `TypeScript` 为首的模式声明和验证库。我使用术语 "模式 "来广义地指任何数据类型，从简单的 `字符串` 到复杂的嵌套对象。



## 安装

``` bash
npm install zod
```



## 基本用法

`schema.parse`：同步解析

`schema.safeParse`：同步安全解析，不会抛出错误

`schema.parseAsync`：异步解析

`schema.safeParseAsync`：异步安全解析，不会抛出错误

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



## 提取推断类型

`zod.infer`

```typescript {8}
import {z} from 'zod'

const userSchema = z.object({
    name: z.string(),
    age: z.number()
})

type User = z.infer<typeof userSchema>

const user: User = {
    name: '张三',
    age: 12
}
```





## 定义模式

### 原始值

``` typescript
import { z } from "zod";

// 原始值类型
z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();

// 空类型
z.undefined();
z.null();
z.void(); // 接受 undefined

// 任意类型
// 允许任意类型的值
z.any();
z.unknown();

// never 类型
// 不允许值类型存在
z.never();
```



### String

> [!note] 更多
>
> 查看 [validatorjs](https://github.com/validatorjs/validator.js)，了解更多字符串验证函数

``` typescript
z.string().max(5);				// 最大长度5
z.string().min(5);				// 最小长度5
z.string().length(5);			// 长度5
z.string().email();				// 邮箱
z.string().url();				// 链接
z.string().uuid();				// uuid
z.string().regex(regex);		// 正则
z.string().startsWith(string);	// 以字串开始
z.string().endsWith(string);	// 以字串结束
```

**自定义错误信息**

可以传入第二个参数，来提供自定义错误信息

``` javascript
z.string().max(5, {message:'长度最大为 5'});
z.string().min(5, {message:'长度最小为 5'});
z.string().length(5, {message:'长度必须为 5'});
z.string().email({message:'邮箱格式不正确'});
```



### Number

``` typescript
z.number().gt(5);  // > 5
z.number().gte(5); // >= 5
z.number().lt(5);  // < 5
z.number().lte(5); // <= 5	

z.number().int(); // 值必须是一个整数

z.number().positive(); //     > 0
z.number().nonnegative(); //  >= 0
z.number().negative(); //     < 0
z.number().nonpositive(); //  <= 0

z.number().multipleOf(5); // x % 5 === 0
```

**自定义错误信息**

可以传入第二个参数，来提供自定义错误信息

``` typescript
z.number().gt(5, {message:'值必须 > 5'});
z.number().gte(5, {message:'值必须 >= 5'});
```



### Date

``` typescript
z.date().safeParse(new Date()); // success: true

z.date({
  required_error: "值不可为空",
  invalid_type_error: "这不是一个有效的s",
});

z.date().min(new Date("1900-01-01"), { message: "Too old" });
z.date().max(new Date(), { message: "Too young!" });
```



### Object

```typescript {3-6}
import {string, z} from 'zod'

const userSchema = z.object({
    name: z.string().optional(),
    age: z.number()
})

console.log(userSchema.parse({'age': 15}))              // 通过
console.log(userSchema.parse({name: '张三', age: 15}))   // 通过
console.log(userSchema.parse({name: '张三'}))            // 不通过
```



### Array

```typescript {3}
import {string, z} from 'zod'

const stringArraySchema = z.array(z.string())

// 提取推断类型
type ArraySchema = z.infer<typeof stringArraySchema>    // string[]

// 解析
console.log(stringArraySchema.parse(['a','b'])) // 通过
console.log(stringArraySchema.parse([]))        // 通过
console.log(stringArraySchema.parse([1,2]))     // 不通过
```



**不可为空数组** `.nonempty`

``` typescript {3}
import {string, z} from 'zod'

const stringArraySchema = z.array(z.string()).nonempty()

// 提取推断类型
type ArraySchema = z.infer<typeof stringArraySchema>    // string[]

// 解析
console.log(stringArraySchema.parse(['a','b'])) // 通过
console.log(stringArraySchema.parse([]))        // 不通过
```



**长度约束** `length/min/max`

``` typescript
array(z.string()).min(5);    // 必须包含5个或更多元素
array(z.string()).max(5);    // 必须包含5个或更少元素
array(z.string()).length(5); // 必须正好包含5个元素
```



## 可选

`.optional`

```typescript
const schema = z.string().optional()

const userSchema = z.object({
    name:z.string().optional()		// 相当于 name? : string
})
```



## null/undefined

`.nullable`

```typescript {4}
const schema = z.string().nullable()

const userSchema = z.object({
    name:z.string().nullable()		// 相当于 name : string | null | undefined
})
```



## 联合类型

`.or()`

```typescript {3}
import {z} from 'zod'

const schema = z.string().or(z.number()).or(z.boolean())
// schema : string | number | boolean
```



## 枚举

`.nativeEnum`

同样可以通过 `zod.infer(type schema)` 来提取推断类型

``` typescript
// 提取推断类型
type GenderEnum = z.infer<typeof genderSchema>
```

### 字符串枚举

::: code-group

```typescript [定义]
import {z} from 'zod'

// 创建枚举
enum Gender {
    boy = '男',
    girl = '女',
}

// 定义 schema
const genderSchema = z.nativeEnum(Gender)
```

``` typescript [验证]
genderSchema.parse(Gender.boy);  // 通过
genderSchema.parse(Gender.girl); // 通过
genderSchema.parse('男');    	// 通过
genderSchema.parse('女');    	// 通过
genderSchema.parse('其他');  	   // 不通过
```

:::



### 数字枚举

::: code-group

```typescript [定义]
import {z} from 'zod'

// 创建枚举
enum Gender {
    Boy,
    Girl,
}

// 定义 schema
const genderSchema = z.nativeEnum(Gender)
```

```typescript [验证]
genderSchema.parse(Gender.Boy) // 通过
genderSchema.parse('Girl')     // 不通过
genderSchema.parse(0)          // 通过
genderSchema.parse(1)          // 通过
genderSchema.parse(2)          // 不通过
```

:::



### 常量枚举

::: code-group

```typescript [定义]
import {z} from 'zod'

// 创建枚举
const Gender = {
    Boy: '男',
    Girl: '女',
} as const;

// 定义 schema
const genderSchema = z.nativeEnum(Gender)
```

```typescript [验证]
genderSchema.parse(Gender.Boy) // 通过
genderSchema.parse('Girl')     // 不通过
genderSchema.parse(0)          // 不通过
genderSchema.parse('男')       // 通过
genderSchema.parse('女')       // 通过
```

:::



## 错误处理

相关文档：[zod_Error](https://zod.dev/ERROR_HANDLING)

可以使用以下简单的错误处理，更详细的请查看 [错误处理](https://zod.dev/ERROR_HANDLING) 文档

``` typescript
z.string().max(5, {message:'长度最大为 5'});
z.string().min(5, {message:'长度最小为 5'});
z.string().length(5, {message:'长度必须为 5'});
z.string().email({message:'邮箱格式不正确'});
```


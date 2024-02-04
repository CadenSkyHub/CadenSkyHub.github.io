# dotenv



> [!tip] 
>
> `Node` 开箱即支持环境变量，并且可以通过 `process.env` 访问。
>
> `dotenv` 可以从 `.env` 文件中自动加载环境变量到 `process.env` 对象。
>
> `dotenv` 支持 `js`、`python`、`golang`、`php` 等语言

官方文档：[Dotenv](https://www.dotenv.org/docs/quickstart)



## 安装

``` bash
npm install dotenv --S
```



## 使用

> [!important] 提示
>
> `dotenv` 是将 `.env.*` 文件加载到 `process.env` 中，在使用时，还是使用 `process.env.KEY` 来访问



先创建一个 `.env` 文件，**一般我们的 `.env.*` 文件均放置在项目根目录**

```
HOST = '0.0.0.0'
PORT = 3000
HOSTNAME = 'Learn Dotenv'
```

读取 `env`

```typescript
import dotenv from 'dotenv'  // 导入包

dotenv.config()   // 初始化

console.log(process.env["HOST"])    // 0.0.0.0
console.log(process.env.PORT)       // 3000
console.log(process.env.HOSTNAME)   // Learn Dotenv

// 可以使用 || 来设置默认值
console.log(process.env.LANGUAGE || 'zh-CN')    // zh-CN
```



## 加载优先级

一般我们在开发中，有本地开发环境配置，还有部署环境配置，或者一些其他的环境配置，这是可能一个 `.env` 无法满足我们的要求，这时，就需要通过配置多个 `.env.*` 文件来进行区分不同的环境。

> [!caution] 警告
>
> 只要一个环境变量已经被设置过，`dotenv` 就不会修改它。
>
> 也就是说，`dotenv` 始终以先加载到的变量声明为更高优先级

我们创建三个 `.env.*` 文件

``` bash
.
├── config
│   └── env.ts			# <- 处理加载顺序
├── index.ts			# 主程序
├── .env				# <- 假设第三加载
├── .env.development	# <- 假设第二加载
├── .env.local			# <- 假设第一加载
├── package-lock.json
└── package.json
```



::: code-group

```[.env]
HOST = '0.0.0.0'
PORT = 3000
GENDER = true
```



```[.env.development]
HOST = '0.0.0.0'
PORT = 3000
AGE = 30
```



```[.env.local]
HOST = '0.0.0.0'
PORT = 80
NAME = 'local'
```

:::

然后 `config/env.ts` 来处理加载顺序

> [!info]
>
> `dotenv.config()` 方法可以接收一个`option`对象，其中`option.path`代表我们期望加载的 `.env*` 文件路径。



```typescript {14-16}
import path from 'path'
import dotenv from 'dotenv'

// 构造 .env.* 绝对路径
const workPath = path.resolve(__dirname, '../')
const resolveEnv = (env: string): string => path.resolve(workPath, env)
const envPath = resolveEnv('.env')


/*
* 设置加载顺序，根据代码的先后顺序进行加载
* local -> development -> env
* */
dotenv.config({path: `${envPath}.local`})
dotenv.config({path: `${envPath}.development`})
dotenv.config({path: `${envPath}`})


console.log(process.env["HOST"])    // 0.0.0.0
console.log(process.env["AGE"])     // 30
console.log(process.env["NAME"])    // local
console.log(process.env["PORT"])    // 80
```

> [!caution] 注意
>
> 如果将设置环境变量的文件拆分为模块，请确保该模块在项目启动时加载一次。如果不加载，是无法生效的。
>
> 可以将 `dotenv.config(...)` 配置封装成一个函数，在项目主文件调用一次。

## 不同环境加载不同

可以在启动项目时，设置一次性环境。<span style="color:red"><strong>注意：该一次性环境在关闭当前终端时将会失效</strong></span>

::: code-group

``` bash [Mac/Linux]
export VARIABLE_NAME=value
```

``` powershell [powershell]
$env:VARIABLE_NAME=value
```

``` cmd [Cmd]
set VARIABLE_NAME=value
```

:::

当设置一次性变量后，`process.env` 即可读取该环境变量，然后通过设置的环境变量来加载不同的`.env.*` 文件。比如，在开发环境使用 `.env.development`，生产环境使用 `.env.local`

```
// .env.development
NAME=development

// .env.local
NAME=local
```

启动前，设置当前终端环境变量 `export ENV=local` 即可使用 `.env.local` 文件，若是不输入，则自动使用 `.env.development` 文件。

```typescript
import path from "path";
import dotenv from 'dotenv'

const env = process.env.ENV || 'development'    // 如果没设置环境变量，则使用development

// 设置 .env.* 绝对路径
const envPath = path.resolve(__dirname, `./.env.${env}`)

// 初始化环境变量
dotenv.config({path: envPath})

// 输出测试
console.log(process.env.NAME)
```




























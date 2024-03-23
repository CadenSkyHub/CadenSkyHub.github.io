# Prisma

[开始 - Prisma 中文文档](https://prisma.yoga/getting-started)

## 安装

### 安装

``` bash
npm init -y
npm install prisma typescript ts-node @types/node -D
npm install @prisma/client
```



### tscconfig

`tsconfig.json`

``` json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```



### 创建项目

``` bash
npx prisma init
```

> [!note] 提示
>
> 这个命令创建了一个名为`prisma`的新目录
>
> - 其中包含一个名为`schema.prisma`的文件
>     - `schema.prisma`包含`prisma`模式以及数据库连接和`prisma`客户端生成器。
> - 还包含一个位于项目根目录中的`.env`文件
>     - `.env` 中 `DATABASE_URL` 为连接数据库的 `dbs`



### 连接

[MySQL 数据库连接器](https://prisma.yoga/concepts/database-connectors/mysql)

[PostgreSQL 数据库连接器](https://prisma.yoga/concepts/database-connectors/postgresql)

[MongoDB 数据库连接器](https://prisma.yoga/concepts/database-connectors/mongodb)

在 `.env` 文件中配置 `DATABASE_URL` 的连接地址

```
DATABASE_URL="mysql://dbUser:dbPassword@Host:Port/dbName"
```



### 影子数据库

> [!warning] 巨坑！
>
> 需要再创建一个数据库作为影子数据库，该数据库在开发中使用，在生产环境无需理会



> [!important] 坑！影子数据库
>
> `.env`
>
> ```
> DATABASE_URL="xxx"
> SHADOW_DATABASE_URL="xxx"
> ```
>
> `schema.prisma`
>
> ``` Prisma
> datasource db {
>     provider = "mysql"
>     url      = env("DATABASE_URL")
>     shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
> }
> ```







## 数据库映射

### 创建

``` Prisma
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "mysql"
    url      = env("DATABASE_URL")
}

model Post {
    id       Int      @id @default(autoincrement()) /// id， 自增
    createAt DateTime @default(now()) @map("create_at") /// 创建时间， 默认为当前， 数据库中字段为： `create_at`
    updateAt DateTime @updatedAt @map("update_at") /// 更新时间，自动更新时间， 数据库字段为： `update_at`
    title    String   @db.VarChar(50) /// 标题， 文章标题，为 varchar(50)
    content  String   @db.LongText /// 文章内容
    /// 一对多映射作者， fields 为指定当前表的字段， references 为对应的表中的字段，并且级联删除
    author   User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
    authorId Int      @map("author_id")

    @@map("post") /// 表在数据库中的名字
}

model User {
    id       Int      @id @default(autoincrement())
    createAt DateTime @default(now()) @map("create_at")
    updateAt DateTime @updatedAt @map("update_at")
    name     String   @db.VarChar(20)
    /// posts 字段不会映射到数据库
    posts    Post[] /// 多对一， 通过 user.posts 可得到该 user 的所有 post。

    @@map("user")
}
```





### 迁移

``` bash
npx prisma migrate dev --name init
```

> [!warning] 错误 Error：P3014
>
> 需要影子数据库，详解：





# 增删改查

[CRUD 增删改查](https://prisma.yoga/concepts/components/prisma-client/crud)

要开始使用`Prisma` 进行增删改查，你需要安装`@prisma/client`包:

``` bash
npm install @prisma/client
```

> [!tip] 什么是 Prisma Client
>
> `Prisma Client` 是一个自动生成的类型安全查询构造器。



> [!warning] 注意
>
> 以后每当对 `Prisma` 架构进行更改时
>
> 都需要手动调用`prisma generate`以适应 `Prisma` 客户端 `API` 中的更改。





## 增









# 错误处理

[Prisma 错误参考](https://prisma.yoga/reference/api-reference/error-reference/#prisma-client-错误类型)

1. PrismaClientKnownRequestError

    如果查询引擎返回与请求相关的已知错误（例如，唯一约束冲突），Prisma 客户端将抛出 `PrismaClientKnownRequestError` 异常。

2. PrismaClientUnknownRequestError

    如果查询引擎返回没有错误代码的错误，Prisma 客户端将抛出 `PrismaClientUnknownRequestError` 异常。

3. PrismaClientRustPanicError

    如果底层引擎崩溃并以非零退出代码退出，Prisma 客户端将引发 `PrismaclientTrustPanicError` 异常。这种情况下必须重新启动 Prisma Client 或整个节点进程。

4. PrismaClientInitializationError

    如果在启动查询引擎并创建与数据库的连接时出现问题，`Prisma Client` 将引发 `PrismaclientializationError` 异常。这种情况发生在：

    - 调用了 `prisma.$connect()` 或者
    - 第一次执行查询

    可能的错误原因:

    - 数据库连接凭证错误。
    - 数据库服务器域名或端口错误。
    - 查询引擎的端口已经被占用。
    - 环境变量丢失或者配置错误。
    - 找不到用来启动查询引擎的二进制文件 (`generator` 配置项)

5. PrismaClientValidationError

    如果验证失败，Prisma 客户端将引发 `PrismaClientValidationError` 异常，例如：

    - 字段缺失 - 例如，创建记录的字段为空 `data: {}`
    - 字段类型不匹配 (例如，给 `Boolean` 字段赋值 `"Hello, I like cheese and gold!"`)


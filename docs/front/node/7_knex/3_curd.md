# CURD

## insert

### 插入单个

- 传入对象类型
- 返回 插入的 `id` `number[]类型` 可通过 [id] 进行结构

```ts {2,4}
const insertOne = async (
    user:{email: string, password: string}
) => {
    const [id]:number[] = await db('users').insert(user)
    console.log(id)
}
```



### 插入多个

- 传入列表类型
- 返回 插入的 `id` 列表 `number[]类型` 
- **但是只返回一个，为列表第一个插入的 `id`**

```ts {2,4}
const insertMany = async (
    users: Array<{ email: string, password: string }>
) => {
    const ids: number[] = await db('users').insert(users)
    ids.map(id => {
        console.log(id)
    })
}
```

## query

### 查询单个

- 返回结果列表，类型为 `any[]`
- 如果没有数据，则返回空列表
- 根据不同的条件进行筛选
- 更多高级用法请看 [高级查询](#高级查询)

```ts {2}
const queryOne = async () => {
    const res = await db('users').select('*').where({id: 4})    // any[]
    const res1 = await db('users').select('*').where('id','=','4')    // any[]	不同写法
    const res2 = await db('users').select('*').where('id','>','1')    // any[]
    console.log(res)
}
```



### 查询多个

- 返回结果列表，类型为 `any[]`
- 如果没有数据，则返回空列表
- 更多高级用法请看 [高级查询](#高级查询)

```ts {2}
const queryAll = async () =>{
    const res= await db('users').select('*')    // any[]
    console.log(res)
}
```



## update

### 更新单个

- 返回 **更新的行数**
- 没有更新返回 `0`

```ts {2-7}
const updateOne = async () => {
    const res = await db('users')
        .update({
            email: 'ccc@ccc.com', 
            updated_at: new Date() 	// 更新时间手动设置
        })
        .where('id', '=', '9')
    console.log(res)
}

updateOne()
```

### 更新多个

- 返回 **更新的行数**
- 没有更新返回 `0`

::: code-group

```ts {2-7} [多多多]
const updateOne = async () => {
    const res = await db('users')
        .update({
            password: 'pwd',
            updated_at: new Date()
        })
        .where('password', '=', 'password')
    console.log(res)
}

updateOne()
```

```ts {2-7} [时间]
const updateOne = async () => {
    const res = await db('users')
        .update({
            password: 'pwd',
            updated_at: new Date()
        })
        .where('created_at', '=', '2024-08-17 01:56:34')
    console.log(res)
}

updateOne()
```

:::



## delete

### 删除单个

- 删除成功返回 **删除的行数**
- 没有删除返回 `0`

```ts {2}
const deleteOne = async () => {
    const res:number = await db('users').delete().where({id: 1})
    console.log(res)
}

deleteOne()
```

### 删除多个

- 删除成功返回 **删除的行数**
- 没有删除返回 `0`

```ts {2}
const deleteMany = async () =>{
    const res = await db('users').delete().where('password','=','passwd')
    console.log(res)
}

deleteMany()
```





## 高级查询

`WhereNull`

`WhereBetween`

`WhereExists`

`WhereIn`

`whereNot`

`whereNotIn`







## 执行 sql

```ts {2-6}
const executeSql = async (sql: string, binding: knex.Knex.RawBinding) => {
    const res = await db.raw(sql, binding)
    
    console.log(res)        // [ [查询结果], [表结构] ]
    console.log(res[0])     // 这里是查询的数据结果
    console.log(res[1])     // 这是表结构
}

executeSql(
    'SELECT * FROM users WHERE id > ?',
    [1]
)
```



## 错误

所有的错误都为 `mysql` 原生错误

可以根据 `errno` 判断错误类型

::: details 错误返回示例

```js
Error: insert into `users` (`email`, `password`) values ('a@a.com', 'abc123') - Duplicate entry 'a@a.com' for key 'users.users_email_unique'
    at Packet.asError (F:\0-code\knex\node_modules\mysql2\lib\packets\packet.js:738:17)
    at Query.execute (F:\0-code\knex\node_modules\mysql2\lib\commands\command.js:29:26)
    at Connection.handlePacket (F:\0-code\knex\node_modules\mysql2\lib\connection.js:481:34)
    at PacketParser.onPacket (F:\0-code\knex\node_modules\mysql2\lib\connection.js:97:12)
    at PacketParser.executeStart (F:\0-code\knex\node_modules\mysql2\lib\packet_parser.js:75:16)
    at Socket.<anonymous> (F:\0-code\knex\node_modules\mysql2\lib\connection.js:104:25)
    at Socket.emit (node:events:517:28)
    at Socket.emit (node:domain:489:12)
    at addChunk (node:internal/streams/readable:368:12)
    at readableAddChunk (node:internal/streams/readable:341:9) {
  code: 'ER_DUP_ENTRY',
  errno: 1062,
  sqlState: '23000',
  sqlMessage: "Duplicate entry 'a@a.com' for key 'users.users_email_unique'",
  sql: "insert into `users` (`email`, `password`) values ('a@a.com', 'abc123')"
}
```

:::

# 迁移（还是喜欢用 mysql 命令）

> [!WARNING] 注意，前置条件
>
> `knexfile.ts` 该文件名称为固定，迁移时使用
>
> ``` ts {30}
> // knexfile.ts  该文件名称为固定，迁移时使用
> import {Knex} from "knex";
> 
> const knexfile: { [k in 'development' | 'production']: Knex.Config } = {
>     development: {  // 开发环境
>         client: 'mysql2',               // 连接驱动
>         connection: {                // 数据库配置
>             host: '10.10.10.10',        // 主机名或 IP 地址
>             port: 3306,                 // 端口
>             user: 'learn',              // 用户名
>             password: 'password',       // 密码
>             database: 'learn',          // 数据库
>             charset: 'utf8',            // 字符集
>             timezone: '+08:00'          // 时区
>         },
>         pool: {                      // 连接池
>             min: 5,                     // 连接池中最小连接数
>             max: 10,                    // 连接池中最大连接数
>             idleTimeoutMillis: 1000 * 60 * 5,   // 连接在池中保持空闲的时间（以毫秒为单位），超过这个时间将被释放。
>             createTimeoutMillis: 2000,  // 创建连接的超时时间（以毫秒为单位）。
>         },
>         migrations: {   // 用于配置数据库迁移的相关选项。
>             tableName: 'knex_migrations',    // 存储迁移记录的数据库表的名称。
>             extension: 'ts' // 控制生成的迁移的扩展。
>         }
>     },
>     production: {}     // 线上环境， 该配置内容与 development 内容一致
> }
> 
> export default knexfile		// 一定使用 export default ，否则报错 Requiring external module ts-node/register
> ```



## 定义表

### 基本

| 参数/方法            | 说明                                           | 示例                                                         |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| `table.increments`   | 创建一个自增主键字段。                         | `table.increments('id').primary();`                          |
| `table.string`       | 创建一个字符串类型的字段。                     | `table.string('name').notNullable();`<br />`table.string('username', 50).notNullable();` |
| `table.text`         | 创建一个文本类型的字段。                       | `table.text('description');`                                 |
| `table.integer`      | 创建一个整数类型的字段。                       | `table.integer('age').unsigned();`                           |
| `table.boolean`      | 创建一个布尔类型的字段。                       | `table.boolean('isActive').defaultTo(true);`                 |
| `table.date`         | 创建一个日期类型的字段。                       | `table.date('birthdate');`                                   |
| `table.datetime`     | 创建一个日期时间类型的字段。                   | `table.datetime('createdAt').defaultTo(knex.fn.now());`      |
| `table.timestamp`    | 创建一个时间戳类型的字段。                     | `table.timestamp('updatedAt').defaultTo(knex.fn.now());`     |
| `table.float`        | 创建一个浮点数类型的字段。                     | `table.float('price', 8, 2);`                                |
| `table.decimal`      | 创建一个定点数类型的字段，指定精度和小数位数。 | `table.decimal('amount', 10, 2);`                            |
| `table.enu`          | 枚举类型                                       | `table.enu('gender', ['男', '女', '不详'])`                  |
| `table.json`         | 创建一个 JSON 类型的字段。                     | `table.json('data');`                                        |
| `table.binary`       | 创建一个二进制类型的字段。                     | `table.binary('file');`                                      |
| `table.foreign`      | 创建外键约束。                                 | `table.foreign('role_id').references('id').inTable('roles');` |
| `table.index`        | 为指定字段创建索引。                           | `table.index(['name', 'email']);`                            |
| `table.timestamps`   | 创建 `created_at` 和 `updated_at` 字段。       | `table.timestamps(true, true);`                              |
| `table.dropColumn`   | 删除指定的字段。                               | `table.dropColumn('oldField');`                              |
| `table.renameColumn` | 重命名指定的字段。                             | `table.renameColumn('oldName', 'newName');`                  |
| `table.comment`      | 为表或字段添加注释。                           | `table.string('name').comment('用户姓名');`                  |

### 约束

| 参数/方法                 | 说明                           | 示例                                           |
| ------------------------- | ------------------------------ | ---------------------------------------------- |
| `.primary()`              | 自增主键                       | `table.increments('id').primary();`            |
| `.notNullable()`          | 不可为空                       | `table.string('username', 50).notNullable();`  |
| `.defaultTo('默认内容')`  | 默认值                         | `table.boolean('isActive').defaultTo(true);`   |
| `.unique()`               | 唯一                           | `table.string('email').unique();`              |
| `.unsigned()`             | 无符号整数，不可使用负数及小数 | `table.integer('age').unsigned();`             |
| `.checkBetween([0, 120])` | 检查约束，在 0-120 范围之内    | `table.integer('age').checkBetween([0, 120]);` |



### 示例代码

以下是一个使用 `knex.schema.createTable` 的示例，展示了如何使用上述参数和方法：

```typescript
import type {Knex} from "knex";

/**
 * 创建用户表的迁移。
 *
 * @param {Knex} knex - Knex 实例，用于执行数据库操作。
 * @returns {Promise<void>} 返回一个 Promise，表示迁移的完成状态。
 */
export async function up(knex: Knex): Promise<void> {
    // 用户表
    await knex.schema.createTable('users', table => {
        table.increments('id').primary().comment('ID')   // 自增主键。唯一
        table.string('email', 20).unique().notNullable().comment('用户邮箱')   // 邮箱，唯一，不为空
        table.string('password').notNullable().comment('密码') // 密码，不为空
        table.timestamps(true, true)    // created_at, updated_at
        table.comment('用户表')
    })

    // 信息表
    await knex.schema.createTable('users_info', table => {
        table.increments('id').primary().comment('ID')   // 自增主键
        table.string('name', 20).defaultTo('Time Silent').comment('用户姓名')   // 默认为 Time Silent , 最大长度为 20
        table.integer('age').checkBetween([0, 100]).comment('用户年龄') // 0-100 范围内
        table.enu('gender', ['男', '女', '不详']).defaultTo('不详').comment('性别') // 枚举类型
        table.timestamps(true, true)    // created_at, updated_at
        table.comment('用户信息')
    })

}

/**
 * 回滚用户表的迁移
 *
 * @param {Knex} knex - Knex 实例
 * @returns {Promise<void>} - 返回一个 Promise，表示回滚完成的状态
 */
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users')
    await knex.schema.dropTable('users_info')
}
```



## 相关命令

### 迁移帮助

```
npx knex --help
```

### 生成迁移表

会生成一个 `migrations` 文件夹，

且在文件夹中创建一个新的迁移文件。在该迁移文件中来 [`定义表（详情）`](#定义表) 

```
npx knex migrate:make <migration_name>
```

### 执行迁移

参数：

`--env`：默认使用 `development`

`--knexpath`：指定 `knexfile` 路径

`--knexfile`：指定 `knexfile` 文件

```
npx knex migrate:latest
```



### 回滚迁移

```
npx knex migrate:rollback
```



## 修改表流程

> [!CAUTION] 注意
>
> 每次执行时，都需要按照该流程
>
> 如果嫌麻烦，就别用了，直接用 `phpmyadmin` 多方便



迁移允许你安全地更改数据库的结构，确保可以轻松地回滚或应用更改。以下是如何创建和执行迁移的步骤：

### 1. 创建迁移文件

首先，使用 `Knex CLI `创建一个新的迁移文件。在终端中运行以下命令：

```bash
npx knex migrate:make modify_users_table
```

这将创建一个新的迁移文件，文件名通常以时间戳开头。

### 2. 编辑迁移文件

打开新创建的迁移文件，添加你想要的修改。例如，假设你想在 `users` 表中添加一个 `age` 列：

```typescript
import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.table('users', (table) => {
        table.integer('age').nullable(); // 添加 age 列，允许为空
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.table('users', (table) => {
        table.dropColumn('age'); // 回滚时删除 age 列
    });
}
```

### 3. 运行迁移

在终端中运行以下命令以应用迁移：

```bash
npx knex migrate:latest
```

这将执行所有未应用的迁移，包括你刚刚创建的迁移。

### 4. 回滚迁移（可选）

如果你需要撤销最近的迁移，可以运行：

```bash
npx knex migrate:rollback
```

这将执行 `down` 方法，撤销上一次的迁移。

### 总结

- **创建迁移**：使用 `knex migrate:make` 创建迁移文件。
- **编辑迁移**：在迁移文件中定义 `up` 和 `down` 方法。
- **运行迁移**：使用 `knex migrate:latest` 应用迁移。
- **回滚迁移**：使用 `knex migrate:rollback` 撤销迁移。



## 错误

执行`npx knex migrate:latest` 时报错：  `Requiring external module ts-node/register \n knex: Required configuration option 'client' is missing`

相关：[解决方法](https://stackoverflow.com/questions/52093618/knex-required-configuration-option-client-is-missing-error)

`knexfile.ts` 导出方式一定要为 `export default`

```ts {9}
// knexfile.ts  该文件名称为固定，迁移时使用
import {Knex} from "knex";


const knexfile: { [k: string]: Knex.Config } = {
	...
}

export default knexfile
```

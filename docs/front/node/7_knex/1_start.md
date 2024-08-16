# 开始

`Knex.js` 是一个用于 Node.js 的 SQL 查询构建器，支持多种数据库如 `PostgreSQL、MySQL、SQLite3、Oracle` 等。

它提供了一个灵活且强大的 API，用于构建和执行 SQL 查询，同时还支持事务处理和迁移。

- 官方文档：[官方文档](https://www.knexjs.cn/guide/)
- github：[GitHub](https://github.com/knex/documentation)

## 使用 `mysql2`

```bash
npm i knex mysql2
```



## 使用 `sqlite3`

```bash
npm i knex mysql2
```

::: details 配置

```ts
// knexfile.js
module.exports = {
    development: {
        client: 'sqlite3', // 数据库客户端
        connection: {
            filename: './dev.sqlite3' // SQLite 数据库文件路径
        },
        useNullAsDefault: true, // 使用 null 作为默认值，适用于 SQLite
        migrations: {
            tableName: 'knex_migrations' // 存储迁移记录的数据库表的名称
        }
    },

    // 其他环境配置（如 production）
    production: ...
};
```

:::

- **默认值**: SQLite3 不支持某些 MySQL 的默认值行为，因此在创建表时需要特别注意。
- **事务**: 在 SQLite3 中，事务的处理可能会有所不同，尤其是在并发写入时。
- **数据类型**: SQLite3 的数据类型更灵活，但可能会导致某些类型的行为与 MySQL 不同。



## 使用 `postgre`

```
npm i knex pg
```

::: details 配置

```ts
// knexfile.js
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'your_user',
            password: 'your_password',
            database: 'your_database',
            port: 5432, // PostgreSQL 默认端口
        },
    },

    // 其他环境配置（如 production）
    production: ...
};
```

:::

- **数据类型**: PostgreSQL 支持更多的数据类型（如 JSONB、ARRAY），而 MySQL 的数据类型相对简单。
- **字符串比较**: PostgreSQL 的字符串比较是区分大小写的，而 MySQL 默认是大小写不敏感的。
- **默认值**: PostgreSQL 支持更复杂的默认值设置，比如使用函数生成默认值。
- **事务**: 在 PostgreSQL 中，事务的处理更为强大，支持 Savepoints 等功能。

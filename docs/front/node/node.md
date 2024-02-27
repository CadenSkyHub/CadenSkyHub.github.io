# PM2

官方文档：[PM2 - 文档 (keymetrics.io)](https://pm2.keymetrics.io/docs/usage/quick-start/)


---



# Mysql2



## 安装

::: code-group

``` bash [JavaScript]
npm install --S mysql2
```



``` bash [TypeScript]
npm install --S mysql2
npm install --D @types/node
```

:::





## 连接

### 基本

::: code-group

```typescript [同步]
import mysql from 'mysql2'	// [!code focus]

try {
    const conn = mysql.createConnection({
        host: '10.10.10.100',
        port: 3306,
        user: 'sql2',
        password: '123456',
        database: 'sql2'
    })
    console.log('连接数据库成功')
    conn.end()
} catch (e) {
    console.log(e, '连接数据库失败')
}
```



```typescript [异步]
import mysql from 'mysql2/promise'	// [!code focus]

async function main() {
    try {
        const conn = await mysql.createConnection({
            host: '10.10.10.100',
            port: 3306,
            user: 'sql2',
            password: '123456',
            database: 'sql2'
        })
        console.log('连接数据库成功')
        await conn.end()
    } catch (e) {
        console.log(e, '连接数据库失败')
    }
}

main()
```

:::

### 连接池



``` javascript
import mysql from 'mysql2/promise';

// 创建连接池，设置连接池的参数
const pool = mysql.createPool({
  host: 'localhost',	// 数据库的主机地址
  user: 'root',			// 数据库的用户名
  database: 'test',		// 要使用的数据库的名称
  waitForConnections: true,		//  是否等待连接。如果设置为true，则当连接数达到限制时，连接池将会在获取新连接之前等待连接的释放。默认为true。
  connectionLimit: 10,	// 连接池中允许的最大连接数。当达到这个限制时，后续的连接请求将会排队等待。默认为10。
  maxIdle: 10, // 最大空闲连接数。指定连接池中允许保留的最大空闲连接数。默认情况下，与connectionLimit相同。
  idleTimeout: 60000, // 空闲连接超时时间（毫秒）。当连接在连接池中处于空闲状态且空闲时间超过此值时，连接将被释放。默认为60000毫秒（60秒）。
  queueLimit: 0,	// 连接请求队列的最大长度。超过此限制的连接请求将会被拒绝。如果设置为0，则表示不限制队列长度。默认为0。
  enableKeepAlive: true,	// 是否启用长连接保持活动状态。如果设置为true，则连接池会尝试保持长连接处于活动状态。默认为false。
  keepAliveInitialDelay: 0,		// 长连接初始延迟（毫秒）。在连接池中启用长连接时，指定首次发送长连接保持活动状态的延迟时间。默认为0毫秒。
});
```



### 释放连接

::: code-group

``` typescript [基本]
conn.end()
```



``` typescript [连接池]
conn.release();
```

:::






























































# node 连接 redis

官方文档：[Node Redis](https://redis.github.io/ioredis/index.html#RedisOptions)

github：[Github](https://github.com/redis/ioredis)



```
npm i ioredis
```

## 基本使用

```ts
import Redis from "ioredis";

const client = new Redis({
    host: '10.10.10.10',
    port: 6379,
    username: 'default',
    password: 'password'
})


client.get('a').then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})


client.del('a').then(res=>{
    console.log(res)
})
```

## 其他

后续再补充，基本跟在客户端使用一致
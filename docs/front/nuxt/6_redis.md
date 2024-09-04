# Redis

先安装 `ioredis`

```bash
npm i ioredis
```

Nitro 提供了一个内置存储层，可以抽象化文件系统、数据库或任何其他数据源。

[文档1  KV Storage - Nitro](https://nitro.unjs.io/guide/storage)

[文档2 Unstorage](https://unstorage.unjs.io/)

使用

```ts
await useStorage('redis').setItem('user', 'abc')
```


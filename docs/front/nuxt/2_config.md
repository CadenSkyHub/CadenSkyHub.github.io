# 配置

[Nuxt Configuration](https://nuxt.com/docs/api/nuxt-config)

## runtimeConfig

运行时的全局变量。[文档](https://nuxt.com.cn/docs/api/composables/use-runtime-config#%E5%AE%9A%E4%B9%89%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE)

```ts
export default defineNuxtConfig({
    runtimeConfig: {
        // 不在 public 中定义的。只能通过服务端访问
        count: 1,
        // public 定义的。可以在服务端和客户端访问
        public: {
            baseUrl: 'localhost:8080'
        }
    },
})
```

访问

```vue
<script setup lang="ts">
    
const config = useRuntimeConfig()

console.log(config.count)	// 只能在服务端访问
console.log(config.public.baseUrl)		// 服务端和客户端都能访问
</script>
```

## devServer

配置端口及地址。[文档](https://nuxt.com.cn/docs/api/nuxt-config#devserver)

```ts
export default defineNuxtConfig({
    devServer: {
        host: '0.0.0.0',
        port: 3000
    }
})
```

## devtools

调试工具

```ts
export default defineNuxtConfig({
    devtools: {enabled: true}
})
```



## css

全局 css 引入。

```ts
export default defineNuxtConfig({
    css: ['~/assets/css/main.scss'],
    // @/assets/css/main.scss 也可以
})
```



## nitro

[Nitro (unjs.io)](https://nitro.unjs.io/config)

以下为配置 `redis` 示例

```json
export default defineNuxtConfig({
    nitro: {
        storage: {
            redis: {
                driver: 'redis',
                host: '10.10.10.10',
                port: 6379,
                password: 'password'
            }
        }
    }
})
```

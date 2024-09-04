# 请求数据

## 服务端和客户端

```ts
// 只会在 IDE 控制台输出
if (import.meta.server){
    console.log('server')
}

// 会在浏览器控制台输出
if (import.meta.client){
    console.log('client')
}
```



## 请求数据

- [`useFetch`](https://nuxt.com.cn/docs/api/composables/use-fetch) 是在组件设置函数中处理数据获取的最简单方法。
- [`$fetch`](https://nuxt.com.cn/docs/api/utils/dollarfetch) 可以根据用户交互进行网络请求。
- [`useAsyncData`](https://nuxt.com.cn/docs/api/composables/use-async-data) 结合 `$fetch`，提供了更精细的控制。

在某些情况下，使用 [`useFetch`](https://nuxt.com.cn/docs/api/composables/use-fetch) 组合函数是不合适的，例如当 CMS 或第三方提供自己的查询层时。在这种情况下，您可以使用 [`useAsyncData`](https://nuxt.com.cn/docs/api/composables/use-async-data) 来封装您的调用，并仍然保持组合函数提供的好处。

默认情况下，数据获取的组合函数会在客户端和服务器环境中执行其异步函数。将`server`选项设置为`false`，只在客户端执行调用。与`lazy`选项结合使用，这对于首次渲染不需要的数据（例如，非SEO敏感数据）非常有用。

```ts
/* 此调用仅在客户端执行 */
const { status, data: posts } = useFetch('/api/comments', {
  lazy: true,
  server: false
})
```

## 刷新和执行

如果要手动获取或刷新数据，请使用组合函数提供的`execute`或`refresh`函数。

```vue
<script setup lang="ts">
const { data, error, execute, refresh } = await useFetch('/api/users')
</script>

<template>
  <div>
    <p>{{ data }}</p>
    <button @click="refresh">刷新数据</button>
  </div>
</template>
```



## [不立即执行](https://nuxt.com.cn/docs/getting-started/data-fetching#不立即执行)



## 加载状态

> [!important] 提示
>
> 加载状态不会在服务端执行， 所以刷新页面是没有效果的，在页面跳转才有效果

`status` 变量有以下取值：

- `idle`：获取未开始
- `pending`：获取已开始但尚未完成
- `error`：获取失败
- `success`：获取成功完成

```vue
<script setup lang="ts">
    
const {status, data} = await useLazyFetch('/api/cokbok')

</script>

<template>
    <div v-if="status==='pending'">
        加载中...
    </div>
    <div v-else>
        {{ data }}
    </div>
</template>
```












# 自定义错误

更多自定义请查看文档：[错误处理](https://nuxt.com.cn/docs/getting-started/error-handling#%E9%94%99%E8%AF%AF%E9%A1%B5%E9%9D%A2)

> [!WARNING] 注意
>
> `server` 端如果错误 可以通过 `throw createError` 或者 `useError` 来抛出错误。无法自定义全局捕捉错误

在 **根目录** 创建一个 `error.vue` 文件，这样可以自定义页面。

```vue
<script setup lang="ts">
import type {NuxtError} from '#app'
const props = defineProps({
    error: Object as () => NuxtError
})
</script>

<template>
    <div v-if="props.error?.statusCode === 404">
        {{ props.error }} 是404啦
    </div>

    <div v-else-if="props.error?.statusCode === 500">
        {{ props.error }} 是500啦
    </div>
</template>

<style scoped>
</style>
```


# 布局/视图

`layouts` 文件夹



## 启用布局

``` vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

使用布局时：

- 在页面中使用 [definePageMeta](https://nuxt.com.cn/docs/api/utils/define-page-meta) 设置 `layout` 属性。
- 设置 `<NuxtLayout>` 的 `name` 属性。





## 默认布局

添加 `~/layouts/default.vue`：

``` vue
<template>
  <div>
    <p>一些在所有页面之间共享的默认布局内容</p>
    <slot />
  </div>
</template>
```



## 命名布局

``` bash
-| layouts/
---| default.vue
---| custom.vue
```

可以在页面中使用 `custom` 布局：

`pages/about.vue`

``` vue
<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>
```

通过 `NuxtLayout` 的 `name` 属性覆盖所有页面的默认布局：

``` vue
<script setup lang="ts">
// 可以基于 API 调用或登录状态进行选择
const layout = "custom";
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
```



## 禁用布局

``` vue
<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>
```




























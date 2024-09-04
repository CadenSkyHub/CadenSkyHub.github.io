# 路由

## 基本路由

[文档](https://nuxt.com.cn/docs/getting-started/routing)

`Nuxt`文件系统路由为`pages/`目录中的每个文件创建一个路由。

`pages/`目录中的每个`Vue文`件都会创建一个相应的URL（或路由），用于显示文件的内容。通过为每个页面使用动态导入

::: code-group

``` bash [目录结构]
| pages/
	| about.vue
	| index.vue
```

``` ts [生成的路由]
{
  "routes": [
    {
      "path": "/about",
      "component": "pages/about.vue"
    },
    {
      "path": "/",
      "component": "pages/index.vue"
    }
  ]
}
```

:::

## 命名路由-路径参数

`[]` 一个 `[]` 来命名

路由参数与 `vue-router` 获取方式一致

::: code-group

``` bash [目录结构]
| pages/
	|- post
		|- [id].vue
```

``` ts [生成的路由]
{
  "routes": [
    {
      "path": "/posts/:id",
      "component": "pages/posts/[id].vue"
    }
  ]
}
```

``` vue [获取参数]
<script setup lang="ts">
const route = useRoute()

// 当访问/posts/1时，将获取到路径参数
console.log(route.params.id)

</script>	
```

:::

## 可选路由

`[[ ]]` 两个 `[]` 来命名

### 示例1

::: code-group

``` bash [目录结构]
| pages/
	|- [[post]]
		|- index.vue
```

``` vue
<script setup lang="ts">

// 将会获取到可选路由的参数
// 'localhost:3000/abc' '/abc' 可以是任意
const post = useRoute().params.post

</script>
```

:::

### 示例2

::: code-group

``` bash [目录结构]
| pages/
	|- [[post]]
		|- all.vue
```

``` vue
<script setup lang="ts">

// 将会获取到可选路由的参数
// 'localhost:3000/abc/all' 如果有 '/abc' 则获取到。

// 'localhost:3000/all' 如果没有则得到的为 undefined
const post = useRoute().params.post

</script>
```

:::

## 全局路由

当所有路由都匹配不到，则跳转到全局路由

`[...any]` 通过 `[...any]` 来定义， `any` 为任意

``` bash [目录结构]
| pages/
	|- [...404].vue
```



## 指定路由名称

``` vue
<script setup lang="ts">

import {definePageMeta} from "../.nuxt/imports";

definePageMeta({
    path: '/path',   	// 可以自定义指定路径
    name: 'pathName'     // 也可以自定义指定名称
})

</script>
```





## 查询参数

`navigateTo` 与 `vue-router` 使用方式一致。

- `navigateTo` 在服务端和客户端都可以使用
- `vue-router` 仅支持客户端

::: code-group

``` ts [携带参数]
const rrr = () =>{
    navigateTo({path:'/?id=555'})
}

// 或者
const rrr = () => {
    navigateTo({path: path, query: {id: 5}})
}
```

``` vue [获取参数]
<script setup lang="ts">
const route = useRoute()

// 当访问 /?id=1 时。将获取到查询参数
console.log(route.query.id)
</script>	
```

:::



## 导航

### 声明式导航

`<NuxtLink>` 组件用于在页面之间创建链接。它会将`<a>`标签渲染为具有`href`属性设置为页面的路由。封装的是 `vue-router` 的 `<RouterLink>`

``` vue
<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">关于</NuxtLink></li>
        <li><NuxtLink to="/posts/1">文章1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">文章2</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
```

### 编程式导航

`navigateTo` 与 `vue-router` 使用方式一致。

- `navigateTo` 在服务端和客户端都可以使用
- `vue-router` 仅支持客户端

``` ts
const handleNav = (path: string) => {
    navigateTo({path})
}
```



## 指定页面路由名称-path

[definePageMeta · Nuxt Utils](https://nuxt.com.cn/docs/api/utils/define-page-meta)

``` ts
definePageMeta(meta: PageMeta) => void

interface PageMeta {
  validate?: (route: RouteLocationNormalized) => boolean | Promise<boolean> | Partial<NuxtError> | Promise<Partial<NuxtError>>
  redirect?: RouteRecordRedirectOption
  name?: string
  path?: string
  alias?: string | string[]
  pageTransition?: boolean | TransitionProps
  layoutTransition?: boolean | TransitionProps
  key?: false | string | ((route: RouteLocationNormalizedLoaded) => string)
  keepalive?: boolean | KeepAliveProps
  layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  scrollToTop?: boolean | ((to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) => boolean)
  [key: string]: unknown
}
```

示例：

``` vue
<script lang='ts' setup>
definePageMeta({
    name:'route-name',
    path:'/route/name'
})
</script>
```

跳转

``` vue
<script lang='ts' setup>

const handleBtn = () =>{
    navigateTo({name:'route-name'})
}
    
</script>
```


















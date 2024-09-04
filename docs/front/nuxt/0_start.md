# nuxt

- [官方文档](https://nuxt.com)
- [非官网中文文档](https://nuxt.com.cn/docs/getting-started/installation)
- [第三方文档](https://www.nuxtjs.cn/)



> [!Warning] 警告
>
> 由于官方的安装方法，在傻逼中国匪徒防火墙的加持下，无法直接使用以下命令
>
> ``` shell
> npx nuxi@latest init <project-name>
> ```
>
> 没有环境代理则使用第三方安装方法



## 安装

```bash
mkdir nuxt && cd nuxt
npm init -y
```

然后将 `scripts` 复制到 `package.json` 中

```json
{
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start"
  }
}
```



## 新建根组件

在根目录

```bash
touch app.vue
```

app.vue

```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
```



## 新建一个页面

这里的 `pages` 和 `index.vue` 为 **固定名称**， 具体参考官网

```bash
mkdir pages && cd pages
touch index.vue
```

## 运行

```bash
npm run dev
```

运行之后，会执行一些东西，一路确认即可。



## 目录结构

详细的目录结构请查看官网：[app.vue · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/app)

以下为常用的

| 目录          | 说明                                                         | 文档                                                         |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `pages`       | 如果不存在该目录，Nuxt 将不会包含 [vue-router](https://router.vuejs.org/) 依赖项。 | [pages/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/pages) |
| `assets`      | 静态目录`scss、css` 等文件                                   | [assets/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/assets) |
| `components`  | 放置所有 Vue 组件的地方。                                    | [components/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/components) |
| `composables` | 将你的Vue组合式函数自动导入到你的应用程序中。                | [composables/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/composables) |
| `content`     | 基于文件的内容管理系统（CMS）                                | [content/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/content) |
| `layouts`     | 用于将常见的 UI 模式提取为可重用的布局。                     | [layouts/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/layouts) |
| `middleware`  | 中间件来在导航到特定路由之前运行代码。                       | [middleware/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/middleware) |
| `modules`     | 使用modules/目录在应用程序中自动注册本地模块。               | [modules/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/modules) |
| `public`      | public/ 目录用于提供网站的静态资源。                         | [public/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/public) |
| `server`      | 用于在应用程序中注册API和服务器处理程序。                    | [server/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/server) |
| `utils`       | 在整个应用程序中自动导入你的工具函数。                       | [utils/ · Nuxt 目录结构](https://nuxt.com.cn/docs/guide/directory-structure/utils) |



## 使用 scss

安装

```bash
npm install sass
```

局部使用

```scss
<style scoped lang="scss">
@use "assets/css/main";
</style>
```

全局使用，需要在 `nuxt.config.ts` 中配置

```ts
export default defineNuxtConfig({
    css: ['~/assets/css/main.scss'],
    // @/assets/css/main.scss 也可以
})
```

# 配置

::: warning TS 配置

`VitePress` 天然支持 `ts`

``` bash
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.ts
│  └─ index.md
└─ package.json
```

由于 `es6` 和 `node` 的问题，需要在 `package.json` 中开启 `es6` 模块化

``` json
{
  ...
  "type": "module",
  ...
}
```

:::







## 配置文件

当没有任何配置的时候，页面将非常轻量，但用户也无法通过导航去访问网站。

要自定义站点，首先在 `docs` 目录里创建一个 `.vitepress` 目录。

这是放置所有 VitePress 特定文件的地方。 这时候你的项目结构大概是这样的：

``` bash{3-4}
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js	// 或 config.ts
│  └─ index.md
└─ package.json
```

配置 VitePress 站点的基本文件是 `.vitepress/config.js`，它应该导出一个 `JavaScript` 对象：

> 使用 `defineConfig` 辅助函数将为配置选项提供 TypeScript 支持的智能提示。

::: code-group

``` javascript
import { defineConfig } from "vitepress";

export default defineConfig({
    title: 'VitePress',
    description: 'Just playing around.'
})
```

``` typescript
import { defineConfig } from "vitepress";

export default defineConfig({
    title: 'VitePress',
    description: 'Just playing around.'
})
```

:::



## 主题配置内容

::: tip 建议

建议将文件模块化，以下 `ts` 进行了模块化，将 `themeConfig` 单独拆分到了一个文件

:::

::: code-group

``` javascript
import { defineConfig } from "vitepress";

export default defineConfig({
    themeConfig:{...}
})
```



``` typescript
/*
* config.ts 文件
*/
import { defineConfig } from "vitepress";
import { themeConfig } from "./theme";

export default defineConfig({
    themeConfig,
})

/*
* theme.ts 文件
*/
import { DefaultTheme } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
    siteTitle: "< ~/ > MyNote",
}
```





:::

## 静态目录

静态目录 `public` 应该在 `docs` 目录中！！

``` bash {3}
docs
  ├── index.md
  ├── public	<- 在这里
  └── .vitepress
```

> [!note] 注意
>
> 在文档或项目中访问静态文件。`png、jpg` 等，直接使用 `/` 即可，无需 `/public`

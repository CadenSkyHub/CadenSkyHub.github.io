# 页脚

当配置 `themeConfig.footer` 的时候，VitePress将会在页面底部展示全局的页脚。

::: danger :warning: 警告

当 **侧边栏** 可见时，不会显示页脚。
:::



## 配置页脚

::: code-group

``` typescript
export default {
    themeConfig: {
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Evan You'
        }
    }
}
```



``` typescript [类型提示]
export interface Footer {
  // 版权前显示的信息
  message?: string

  // 实际的版权文本
  copyright?: string
}
```

:::



## frontmatter 配置

可以使用 `frontmatter` 上的 `footer` 选项在单独页面上禁用此功能：

``` markdown
---
footer: false
---
```


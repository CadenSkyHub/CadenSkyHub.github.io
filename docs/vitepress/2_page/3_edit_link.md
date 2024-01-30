# 编辑链接

编辑链接可以显示链接以编辑 `Git` 管理服务（例如 `GitHub` 或 `GitLab`）上的页面。 

会在页面上出现一个 `编辑链接`, 点击可跳转到相关托管服务的编辑页面。

## 编辑链接

可以通过 `themeConfig.editLink` 选项配置来启用。

`:path` 将被页面路径替换。

``` javascript
export default {
    themeConfig: {
        editLink: {
          pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
        }
    }
}
```
默认情况下，这将在文档页面底部添加链接文本“编辑此页面”。 

您可以通过定义 `text` 选项来自定义此文本。

``` js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
}
```



## frontmatter 配置

可以使用 `frontmatter` 上的 `editLink` 选项单独禁用某个页面的编辑链接：

``` markdown
---
editLink: false
---
```


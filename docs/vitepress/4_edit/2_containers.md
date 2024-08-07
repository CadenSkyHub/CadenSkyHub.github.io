# 容器

自定义容器可以通过它们的类型、标题和内容来定义。

## Github 风格

### 编辑

`VitePress` 同样支持以标注的方式渲染 [GitHub 风格的警报](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)。

``` markdown
> [!note] 这里可以添加标题，非强制
> 强调用户在快速浏览文档时也不应忽略的重要信息。

---------------------------------------------------------

> [!tip] 这里可以添加标题，非强制
> 有助于用户更顺利达成目标的建议性信息。

---------------------------------------------------------

> [!important] 这里可以添加标题，非强制
> 对用户达成目标至关重要的信息。

---------------------------------------------------------

> [!warning] 这里可以添加标题，非强制
> 因为可能存在风险，所以需要用户立即关注的关键内容。

---------------------------------------------------------

> [!caution] 这里可以添加标题，非强制
> 行为可能带来的负面影响。
```



### 展示

> [!note] 这里可以添加标题，非强制 NOTE
> 强调用户在快速浏览文档时也不应忽略的重要信息。

---------------------------------------------------------

> [!tip] 这里可以添加标题，非强制 TIP
> 有助于用户更顺利达成目标的建议性信息。

---------------------------------------------------------

> [!important] 这里可以添加标题，非强制 IMPORTANT
> 对用户达成目标至关重要的信息。

---------------------------------------------------------

> [!warning] 这里可以添加标题，非强制 WARNING
> 因为可能存在风险，所以需要用户立即关注的关键内容。

---------------------------------------------------------

> [!caution] 这里可以添加标题，非强制 CAUTION
> 行为可能带来的负面影响。



## VitePress 风格

### 编辑

``` markdown
::: info 这里可以添加标题，非强制
info 容器
:::

---------------------------------------------------------

::: tip 这里可以添加标题，非强制
tip 容器
:::

---------------------------------------------------------

::: warning 这里可以添加标题，非强制
warning 容器
:::

---------------------------------------------------------

::: danger 这里可以添加标题，非强制
warning 容器
:::

---------------------------------------------------------

::: details 这里可以添加标题，非强制
折叠容器
:::
```

### 展示

::: info 这里可以添加标题，非强制
info 容器
:::

---------------------------------------------------------

::: tip 这里可以添加标题，非强制
tip 容器
:::

---------------------------------------------------------

::: warning 这里可以添加标题，非强制
warning 容器
:::

---------------------------------------------------------

::: danger 这里可以添加标题，非强制
warning 容器
:::

---------------------------------------------------------

::: details 这里可以添加标题，非强制
折叠容器
:::
# 开启行号



可以通过以下配置为每个代码块启用行号：

``` typescript {3-5}
export default defineConfig({
    themeConfig,
    markdown: {	// [!code focus:3]
        lineNumbers: true
    }
})
```

> [!caution] 注意
>
> 是在配置文件中，`config.ts` 中，不是在主题配置文件中。
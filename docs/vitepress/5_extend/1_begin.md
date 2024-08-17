# 扩展


## 表格超出左右滑动

实现原理，给 `table` 添加一个父级 `div`，然后给 `div` `overflow: auto` 属性

`config.ts`

```ts {11-21}
export default defineConfig({
    markdown: {
        lineNumbers: true,
        codeCopyButtonTitle: '复制代码',
        /*
        * vitepress 用 markdown-it 进行渲染
        * 如果要为 table 增加一个父节点，只能这么写
        * config -> markdown-it 扩展
        *           .use 使用插件
        * */
        config(md) {
            md.use((md) => {
                md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
                    return '<div class="table_p">\n<table>';
                };

                md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
                    return '</table>\n</div>';
                };
            })
        },
    },
})
```

`custom.css`

``` css
.table_p{
    overflow: auto;
}

/* 文档内所有表格为 100% 宽度 */
.vp-doc table{
    display: table;
    min-width: 100%;
}
```


# 代码提示

确保已经安装了 ` Tailwind CSS IntelliSense`

## vscode

在 `.vscode/settings.json` 中配置

``` json
{
    "tailwindCSS.classAttributes": [  // 属性标签，添加 属性名即可
        "class",
        "className",
        "ngClass"
    ],
    "tailwindCSS.classFunctions": [  // 函数属性，添加 函数名即可
        "cva",
        "cn",
        "tv"
    ]
}
```
# 头部导航栏
设置头部，`logo` 和顶部导航

## 网站标题

默认情况下，导航的展示会引用 `config.title` 配置的站点标题。如果想更改导航上显示的内容，可以在 `themeConfig.siteTitle`选项中定义自定义文本，将会覆盖`config.title`的内容显示在左上角。

::: code-group

``` javascript
export default {
    themeConfig: {
        siteTitle: 'myNote'
    }
}
```

``` typescript
import { DefaultTheme } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
    siteTitle: "myNote"
}
```

:::

## LOGO

可以通过配置 `logo` 来展示网站的 `logo` ，`logo` 应该直接放在 `public` 中，并定义为绝对路径。

::: danger 提示

静态目录 `public` 应该在 `docs` 目录中

:::

::: code-group

``` javascript
import { defineConfig } from "vitepress";

export default defineConfig({
    themeConfig: {
        logo:'/public/logo.png'
    }
})
```



``` typescript
import { DefaultTheme } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
    logo:"/public/logo.png",
}
```

:::

添加 `logo` 后将会与网站标题一起显示。如果只想要展示 `logo` 而隐藏标题，请将 `siteTitle` 设置为 `false`。

::: code-group

``` javascript
import { defineConfig } from "vitepress";

export default defineConfig({
    themeConfig: {
        logo:'/public/logo.png',
        siteTitle:false,
    }
})
```



``` typescript
import { DefaultTheme } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
    siteTitle: false,
    logo:"/public/logo.png",
}
```



:::



## 顶部导航

### 基本导航

可以通过定义 `themeConfig.nav` 选项来添加链接到导航。`Array` 类型

- `text`：导航栏实际显示的文本；
- `link`： 链接的路径设置为不带 `.md` 前缀的实际文件，始终以 `/` 开头；

::: code-group

``` javascript
export default {
    themeConfig: {
        nav: [
            {text: '首页', link: '/index'},
            {text: 'VitePress', link: '/VitePress/1.导航栏'},
            {text: '百度N下', link: 'http://www.baidu.com'}
        ]
    }
}
```

``` typescript
import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: 'VitePress', link: '/vitepress/1_begin/1_begin' },
]
```

:::



### 下拉导航

- `items`：下拉菜单

::: code-group

``` javascript
export default {
    themeConfig: {
        nav: [
            {text: '首页', link: '/index'},
            {text: 'VitePress', link: '/VitePress/1.导航栏'},
            {
                text: '查看更多',
                items: [
                    {text: 'BaiDu', link: 'http://www.baidu.com'},
                    {text: 'GooGle', link: 'http://www.googel.com'},
                    {text: 'Bing', link: 'http://www.bing.com'}
                ]
            }
        ]
    }
}

```

``` typescript
import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {text:'首页',link:'index'},
    { text: 'VitePress', link: '/vitepress/1_begin/1_begin' },
    {
        text: '搜索',
        items: [
            { text: 'Baidu', link: 'https://www.baidu.com', target: '_target' },
            { text: 'Google', link: 'https://www.google.com', target: '_self' },
            { text: 'Bing', link: 'https://www.bing.com' }]
    }
]
```

:::



下拉菜单还可继续嵌套

::: code-group

``` javascript
export default {
    themeConfig: {
        nav: [
            {text: '首页', link: '/index'},
            {text: 'VitePress', link: '/VitePress/1.导航栏'},
            {
                text: '查看更多',
                items: [
                    {
                        text: '百度毒瘤',
                        // 这里嵌套二级
                        items: [
                            {text: '百度一下', link: 'http://www.baidu.com'},
                            {text: '百度百科', link: 'http://www.baidu.com'},
                            {text: '百度翻译', link: 'https://fanyi.baidu.com'},
                        ]
                    },
                    {text: 'Google一下', link: 'http://www.googel.com'},
                    {text: 'Bing一下', link: 'http://www.bing.com'}
                ]
            }
        ]
    }
}
```



``` typescript
import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {text:'首页',link:'index'},
    { text: 'VitePress', link: '/vitepress/1_begin/1_begin' },
    {
        text: '搜索',
        items: [
            { 
                text: '百度毒瘤', 
                items:[
                    {text:'百度百科', link:'https://www.baidu.com'},
                    {text:'百度知道', link:'https://www.baidu.com'},
                    {text:'百度贴吧', link:'https://www.baidu.com'},
                ], 
            },
            { text: 'Google', link: 'https://www.google.com', target: '_self' },
            { text: 'Bing', link: 'https://www.bing.com' }]
    }
]
```

:::

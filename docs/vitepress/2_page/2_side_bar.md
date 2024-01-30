# 侧边栏
设置侧边栏，两种模式，如果用 `Array` 则为首页，如果用 `Object` 则可以为各个页面配置

## 通用侧边栏

侧边栏是文档的主要导航块。 

- 可以在 `themeConfig.sidebar` 中配置侧边栏菜单。
- 也可以模块化，`ts` 采用了模块化。可查看 `ts` 相关示例代码。

`Array` 类型

::: code-group

``` javascript
export default {
    themeConfig: {
        sidebar: [
            {
                text: '栏目名称',
                items: [
                  { text: '导航栏', link: '/1.导航栏' },
                  { text: '侧边栏', link: '/2.侧边栏' },
                  ...
                ]
            }
        ]
    }
}
```



``` typescript
/*
* theme.ts <- 当前文件是拆分的 theme 配置文件
*/

import { DefaultTheme } from "vitepress";
import { indexSideBar } from "../sidebar";	// 将 sidebar 拆分到了 sidebar.ts 文件中

export const themeConfig: DefaultTheme.Config = {
    sidebar: indexSideBar,
}

/*
* sidebar.ts
*/
import { DefaultTheme } from "vitepress";

export const indexSideBar:DefaultTheme.SidebarItem[] = [
    {
        text:'栏目名称',
        items:[
            {text:'栏目1',link:'/文件链接/根目录为docs'},
            {text:'栏目2',link:'/文件链接/根目录为docs'}
        ]
    }
]
```

:::

## 不同页面不同侧边栏

::: danger :exclamation:警告

注意：这时， `sidebar` 应为  `Object` 类型

:::

::: code-group

``` javascript
export default {
    themeConfig: {
        sidebar: {
            // VitePress 页面下
            '/VitePress/': [
                {
                    text: '主题配置',
                    items: [
                        {text: '导航栏', link: '/VitePress/1.导航栏'},
                        {text: '侧边栏', link: '/VitePress/2.侧边栏'},
                    ]
                },
                 {
                    text: '编写',
                    items: [
                        {text: 'MarkDown', link: '/VitePress/3.MarkDown'},
                        {text: 'Frontmatter', link: '/VitePress/4.Frontmatter'},
                    ]
                }
            ],
            
            // 工具页面下
            '/Git/': [
                {
                    text: 'Git基本使用',
                    items: [
                        {text: '安装', link: '/Git/1.Git安装'},
                        {text: '配置', link: '/Git/2.Git配置'},
                    ]
                },
                 {
                    text: 'GitHub',
                    items: [
                        {text: '注册/登录', link: '/Git/GitHub/1.注册/登录'},
                        {text: '创建仓库', link: '/Git/GitHub/2.创建仓库'},
                    ]
                }
            ]
        }
    }
}
```



``` typescript
/*
* 建议将不同页面拆分为不同的 sidebar
* 比如：index 页面的为 docs/sidebar.ts
*      vitepress 页面的为 vitepress/sidebar.ts
*	   tools 页面的为 tools/sidebar.ts
*/

/*
* theme.ts <- 当前文件是拆分的 theme 配置文件
*/
import { DefaultTheme } from "vitepress";
import { indexSideBar } from "../sidebar";
import { toolsSideBar } from "../tools/sidebar";
import { vitePressSideBar } from "../vitepress/sidebar";

export const themeConfig: DefaultTheme.Config = {
    sidebar: {
        '/':indexSideBar,
        '/vitepress/': vitePressSideBar,
        '/tools/':toolsSideBar,
    }
}


/*
* docs/sidebar.ts
*/
import { DefaultTheme } from "vitepress";

export const indexSideBar:DefaultTheme.SidebarItem[] = [
    {
        text:'栏目一',
        items:[
            {text:'栏目1',link:'/文件链接/根目录为docs'},
            {text:'栏目2',link:'/文件链接/根目录为docs'}
        ]
    },
    {
        text:'栏目二',
        items:[
            {text:'栏目1',link:'/文件链接/根目录为docs'},
            {text:'栏目2',link:'/文件链接/根目录为docs'}
        ]
    },
]


/*
* vitepress/sidebar.ts
*/
import { DefaultTheme } from "vitepress";

export const indexSideBar:DefaultTheme.SidebarItem[] = [
    {
        text:'栏目一',
        items:[
            {text:'栏目1',link:'/文件链接/根目录为docs'},
            {text:'栏目2',link:'/文件链接/根目录为docs'}
        ]
    },
    {
        text:'栏目二',
        items:[
            {text:'栏目1',link:'/文件链接/根目录为docs'},
            {text:'栏目2',link:'/文件链接/根目录为docs'}
        ]
    },
]


/*
* tool/sidebar.ts
*/
import { DefaultTheme } from "vitepress";

export const indexSideBar:DefaultTheme.SidebarItem[] = [
    {
        text:'栏目一',
        items:[
            {text:'栏目1',link:'/文件链接/根目录为docs'},
            {text:'栏目2',link:'/文件链接/根目录为docs'}
        ]
    },
    {
        text:'栏目二',
        items:[
            {text:'栏目1',link:'/文件链接/根目录为docs'},
            {text:'栏目2',link:'/文件链接/根目录为docs'}
        ]
    },
]
```



:::



## 是否可折叠

添加 `collapsed` 选项，将会显示折叠按钮

``` javascript
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'A',
        collapsed: false,
        items: [...]
      }
    ]
  }
}
```

默认情况下，都是“打开”的。

如果希望它们在初始页面加载时“关闭”，请将选项设置为`collapsed:true`

``` javascript
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        collapsed: true,
        items: [...]
      }
    ]
  }
}
```
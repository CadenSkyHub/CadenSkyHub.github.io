# 主题配置
主题的一些配置

页面中特定菜单的文字什么的

## 目录标题文本
右侧的 `目录` 标题，改为中文
``` typescript
themeConfig: {
    outlineTitle: '在本页中'
}
```

## 上下页文本

`上一页` `下一页` 改为中文

``` typescript
export default {
    themeConfig: {
        docFooter: {
          prev: '上一页',
          next: '下一页'
        }
    }
}
```

## 手机端菜单文本

 `Menu` 菜单，改为中文，仅在菜单栏收起后展示

``` typescript
export default {
    themeConfig: {
        sidebarMenuLabel:'菜单'
    }
}
```

## 主题切换文本

仅在菜单栏收起后展示

``` typescript
export default {
    themeConfig: {
        darkModeSwitchLabel:'切换主题'
    }
}
```



## 浅色主题按钮悬停

用于自定义悬停时显示的浅色模式开关标题。

``` typescript
export default {
    themeConfig: {
        lightModeSwitchTitle:'切换至暗色主题',
    }
}
```



## 深色主题按钮悬停

用于自定义悬停时显示的深色模式开关标题。

``` typescript
export default {
    themeConfig: {
        darkModeSwitchTitle:'切换至亮色主题',
    }
}
```



## 目录输出层级

设置目录输出层级，默认 `2` 
- `number`：只输出这一级目录
- `[number,number]`：输出 两层 目录
- `'deep'`：全部输出


``` typescript
export default {
    themeConfig: {
        outline: [2,3]  // 输出 ## 和 ### 目录
        // outline: 2   只输出 ## 目录
        // outline: 'deep'  全部输出
    }
}
```



## 返回顶部

用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示。

``` typescript
export default {
    themeConfig: {
        returnToTopLabel:'返回顶部',
    }
}
```



## 外链图标

是否在 `markdown` 中的外部链接旁显示外部链接图标。

默认为 `false`

``` typescript
export default {
    themeConfig: {
        externalLinkIcon:true,
    }
}
```



## 主题接口
``` typescript
export interface Config {
    /**
     * The logo file of the site.
     * 网站的 logo 地址
     */
    logo?: ThemeableImage

    /**
     * Overrides the link of the site logo.
     * 点击 logo 跳转的链接
     */
    logoLink?: string

    /**
     * Custom site title in navbar. If the value is undefined,
     * `config.title` will be used.
     * 导航栏中的自定义网站标题。如果未定义，则使用 config 配置文件的
     */
    siteTitle?: string | false

    /**
     * Custom header levels of outline in the aside component.
     * 右侧 目录 的输出级别。默认 2 级
     * @default 2
     */
    outline?: Outline | Outline['level'] | false

    /**
     * @deprecated Use `outline.label` instead.
     * 右侧的 目录 标题的文本
     * @default 'On this page'
     */
    outlineTitle?: string

    /**
     * The nav items.
     * 导航栏
     */
    nav?: NavItem[]

    /**
     * The sidebar items.
     * 侧边栏
     */
    sidebar?: Sidebar

    /**
     * Set to `false` to prevent rendering of aside container.
     * Set to `true` to render the aside to the right.
     * Set to `left` to render the aside to the left.
     * 是否显示 目录，定义左右
     * @default true
     */
    aside?: boolean | 'left'

    /**
     * Info for the edit link. If it's undefined, the edit link feature will
     * be disabled.
     * 编辑链接可以显示链接以编辑 Git 管理服务（例如 GitHub 或 GitLab）上的页面。
     */
    editLink?: EditLink

    /**
     * @deprecated Use `lastUpdated.text` instead.
     *
     * Set custom last updated text.
     * 设置上次更新时间 的文本。
     * @default 'Last updated'
     */
    lastUpdatedText?: string

    lastUpdated?: LastUpdatedOptions

    /**
     * Set custom prev/next labels.
     * 设置 上一页下一页 的文本
     */
    docFooter?: DocFooter

    /**
     * The social links to be displayed at the end of the nav bar. Perfect for
     * placing links to social services such as GitHub, Twitter, Facebook, etc.、
     * 要在导航栏末尾显示的社交链接。
     */
    socialLinks?: SocialLink[]

    /**
     * The footer configuration.
     * 页脚配置。
     */
    footer?: Footer

    /**
     * @default 'Appearance'
     * 主题切换 的文本 配置
     */
    darkModeSwitchLabel?: string

    /**
     * @default 'Menu'
     * 菜单的文本配置
     */
    sidebarMenuLabel?: string

    /**
     * @default 'Return to top'
     * 返回顶部的文本配置
     */
    returnToTopLabel?: string

    /**
     * Set custom `aria-label` for language menu button.
     * 为语言菜单按钮设置自定义“标签”
     * @default 'Change language'
     */
    langMenuLabel?: string

    search?:
      | { provider: 'local'; options?: LocalSearchOptions }
      | { provider: 'algolia'; options: AlgoliaSearchOptions }

    /**
     * The carbon ads options. Leave it undefined to disable the ads feature.
     * 碳广告选项。将其保留为未定义以禁用广告功能。
     */
    carbonAds?: CarbonAdsOptions

    /**
     * Customize text of 404 page.
     * 覆盖 404 页面设置
     */
    notFound?: NotFoundOptions
```
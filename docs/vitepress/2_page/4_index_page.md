# 首页

`VitePress` 默认主题提供主页布局。 您可以通过在任何页面 通过 `frontmatter` 中指定 `layout: home` 使用它。

``` yaml
---
layout: home
---
```
但是，仅此选项不会有太大作用。 您可以通过设置额外的其他选项（例如 `hero` 和 `features` ）将几个不同的预模板“部分”添加到主页。

## Hero 选项

Hero 部分位于主页的顶部。

::: code-group

``` markdown
---
layout: home

hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---
```


``` typescript [类型提示]
interface Hero {
  // `text' 的字符串所示。带有品牌颜色，通常会很短，例如项目名称。
  name?: string

  // hero 部分的文本。这将被定义成`h1`标签
  text: string

  // Tagline 会展示在 `text` 下面.
  tagline?: string

  // action 按钮显示在 hero 区域。
  actions?: HeroAction[]
}

interface HeroAction {
  // 按钮的的主题颜色，默认为 `brand`.
  theme?: 'brand' | 'alt'

  // 按钮的文案.
  text: string

  // 按钮链接.
  link: string
}
```



:::



::: details 自定义 name 颜色 

可以通过覆盖 `--vp-home-hero-name-color` 变量来自定义此颜色。

``` css
/* .vitepress/theme/custom.css */

:root {
  --vp-home-hero-name-color: blue;
}
```

也可以通过组合 `--vp-home-hero-name-background` 来进一步自定义 `name` 为渐变色。

``` css
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
```

:::





## Features 配置

将 `features` 选项传递给 frontmatter。

可以为每个 `feature` 提供一个图标，可以是表情符号（Emoji）或任何类型的图像。

- 当配置的图标是图片（svg, png, jpeg...）时，必须提供合适的宽度和高度的图标；
- 还可以在需要时配置其描述、固有大小以及深色和浅色主题下的不同表现。

``` markdown
---
layout: home

features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon:
      src: /cool-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
  - icon:
      dark: /dark-feature-icon.svg
      light: /light-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
---
```



**类型提示**

``` typescript
interface Feature {
  // 在每个 feature 框中显示图标
  icon?: FeatureIcon

  // feature 的标题
  title: string

  // feature 的详情
  details: string

  // 点击 feature 组件时的链接，可以是内部链接，也可以是外部链接。
  //
  // 例如 `guide/reference/default-theme-home-page` 或 `https://example.com`
  link?: string

  // feature 组件内显示的链接文本，最好与 `link` 选项一起使用
  //
  // 例如 `Learn more`, `Visit page` 等
  linkText?: string

  // `link` 选项的链接 rel 属性
  //
  // 例如 `external`
  rel?: string
}

type FeatureIcon =
  | string
  | { src: string; alt?: string; width?: string; height: string }
  | {
      light: string
      dark: string
      alt?: string
      width?: string
      height: string
    }
```


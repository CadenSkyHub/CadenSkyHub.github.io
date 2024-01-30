# 开始

创建一个项目，并配置启动环境

## Step.1：创建一个文件夹

``` bash
mkdir vitepress && cd vitepress
```

## Step.2：安装 VitePress

使用 `npm init` 初始化一个项目

``` bash
npm init
```

添加 `VitePress` 作为项目的开发依赖项。

``` bash
npm add -D vitepress
```

创建第一篇文章，新建 `docs` 目录，并且新建 `index.md` 文档写入：`Hello VitePress`

``` bash
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## Step.3：启动本地开发环境

`package.json` 添加以下 scripts

``` js {3-7}
{
    ...
    "scripts": {
        "docs:dev": "vitepress dev docs",
        "docs:build": "vitepress build docs",
        "docs:serve": "vitepress serve docs"
    },
    ...      
    "dependencies": {
        "vitepress": "^1.0.0-rc.15",
        "vue": "^3.3.4"
    }
}
```
## Step.4：启动并运行

``` bash
npm run docs:dev
```

## Step.5：增加更多文档

再添加一个页面，创建一个名为 `newMd.md` 的文件，与前面创建的 `index.md` 同级。

现在你的目录结构应该是这样的。

或者创建文件夹，通过 配置 进行访问。

``` 
.
├─ docs
│  ├─ newMd.md
│  └─ index.md
└─ package.json

```
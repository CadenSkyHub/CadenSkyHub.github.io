# 部署

参考文档：[部署 VitePress 站点 ](https://vitepress.dev/zh/guide/deploy#github-pages)

## 部署到 GitHub

::: details 如何不带仓库名访问

创建仓库时，仓库名字要为： `<githubName>.github.io`。

没错，**仓库名字** ，需要带上自己的 `githubId` + `.github.io`

:::



1. 在项目的 `.github/workflows` 目录中创建一个名为 `deploy.yml` 的文件，内容如下：

``` yaml
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [main]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      # - uses: pnpm/action-setup@v2 # 如果使用 pnpm，请取消注释
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
        run: npm ci # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: |
          npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
          touch docs/.vitepress/dist/.nojekyll
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```
::: danger 注意

在您的主题配置文件 `docs/.vitepress/config.js` 中，将 `base` 属性设置为你的 `GitHub` 仓库的名称。【如果部署在根，则不需要配置 `base`】

- 例：如果你打算将你的站点部署到`https://foo.github.io/bar/`，那么你应该将`base`设置为`/bar/`。 它应该始终以斜线开头和结尾。
- 请替换对应的分支名称。例如，如果你要构建的分支是 `master`，则应将上述文件中的 `main` 替换为 `master`。

:::

2. 现在提交你的代码并将其推送到 `main` 分支。 
3. 等待 `action` 完成。 

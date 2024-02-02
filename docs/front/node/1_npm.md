# npm

## package.json

### 手动创建

在项目的根目录，创建 `package.json` 文件，写入以下 `最小内容`

``` json
{
    "name": "nodejs",	// 包/项目名称
    "version": "1.0.0",	// 版本
}
```



### 自动创建

在项目根目录

``` bash
# 初始化，创建 package.json
npm init

# 全部初始化默认值
npm init -y
```



### scripts

`package.json` 文件中的 `"scripts"` 字段用于定义一组命令

- 这些命令可以通过 `npm run` 来执行。

- 这个字段是一个对象，其中键是命令的名称，而值是要运行的实际命令字符串。

``` json {4-7}
{
  "name": "my-package",
  "version": "1.0.0",
  "scripts": {	
    "start": "node index.js",
    "test": "mocha test"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mocha": "^9.0.3"
  }
}
```

在上述例子中，`"scripts"` 字段定义了两个命令：

1. **start:**

    运行 `npm start` 时，将执行 `node index.js`。

2. **test:**

    运行 `npm test` 时，将执行 `mocha test`。

通过在命令行中运行 `npm run <script>`，你可以执行相应的脚本。

例如，使用 `npm run start` 可以启动应用程序，而 `npm run test` 可以运行测试。

> [!tip] 
>
> `"scripts"` 字段的常见用途包括：
>
> - 启动应用程序或服务器。
> - 运行测试套件。
> - 构建项目。
> - 运行代码检查或静态分析工具。
>
> 这样的配置使得项目中的常见任务能够通过简单的命令来执行，提高了项目的可维护性和开发效率。



## 命令

| 命令                                                         | 说明                                                  |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| `npm install <package>`<br />`npm i <package>`               | 安装项目的依赖项<br />默认依赖项添加到 `dependencies` |
| `npm install -g <package>`<br />`npm i -g <package>`         | 全局安装依赖项                                        |
| `npm install --save <package>`<br />`npm i -S <package>`     | 将依赖项添加到 `dependencies`                         |
| `npm install --save-dev <package>`<br />`npm i -D <package>` | 将依赖项添加到 `devDependencies`                      |
| `npm uninstall <package>`<br />`npm un <package>`            | 卸载项目的依赖项                                      |
| `npm update <package>`<br />`npm up <package>`               | 更新项目的依赖项                                      |
| `npm outdated`<br />`npm oud`                                | 检查过时的依赖项                                      |
| `npm ls`<br />`npm ll`                                       | 列出安装的所有依赖项                                  |
| `npm init`<br />`npm init -y`                                | 初始化一个新的 `package.json` 文件                    |
| `npm run`                                                    | 运行项目中定义的脚本命令                              |
| `npm publish`                                                | 将包发布到 npm 仓库                                   |
| `npm search`                                                 | 搜索包                                                |
| `npm info`                                                   | 查看包的详细信息                                      |
| `npm config`                                                 | 管理配置信息                                          |
| `npm help`                                                   | 查看帮助信息                                          |



## `dependencies` 和 `devDependencies`

### dependencies:

- **用于指定生产环境中运行项目所需要的依赖项。**
- 这些依赖项会被安装在 `node_modules` 目录下，并且在生产环境中使用。
- 使用 `npm install --save <package>` 或 `npm install -S <package>` 将包添加到 `dependencies`。

### devDependencies:

- **用于指定仅在开发和测试阶段使用的依赖项。**
- 这些依赖项不会被安装在生产环境中，只会在开发、测试和构建时使用。
- 使用 `npm install --save-dev <package>` 或 `npm install -D <package>` 将包添加到 `devDependencies`。



## 配置镜像

在使用 `npm` 时，你可以通过配置镜像源来提高包的下载速度，尤其是在国内网络环境下。

1. 查看当前配置

    ``` bash
    npm config list
    # 查看全部配置
    npm config list ls -l
    ```

2. 设置镜像源

    [阿里巴巴镜像站](https://developer.aliyun.com/mirror/NPM?spm=a2c6h.13651102.0.0.30da1b11MCJsYX)

    ``` bash
    npm config set registry http://registry.npmmirror.com
    ```

3. 验证

    可以再次运行 `npm config list` 确认是否已经成功修改 registry 配置项。

> [!tip] 切换回默认配置
>
> ``` bash
> npm config set registry https://registry.npmjs.org
> ```



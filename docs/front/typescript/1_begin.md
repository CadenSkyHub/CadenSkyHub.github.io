# 开始

官网：[TypeScript](https://www.typescriptlang.org/)

- 参考教程：[TypeScript 入门教程 (xcatliu.com)](https://ts.xcatliu.com/)
- 参考教程：[ TypeScript 教程 ](https://wangdoc.com/typescript/intro)

## 安装

全局安装

``` bash
npm install typescript -g
```



## tsc命令

详细：[《阮一峰《TypeScript 教程》](https://www.bookstack.cn/read/wangdoc-typescript-tutorial/docs-tsc.md)

``` bash
tsc --help
```

**常用命令**

| 命令                                 | 说明                                                         | 示例                             |
| ------------------------------------ | ------------------------------------------------------------ | -------------------------------- |
| **`tsc`**                            | 编译当前项目<br />（使用 tsconfig.json 文件中的配置）。      | `tsc`                            |
| **`tsc file1.ts`**                   | 编译指定文件<br />（忽略 tsconfig.json，使用默认编译器选项）。 | `tsc app.ts util.ts`             |
| **`tsc --watch`**                    | 监视输入文件的更改，<br />并在文件更改时自动重新编译。       | `tsc --watch` 或 `tsc -w`        |
| **`tsc -b`**                         | 构建工作目录中的复合项目。                                   | `tsc -b`                         |
| **`tsc --init`**                     | 在工作目录中创建 <br />tsconfig.json 文件，使用推荐设置。    | `tsc --init`                     |
| **`tsc -p ./path/to/tsconfig.json`** | 编译位于指定路径的 <br />TypeScript 项目。                   | `tsc -p ./path/to/tsconfig.json` |
| **`tsc --help --all`**               | 显示所有可能的编译器选项的详细信息。                         | `tsc --help --all`               |
| **`tsc --noEmit`**                   | 编译当前项目，但不生成输出文件。                             | `tsc --noEmit`                   |
| **`tsc --target esnext`**            | 编译当前项目，<br />指定目标 JavaScript 版本为 ESNext。      | `tsc --target esnext`            |



## tsconfig.json

可以使用以下命令，生成一个 `tsconfig.json` 

也可以自己新建一个 `tsconfig.json` 文件进行配置

参考：[《阮一峰《TypeScript 教程》](https://www.bookstack.cn/read/wangdoc-typescript-tutorial/docs-tsconfig.json.md)

``` bash
tsc --init
```



| 配置项                                 | 说明                                 | 示例                            |
| -------------------------------------- | ------------------------------------ | ------------------------------- |
| **`compilerOptions.target`**           | 设置生成的 JavaScript 版本。         | `"target": "es5"`               |
| **`compilerOptions.module`**           | 指定生成的模块代码。                 | `"module": "commonjs"`          |
| **`compilerOptions.outDir`**           | 指定输出目录。                       | `"outDir": "./dist"`            |
| **`compilerOptions.rootDir`**          | 指定源文件目录。                     | `"rootDir": "./src"`            |
| **`compilerOptions.strict`**           | 启用所有严格类型检查选项。           | `"strict": true`                |
| **`compilerOptions.noImplicitAny`**    | 禁止隐式的 `any` 类型。              | `"noImplicitAny": true`         |
| **`compilerOptions.sourceMap`**        | 生成 JavaScript 文件的源映射。       | `"sourceMap": true`             |
| **`compilerOptions.noEmit`**           | 不生成输出文件。                     | `"noEmit": true`                |
| **`compilerOptions.esModuleInterop`**  | 启用模块间的命名空间导入。           | `"esModuleInterop": true`       |
| **`compilerOptions.strictNullChecks`** | 启用严格的 null 检查。               | `"strictNullChecks": true`      |
| **`include`**                          | 指定要包含的文件和文件夹的匹配模式。 | `"include": ["./src/**/*.ts"]`  |
| **`exclude`**                          | 指定要排除的文件和文件夹的匹配模式。 | `"exclude": ["./node_modules"]` |



**示例**

``` json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "noImplicitAny": true,
    "sourceMap": true,
    "noEmit": false,
    "esModuleInterop": true,
    "strictNullChecks": true
  },
  "include": [
    "./src/**/*.ts"
  ],
  "exclude": [
    "./node_modules"
  ]
}
```



## 问题

### tsc -w 在 wsl 中不生效

[解决文档](https://stackoverflow.com/questions/76186343/how-do-i-get-typescript-incremental-compilation-tsc-w-working-on-vscode-when)

在 `tsconfig.json` 中配置：

``` json
{ 
  {
    ...
  },
  "watchOptions": {
    "watchFile": "dynamicPriorityPolling",
    "watchDirectory": "fixedpollinginterval"
  }
}
```
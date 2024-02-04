# path

表示的路径，通过 `path` 可以获取各种路径

## resolve

`path.resolve([...paths])`

用来生成一个绝对路径

- 如果直接调用 `resolve()` 则会直接返回当前运行目录。

    通过不同的方式执行时，工作目录是会发生变化的，因为是绝对路径

- 如果将一个`相对路径`传入 `resolve()` 会自动计算 `绝对路径`

    但是，调用不同，计算结果也不同

- 通常如何使用？

    一般，我们会传入两个参数

    ​	一个是当前工作目录的绝对路径

    ​	一个是相对路径

```javascript
const path = require('path')

// 当前工作路径
const nowWorkPath = path.resolve()
console.log(nowWorkPath)    // F:\nodejs

// 计算路径，不同的执行方式，结果会不同
const comPath = path.resolve('./node_learn')
console.log(comPath)    // F:\nodejs\node_learn
```

**安全计算路径**

::: code-group

``` javascript [ES] {7,10,13}
// ES 模块化中没有 __dirname 和 __filename 这两个全局变量
// 可以通过以下方式来解决
import path from 'path'
import {fileURLToPath} from 'url'

// 获取 __filename
const __filename = fileURLToPath(import.meta.url)

// 获取 __dirname
const __dirname = path.dirname(__filename)

// 安全计算路径
const safeComPath = path.resolve(__dirname, './src')

console.log(__filename) 	// F:\nodejs\index.js
console.log(__dirname)  	// F:\nodejs
console.log(safeComPath)    // F:\nodejs\src
```



``` javascript [commonJS] {3}
// commonJS 写法
// 安全计算路径，固定 绝对路径，传入相对路径来计算
const safeComPath = path.resolve(__dirname, './src')
console.log(safeComPath)    // F:\nodejs\src
```

:::



> [!tip] 提示
>
> 在 `node v20.10.0` 版本后，可直接使用 `import.meta.filename` 和 `import.meta.dirname` 来获取当前文件路径和文件夹路径
>
> ```javascript
> const filename = import.meta.filename	// [!code ++]
> const dirname = import.meta.dirname	// [!code ++]
> 
> console.log(filename, dirname)
> ```


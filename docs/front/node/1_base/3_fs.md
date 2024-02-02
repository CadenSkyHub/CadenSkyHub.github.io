# fs

操作磁盘中的文件，文件操作，`io` 操作

**该笔记中记录的均为 `异步操作`**

> [!warning] 提示
>
> ``` javascript
> // 同步操作
> import fs from 'fs'           // ES 导包
> const fs = require('fs')    // commonJS 导包
> 
> // 异步操作	// [!code focus:3]
> import fs from 'fs/promises'          // ES 导包
> import fs = require('fs/promises')    // commonJS 导包
> ```
>
> 



`readFile()` 读取文件

`appendFile()` 创建新文件，或将数据添加到已有文件中

`mkdir()` 创建目录

`rmdir()` 只可删除空目录

`rm()` 删除文件或目录

`rename()` 重命名

`copyFile()` 复制文件



> [!caution] 注意
>
> **在使用路径时，尽量使用安全计算路径，因为不同的运行形式(例如在 idea 和终端运行)，路径可能会出错**



## readFile

读取文件

文件的结果是 `Buffer` 对象，`Buffer` 对象是 `Node.js` 中用于处理二进制数据的对象

```javascript
import fs from 'fs/promises'
import path from "path";

const safePath = path.resolve(import.meta.dirname, './readme.txt')

const buffer = fs.readFile(safePath)	// [!code focus:4]
buffer.then(res => {
    console.log(res.toString())
})
```



## appendFile

如果文件不存在则创建新文件

如果文件存在则追加内容到文件中

```javascript
import fs from 'fs/promises'
import path from "path";

const safePath = path.resolve(import.meta.dirname, './readme.txt')

const data = '红红火火恍恍惚惚\n哈哈哈哈哈哈哈哈'	// [!code focus:6]
fs.appendFile(safePath, data).then(() => {
    console.log('文件创建及写入完成')
}).catch(e => {
    console.log('写入错误：', e)
})
```





## mkdir

创建目录，路径为新目录路径

::: code-group

```javascript [单层目录]
import fs from 'fs/promises'
import path from "path";

const dirPath = path.resolve(import.meta.dirname, './src')

fs.mkdir(dirPath)	// [!code focus:3]
    .then(() => console.log('创建目录成功'))
    .catch(e => console.log('创建目录失败', e))
```



```javascript [递归创建] {6}
import fs from 'fs/promises'
import path from "path";

const dirPath = path.resolve(import.meta.dirname, './src/abc')

fs.mkdir(dirPath, {recursive: true})    // [!code focus:3]
    .then(() => console.log('创建目录成功'))
    .catch(e => console.log('创建目录失败', e))
```

:::

## rmdir

> [!warning] 注意
>
> 只可删除空目录，如果非空目录，请使用 `rm()` 递归删除

```javascript
import fs from 'fs/promises'
import path from "path";

const dirPath = path.resolve(import.meta.dirname, './src')

fs.rmdir(dirPath)	// [!code focus:3]
    .then(() => console.log('删除文件夹成功'))
    .catch(e => console.log('删除文件夹失败', e))
```

## rm

删除文件或目录

> ![warning] 重要提示
>
> 递归删除注意了，会删除文件夹下所有所有的内容

::: code-group

``` javascript [删除文件]
import fs from 'fs/promises'
import path from "path";

const filePath = path.resolve(import.meta.dirname, './fuck.txt')

fs.rm(filePath)	// [!code focus:3]
    .then(() => console.log('文件删除成功'))
    .catch(e => console.log('文件删除失败', e))
```



```javascript [递归删除目录]
import fs from 'fs/promises'
import path from "path";

const filePath = path.resolve(import.meta.dirname, './src')

fs.rm(filePath, {recursive: true})	// [!code focus:3]
    .then(() => console.log('文件夹及内容删除成功'))
    .catch(e => console.log('文件夹及内容删除失败', e))
```

:::



## rename

重命名，可重命名文件夹以及文件

::: code-group

```javascript [重命名文件夹]
import fs from 'fs/promises'
import path from "path";

const oldDirPath = path.resolve(import.meta.dirname, './src')	// [!code focus:6]
const newDirPath = path.resolve(import.meta.dirname, './rsc')

fs.rename(oldDirPath, newDirPath)
    .then(() => console.log('文件夹重命名成功'))
    .catch(e => console.log('文件夹重命名失败', e))
```

```javascript [重命名文件]
import fs from 'fs/promises'
import path from "path";

const oldFilePath = path.resolve(import.meta.dirname, './readme.txt')	// [!code focus:6]
const newFilePath = path.resolve(import.meta.dirname, './fuck.txt')

fs.rename(oldFilePath, newFilePath)
    .then(() => console.log('文件重命名成功'))
    .catch(e => console.log('文件重命名失败', e))
```

:::

## copyFile

复制文件

``` javascript
import fs from 'fs/promises'
import path from "path";

const oldFilePath = path.resolve(import.meta.dirname, './fuck.txt')
const newFilePath = path.resolve(import.meta.dirname, './rsc/fuck.txt')

fs.copyFile(oldFilePath, newFilePath)	// [!code focus:3]
    .then(() => console.log('文件复制成功'))
    .catch(e => console.log('文件复制失败', e))
```


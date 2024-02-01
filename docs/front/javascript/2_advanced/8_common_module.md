# commonJS 模块化

> [!note] 提示
>
> `node` 默认使用的模块规范就是 `commonJS `
>
> 所以，在 `package.json` 文件中的 `type` 可以删掉，或者赋予 `"type": "commonjs",`
>
> ``` javascript
> // package.json 文件，可用 npm init 生成
> 
> {
>     "type": "common"   // [!code ++]
> }
> ```



> [!caution] 注意
>
> 在 `commonJS ` 中，扩展名可不写，也就是 `.js`
>
> 自定义的模块，必须使用 `相对路径`，也就是 `./` 开头

## 单个导出

当我们在其他模块引入当前模块时， `require` 函数返回的就是 `exports`

### 导出

`exports` 导出为一个对象，所以要将导出的内容添加到对象中。

``` javascript
const a = 1
const b = 2

console.log(exports)    // {}

exports.a = a	// [!code focus:3]
exports.b = b
exports.c = '100'
```



### 导入

`require('模块路径')`

```javascript
// 整体导入
const index2 = require('./index2')
console.log(index2.a, index2.b, index2.c)	// 1 2 100

// 解构赋值
const {a, b, c} = require('./index2.js')
console.log(a, b, c)	// 1 2 100
```



## 多个导出

### 导出

`moudle.exports`

```javascript
const a = 1
const b = 2

// 同时导出多个值
module.exports = {	// [!code focus:5]
    a,
    b,
    c: 1000,
}
```



### 导入

导入方式和单个导入一致

``` javascript
// 整体导入
const index2 = require('./index2')
console.log(index2.a, index2.b, index2.c)	// 1 2 100

// 解构赋值
const {a, b, c} = require('./index2.js')
console.log(a, b, c)	// 1 2 100
```


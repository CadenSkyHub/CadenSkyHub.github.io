# es 模块化



现在，普遍使用 `ES6` 进行模块化

> [!caution] 注意
>
> 个人在使用过程中，如果不使用其他第三方包时，例：`vite`,`babel` 等编译时
>
> 绝对路径的文件后缀必须要添加。也就是 `./xx/xx.js`
>
> ``` javascript
> import math from "./js/math.js"
> ```
>



> [!note] 示例：文件夹结构
>
> ``` bash
> - package
> 	|---- main.js
> 	|---- index.html
> 	|---- modules
> 			|---- math.js
> ```

## 统一导出

### 导出

在文件末尾，通过 `export {}` 来统一导出

``` javascript
// modules/math.js
const sub = (a, b) => a - b
const sum = (a, b) => a + b

export {  // [!code focus:4]
    sub,
    sum
}
```

### 导入

- 解构导入

  ``` javascript {2}
  // main.js
  import {sub, sum} from "./modules/math.js";
  
  console.log(sub(1, 2));
  console.log(sum(1, 2)); 
  ```

- 别名全部导入

  ``` javascript {2}
  // main.js
  import * as math from './modules/math.js'
  
  console.log(math.sub(1,2));
  console.log(math.sum(1,2));

## 分别导出

### 导出

在每个方法、变量或其他类型前，使用 `export` 进行导出

``` javascript
// modules/math.js
export const sub = (a, b) => a - b
export const sum = (a, b) => a + b
```

### 导入

- 解构导入

  ``` javascript {2}
  // main.js
  import {sub, sum} from "./modules/math.js";
  
  console.log(sub(1, 2));
  console.log(sum(1, 2));  
  ```

- 别名全部导入

  ``` javascript {2}
  // main.js
  import * as math from './modules/math.js'
  
  console.log(math.sub(1,2));
  console.log(math.sum(1,2));
  ```

  

## 默认导出

### 导出

默认导出使用 `export default {}` 进行导出

``` javascript
const sub = (a, b) => a - b
const sum = (a, b) => a + b

export default{   // [!code focus:4]
    sub,
    sum
}
```

### 导入

- 在导入时，名称可以自定义，**但是不可以用 `解构` 方式导入。**

  ``` javascript {2}
  // main.js
  import selfName from "./modules/math.js";
  
  console.log(selfName.sub(1, 2));
  console.log(selfName.sum(1, 2)); 
  ```

- 别名导入

  - 注意： **这里的 `default` 是固定值！不可更改！**

  ``` javascript {2}
  // main.js
  import {default as mat} from './modules/math.js'
  
  console.log(mat.sub(1,2));
  console.log(mat.sum(1,2));
  ```

  

## 前端

在使用 `ES6` 模块化时，引入 js 文件要使用 `type = module`

```html
<script src="./main.js" type="module"></script>
```



## nodejs

在使用 `ES6` 模块化时，需要在 `package.json` 中添加 `"type":"module"`

``` javascript
// package.json 文件，可用 npm init 生成

{
    "type": "module"   // [!code ++]
}
```
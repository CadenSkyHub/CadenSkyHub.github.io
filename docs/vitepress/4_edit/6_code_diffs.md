# 代码块差异

可以对代码的 `添加行` 或 `删除行` 进行标记

> [!caution] 注意
>
> `// [!code ++]` 中，`//` 与 `[!code ++]` 之间有一个空格，不可忽略
>
> `// [!code --]` 中，`//` 与 `[!code --]` 之间有一个空格，不可忽略

## 输入

在一行上添加注释将创建该行的差异，同时保留代码块的颜色。

`// [!code --]`

`// [!code ++]`

````
``` js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]	 // [!code --]
      msg: 'Added'   // [!code ++]	 // [!code ++]
    }
  }
}
```
````





## 展示

``` js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```
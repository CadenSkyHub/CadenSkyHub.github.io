# 代码块聚焦

可以对某一行或多行代码进行聚焦。

> [!caution] 注意
>
> `// [!code focus]` 中，`//` 与 `[!code focus]` 之间有一个空格，不可忽略

## 输入

在某一行上添加 `// [!code focus]` 注释将聚焦它并模糊代码的其他部分。

此外，可以使用 `// [!code focus:<lines>]` 定义要聚焦的行数。

::: code-group

`````[一行]
``` javascript
export default {
  data () {
    return {
      'code':'focus!'  // [!code focus]	// [!code focus]
    }
  }
}
```
`````





````[多行]
``` javascript
export default {
  data () {
    return {
      'code':'focus!'     // [!code focus:5] // [!code focus:5] 代表从当前行开始，往下 5 行
      'code':'focus!'
      'code':'focus!'
      'code':'focus!'
      'code':'focus!'
    }
  }
}
```
````

:::

## 展示



::: code-group

`````javascript [一行]
export default {
  data () {
    return {
      'code':'focus!'  // [!code focus]
    }
  }
}
`````



````javascript [多行]
export default {
  data () {
    return {
      'code':'focus!'     // [!code focus:5]
      'code':'focus!'
      'code':'focus!'
      'code':'focus!'
      'code':'focus!'
    }
  }
}
````

:::



<div class='escape-demo'>ABCD</div>

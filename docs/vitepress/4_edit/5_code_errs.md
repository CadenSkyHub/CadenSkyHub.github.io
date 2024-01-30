# 代码错误与警告



可以对代码块错误与警告的行进行高亮。

> [!caution] 注意
>
> `// [!code warning]` 中，`//` 与 `[!code warning]` 之间有一个空格，不可忽略
>
> `// [!code error]` 中，`//` 与 `[!code error]` 之间有一个空格，不可忽略

## 输入

在一行上添加注释将相应地为其着色。

`// [!code warning]`

`// [!code error]`

```` 
``` js

export default {
  data () {
    return {
      msg: 'Error', // [!code error]// [!code error]
      msg: 'Warning' // [!code warning]// [!code warning]
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
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```
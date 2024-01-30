# 变量常量标识符



## 变量

::: info 提示

`javascript` 为动态语言，也就是不用编译即可直接运行的语言，它的变量 **存储的为值的内存地址，而并非值的字面量** ，这与静态语言有本质的区别。

``` javascript
let a = '123'
let b = '123'
/*
* a 和 b 的内存地址是一样的。
* */
```

参考：[变量的内存结构](https://www.bilibili.com/video/BV1mG411h7aD/?p=6&spm_id_from=pageDriver&vd_source=a971f27cdc6a5c5e8a16041ae47b0aec)

:::

### 变量声明

**声明了变量未赋值为 `undefined` **

```javascript
let a
let b, c, d
console.log(a, b, c, d) // undefined ..
```

### 一次声明多个变量

```javascript
let name = '张三', age = 12;

console.log(name, age)
```





## 常量

```javascript
const PI = 3.1415926

// PI = 4.1415926  // 无法重新修改值
```



## 标识符

::: info 标识符

在 `javascript` 中，所有可以由我们自主命名的内容，都可以认定为一个标识符，包括：

``` javascript
// 变量、常量、函数名、类名等...
```

:::



### 规范

1. **字符集**：
    - 标识符可以包含字母、数字、下划线 `（_）` 和美元符号 `（$）`。
    - 标识符不能以数字开头。
2. **区分大小写**：
    - `JavaScript` 区分大小写，因此大小写字母是不同的。
3. **保留字**：
    - 不能使用 `JavaScript` 的保留字（关键字）作为标识符。
    - 关键字包括 `if`、`else`、`for`、`while`、`function` 等。
4. **合法的标识符**：
    - 标识符可以是任意长度。
    - 合法的标识符示例：`myVariable`、`userName`、`_counter`、`$result`。
    - 非法的标识符示例：`123variable`（以数字开头）、`my-variable`（包含连字符）。
5. **驼峰命名法**：
    - 通常推荐使用驼峰命名法 `（camelCase）` 来命名标识符。
    - 驼峰命名法将多个单词组合在一起，首字母小写，后续单词首字母大写，例如 `myVariableName`。
6. **语义化**：
    - 标识符应该具有描述性，能够清晰地表达其用途或含义。
7. **规范约定**：
    - 在团队开发或遵循特定的编码规范时，应该遵循相应的规范约定。
8. **Unicode 支持**：
    - `JavaScript` 支持 `Unicode` 字符作为标识符。






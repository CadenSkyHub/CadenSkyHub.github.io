# 数据类型





## 原始值

`JavaScript` 中一共有七种原始值：

1. 数值 `（Number）`
2. 大整数 `（BigInt）`
3. 字符串 `（String）`
4. 布尔值 `（Boolean）`
5. 空值 `（Null）`
6. 未定义 `（Undefined）`
7. 符号 `（Symbol）`



### 数值

数值就是数字，在 `JavaScript` 中数字有两种普通的数值和大整数。

`js` 中的数值并不是无限大，当数值超过一定范围后会显示近似值。

使用 `typeof` 运算符检查一个数值时会返回`"number"`。

```javascript
let a = 1   // 1
let b = 1.1 // 1.1
let c = 9999999999999999999999999   // 1e+25 -- 科学计数法
let d = 999 ** 9999999   // Infinity -- 无穷，特殊数字
let e = 1.9999999999999999  // 2 -- 近似值
let f = 0.00000008  // 8e-8

console.log(a, b, c, d, e, f)
```



### 大整数

大整数，顾名思义用来表示一些比较大的整数，注意只是 **整数** 。

大整数使用 `n` 结尾，大整数可以是无限大的（还要看你的内存大小），且大整数只能和大整数计算，和数值计算会报错。

使用 `typeof` 检查一个大整数时会返回`"bigint"`

```javascript
let big = 19999999999999999n

console.log(big, typeof big)    // 19999999999999999n  bigint
```



### 字符串

`JavaScript` 中字符串需要使用引号引起来，单引号和双引号都是可以的，没有本质区别。

使用 `typeof` 运算符检查一个字符串时会返回`"string"`。

```javascript
let str = "Hi, I'm string"

console.log(str, typeof str)    // Hi, I'm string  string
```



### 模板字符串

模板字符串可使用`${变量}`来嵌入变量：

```javascript
let innerStr = '我是内嵌的字符串变量'
let longStr = ` 从这里开始，   空格也会输出， \n 会被转义
这是一个模板字符串，内容会默认输出。
可以嵌套变量：${innerStr}
`

console.log(longStr)

/*
 从这里开始，   空格也会输出，
 会被转义
 这是一个模板字符串，内容会默认输出。
 可以嵌套变量：我是内嵌的字符串变量
* */
```



### 布尔值

```javascript
let t = true
let f = false
console.log(t, typeof t)    // true boolean
console.log(f, typeof f)    // false boolean
```



### 未定义

作用和空值类似，同样只有一个值`undefined`。

我们一般不会主动使用 `undefined`。

使用 `typeof` 检查时会返回`"undefined"`

```javascript
let t

console.log(t, typeof t)    // undefined undefined
```



### 符号

使用 `typeof` 检查一个符号时会返回`"symbol"`

```javascript
let a = Symbol()

console.log(a, typeof a)    // Symbol() symbol
```



## 对象

复合数据类型，相当于一个容器，在对象中可以存储各种不同类型的数据

1. 对象（`Object`）
2. 函数（`Function`）
3. 数组（`Array`）
4. 类（`Class`）
5. Map（`Map`）[Map - 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
6. 集合（`Set`）[Set - 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)





## 类型转换

> [!warning] 警告
>
> 类型转换的过程是将原始值复制了一份，然后创建了对应的类型的值，而不是修改原始值的类型
>
> ```javascript
> let a = 10
> console.log(typeof a)   // number
> 
> a.toString()    // 转为字符串
> console.log(typeof a)   // number
> 
> a = a.toString()    // 重新赋值给 a
> console.log(typeof a)   //string
> ```



### 字符串

`toString()`

```javascript
/*
* 将其他类型转为字符串 toString()
* */

let a = 10
let arr = ['a', 'b', 'c']
let b = true
let c = {a:'a',b:"b"}
let n = null
let u = undefined

console.log(typeof a.toString(), a.toString())  // string 10
console.log(typeof arr.toString(), arr.toString())  // string a,b,c
console.log(typeof b.toString(), b.toString())  // string true
console.log(typeof c.toString(), c.toString())  // string [object Object]
console.log(typeof n.toString(),n.toString())   // 报错 // [!code --]
console.log(typeof u.toString(),u.toString())   // 报错 // [!code --]
```



`String()`

可以处理 `null` 和 `undfined` ，不会报错。

```javascript
/*
* 将其他类型转为字符串 String()
* */

let a = 10
let arr = ['a', 'b', 'c']
let b = true
let c = {a: 'a', b: "b"}	//  [object Object]
let n = null
let u = undefined

console.log(typeof String(a), String(a))  // string 10
console.log(typeof String(arr), String(arr))  // string a,b,c
console.log(typeof String(b), String(b))  // string true
console.log(typeof String(c), String(c))  // string [object Object]
console.log(typeof String(n), String(n))    // string null
console.log(typeof String(u), String(u))    // string undefined
```



### 数值

- 如果字符串是合法数字，则会转为数值
    - 空字符串或空格字符串会被转为 `0`
    - `parseInt()` 将一个字符串转为一个整数。只适用于字符串
        - 解析时，会自左向右读取一个字符串，直到读取到字符串中所有的有效整数
        - 如果开始就是非数字字符串，则会解析为 `NaN` 例：`px123`
    - `parseFloat()` 将一个字符串转为一个浮点数。 只适用于字符串
        - 解析时，会自左向右读取一个字符串，直到读取到字符串中所有的有效小数
        - 如果开始就是非数字字符串，则会解析为 `NaN` 例：`px123`
- 如果被转换的不是合法数字，则会转为 `NaN`

```javascript
/*
* 数值类型转换
* */


let a = '10'    // 10
let s = 'abc'	// NaN
let k = ' '		// 0
let b = true	// 1
let c = {a:'a',b:"b"}	// NaN
let n = null	// 0
let u = undefined	// NaN
let arr = ['a', 'b', 'c']	// NaN

console.log(typeof Number(a), Number(a))    // number 10
console.log(typeof Number(b), Number(b))    // number 1
console.log(typeof Number(k), Number(k))    // number 0
console.log(typeof Number(s), Number(s))    // number NaN
console.log(typeof Number(c), Number(c))    // number NaN
console.log(typeof Number(n), Number(n))    // number 0
console.log(typeof Number(u), Number(u))    // number NaN
console.log(typeof Number(arr), Number(arr))    // number NaN

/*
* parse
*/
let a = "10.001"
let b = '10'

console.log(parseInt(a), typeof parseInt(a))    // 10 number
console.log(parseFloat(a), typeof parseFloat(a))    // 10.001 number
console.log(parseInt(b), typeof parseInt(b))    // 10 number
console.log(parseFloat(b), typeof parseFloat(b))    // 10 number

/*
* 如果开始就是非数字字符串，则会解析为 NaN
*/
let aa = '123px'
let bb = 'px123'

console.log(typeof parseInt(aa), parseInt(aa))  // number 123
console.log(typeof parseInt(bb), parseInt(bb))  // number NaN
```



### 布尔

```javascript
/*
* 布尔类型转换
* */

let a = ''	// false
let b = '123'	// true
let c = 1	// true
let d = 0	// false
let e = [1,2,3]	// true
let f = {a:'a',b:'b'}	// true
let g = null	// false
let h = undefined	// false

console.log(typeof Boolean(a),Boolean(a))   // boolean false
console.log(typeof Boolean(b),Boolean(b))   // boolean true
console.log(typeof Boolean(c),Boolean(c))   // boolean true
console.log(typeof Boolean(d),Boolean(d))   // boolean false
console.log(typeof Boolean(e),Boolean(e))   // boolean true
console.log(typeof Boolean(f),Boolean(f))   // boolean true
console.log(typeof Boolean(g),Boolean(g))   // boolean false
console.log(typeof Boolean(h),Boolean(h))   // boolean false
```


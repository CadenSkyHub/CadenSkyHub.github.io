# 函数



## 函数定义

### 函数定义

- 函数声明
- 函数表达式
- 箭头函数
    - 如果函数体只有一行，可省略块儿作用域
    - 如果参数只有一个，可以省略参数的括号

```javascript
// 函数声明
function fun1() {
    console.log('函数声明')
}
fun1()


// 函数表达式
const fun2 = function (){
    console.log('函数表达式')
}
fun2()


// 箭头函数
const fun3 = () =>{
    console.log('箭头函数')
}
fun3()

// 箭头函数，如果只有一行，可不加块儿作用域
const fun4 = () => console.log('箭头函数简写')
fun4()

// 箭头函数，如果只有一个参数，可不加 ()
const fun5 = a => console.log(a)
fun5(1)
```



### 函数调用

[this](#this)

``` javascript
function fn () {
    console.log('我被调用了')
}
// 第一种调用
fn()
// 第二种调用
fn.call()
// 第三种调用
fn.apply()

/*
* 对 箭头函数无效
* call() 和 apply() 除了调用函数外，还可以用来指定函数的 this
* call() 和 apply() 第一个参数，将会成为函数的 this
*   - 通过 call() 方法调用函数，函数的实参直接在第一个参数后一个一个列出来
*   - 通过 apply() 方法调用函数，函数的实参需要通过数组传递
* */
```

**示例**

```javascript {8-9}
function fn(a, b) {
    console.log('a =', a, 'b =', b, this)
}

let o = {name: '张三', f: () => console.log(123)}

fn(111, 222)    // a = 111 b = 222  window
fn.call(o, 222, 333)    // a = 222 b = 333 {name: '张三', f: ƒ}
fn.apply(o, ['数组传递啊', '第二个参数']) // a = 数组传递啊 b = 第二个参数  {name: '张三', f: ƒ}
```





## 函数参数

- **函数参数传递为地址传递，不是复制传递(值传递)**
    - 地址传递：函数内修改参数，则修改的是对应内存地址的值
    - 值传递：函数内修改参数，是修改的复制后的值
- 如果实参和形参数量相等，则对应实参赋值给对应的形参

- 如果实参多于形参。则多余的实参，不会使用

- 如果实参小于形参，
    - 如果定义了参数默认值，则对应实参赋值后，未赋值的形参为默认值
    - 如果未定义参数默认值，则多余的形参为`undefined`

### 普通形参

```javascript
// 普通形参
const add = (a,b) => console.log(a + b)
add(1,2)    // 3

function add1(a,b) {
    console.log(a+b)
}
add1(2,1)   // 3
```



### 参数默认值

给参数加默认值，如果不穿实参，则使用默认值

```javascript
const add = (a=2,b=3) => console.log(a + b)
add()   // 5
add(1,2)    // 3
```



### 地址传递

**函数参数传递为地址传递，不是复制传递(值传递)**

- 地址传递：函数内修改参数，则修改的是对应内存地址的值
- 值传递：函数内修改参数，是修改的复制后的值

```javascript
const fun = (obj) =>{
    obj.name = '王二麻子'	// 函数内外的 obj 都被修改了，因为指向的是同一个地址
    console.log('函数内：', obj)
}

const obj = {name:"张三"}

fun(obj)
console.log('函数外：',obj)

/*
函数内：{ name: '王二麻子' }
函数外：{ name: '王二麻子' }
*/
```



### 可变参数

```javascript
const addAll = (...n) => {
    console.log(n)  // array
}
addAll(1,2,3)
```



`计算传入的所有参数的和`

```javascript
const addAll = (...n) => {
    let add = 0
    return n.reduce((previousValue, currentValue)=>previousValue + currentValue,add)
}
console.log(addAll(1,2,3))
```



### 传递函数

```javascript
// 传入函数
const compute = (a, b, computeFunc) => {
    return computeFunc(a, b)
}

const add = (a,b) => a + b

console.log(compute(1, 2, add)) // 3
console.log(compute(1, 2, (a, b) => a - b)) // -1
```





## 函数返回值



### 返回函数

```javascript
const compote = (compote) => {
    switch (compote) {
        case 'add':
            return function (a, b) {
                return a + b
            }
        case 'sub':
            return function (a, b) {
                return a - b
            }
        default:
            return function (a, b) {
                return `${a},${b},未知计算`
            }
    }
}

console.log(compote('add')(1,2))    // 3
console.log(compote('sub')(1,2))    // -1
console.log(compote('any')(1,2))    // 1,2,未知计算
```



## 匿名函数

### 匿名函数

```javascript
const myFunc = function (){
    console.log(`我是匿名函数，我没有名字
        有名字的函数定义应该这么写  function Name(){}
        而我是被赋值给 myFunc 这个变量上
    `)
}

myFunc()
```

### 直接调用

```javascript
(function (a,b) {
    console.log('我是被立即调用的函数输出的内容')
    console.log(a,b)
})(1,2);	// 还可以传参数

(()=>{
    console.log('箭头函数立即调用')
})()
```



## 闭包函数

闭包（Closure）是指在函数内部创建另一个函数，并且这个内部函数可以访问外部函数的局部变量，即使外部函数已经执行完毕。换句话说，闭包允许函数访问其创建时所处的词法作用域（lexical scope），即使在它执行的上下文已经销毁。

一个闭包通常由两部分组成：

1. **外部函数（Outer function）：** 包含了内部函数的函数。外部函数创建了一个局部作用域，并且通常包含一些局部变量。
2. **内部函数（Inner function）：** 在外部函数内部声明的函数。内部函数可以访问外部函数的参数和变量，以及全局作用域中的变量。

下面是一个简单的例子：

```javascript
function outerFunction(x) {
    // 外部函数有一个局部变量 x
    function y => {
        // 内部函数可以访问外部函数的局部变量 x
        return x + y;
    }
    // 返回内部函数的引用
    return innerFunction;
}

// 创建一个闭包
let closure = outerFunction(10);

// 调用闭包，访问外部函数的局部变量 x
let result = closure(5);

console.log(result); // 输出 15
```

在这个例子中，`outerFunction` 返回了 `innerFunction`，形成了一个闭包。当调用 `closure(5)` 时，`innerFunction` 仍然可以访问 `outerFunction` 中的局部变量 `x`，因为闭包保留了创建时的词法作用域。这种机制使得我们能够在一个函数中创建私有变量，同时允许其他函数访问这些私有变量，从而实现一些有趣的编程模式和设计模式。







## 递归函数

```javascript
// 递归计算 1+2+3+...+n 的和

const addN = (n) =>{
    if (n === 0){
        return n
    }
    return n + addN(n-1)
}

console.log(addN(100))
```



## this

> [!tip] 提示
>
> 在函数执行时，`js` 解释器会传入一个隐含的参数，这个参数就是 `this`
>
> - `this` 所致的对象会根据函数的调用方式不同而指向不同
>   - 以函数形式调用时，`this` 指向的是 `window`
>   - 在 `nodejs` 中，指向的是 `global`
>   - 在对象方法中，指向的是当前对象。**谁调用，指向的对象就是谁。**
> - 箭头函数
>   - 箭头函数没有 `this` ,它的 `this` 由外部作用域决定
>   - 箭头函数的 `this` 与它的调用方式无关

### 普通函数 this

::: code-group

```html [浏览器]
<script>
    function fn() {
        console.log(this)
    }
    
    fn()	// window对象

</script>
```



``` javascript [node]
function fn() {
    console.log(this)
}

fn()	// Object [global] 对象
```



``` javascript [自定义对象]
function saySelf(){
    console.log(this, this.name)
}

const zhangSan = {
    name:"张三",
    saySelf
}

const liSi = {
    name:"李四",
    saySelf
}

zhangSan.saySelf()  // { name: '张三', saySelf: [Function: saySelf] } 张三
liSi.saySelf()  // { name: '李四', saySelf: [Function: saySelf] } 李四
```

:::



### 箭头函数 this

**箭头函数没有 `this` ,它的 `this` 由外部作用域决定**

```javascript {6-8}
const zhangSan = {
    name: "张三",
    sayHello() {
        console.log(this);   // zhangSan

        (() => {				// 注意，这个箭头函数是在函数内部的。
            console.log(this)   // 外层作用域为 zhangSan
        })();

        (function () {
            console.log(this)   // window
        }())
    }
}

zhangSan.sayHello()
```



示例

::: code-group

```javascript [正确] {1-5}
const sayHello = function (){
    (()=>{
       console.log(this)    // { name: '张三', sayHello: [Function: sayHello] }
    })()
}

const zhangSan = {
    name: "张三",
    sayHello
}

zhangSan.sayHello()
```



```javascript [错误]
const sayHello = () => {	// [!code error]
    (()=>{	// [!code error]
       console.log(this)    // {}， 空，作用域问题 // [!code error]
    })()	// [!code error]
}

const zhangSan = {
    name: "张三",
    sayHello
}

zhangSan.sayHello()
```

:::


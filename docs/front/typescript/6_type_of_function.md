# 函数类型约束





## 基本用法

### 普通函数约束

``` typescript {1}
function sum(a: number, b: number): number {
    return a + b
}

sum(1, 3)
```

### 箭头函数约束

``` typescript {1}
const sub = (a: number, b: number): number => {
    return a - b
}

sub(5, 1)
```



### 别名约束

普通函数和箭头函数都可以使用

```typescript {3-5,7-8}
type MyFc = (a: string, b: string) => number

const myFc: MyFc = (a, b) => {
    return 2
}

let myFc:MyFc = function (a,b){
    return 1
}

myFc(3,2)	// 报错，需要 string,但是给的 number
```



> [!tip] 小技巧
>
> 利用 `typeof` 可以嵌套其他函数类型
>
> ```typescript
> const saySome = (some: string): string => {
>     return `说了${some}`
> }
> 
> const useSaySomeType: typeof saySome = (somes) => {	// [!code focus:3]
>     return `很好，用了saySome的类型,${somes}`
> }
> ```



## 参数约束

### 可选参数

 `b` 为可选参数，所以不传也不会报错。**是在形参后添加一个 `?`**

但是在函数内，该参数使用时，就会成为 `undfined`

``` typescript {1}
const echoHi = (a: string, b?: string): void => {
    console.log(a, b);
}

echoHi('1')
```

要解决 `undfined` 问题，请参考默认参数



### 默认参数

可以将 `b` 设为默认参数初始化，这样不传也不会报错。

在函数内，该参数为使用的默认值

``` typescript {1}
const echoHi = (a: string, b: string = '我是默认值啊'): void => {
    console.log(a, b);
}

echoHi('1')
```



### 变长参数

都知道, 变长参数为 数组类型，则约束也是按照数组类型进行约束的

``` typescript {1}
const echoHi = (a: number, b: number, ...args: number[]): void => {
    console.log(a, b, args);
}

echoHi(1, 2, 3, 4, 5)
```



### 参数解构

参数解构可以结合类型别名（type 命令）一起使用，代码会看起来简洁一些。

```typescript
const myFn = (
    {a, b, c}: { a: number, b: number, c: number }
): number => {
    return a + b + c
}

// 可以利用 type	// [!code focus:5]
type Args = { a: number, b: number, c: number }
const myFn1 = ({a, b, c}: Args): number => {
    return a + b + c
}
```







## 返回值约束

### void

如果函数没有返回值，返回类型应该定义为 `void`

``` typescript {1}
const echoHi = (a: string, b: string): void => {
    console.log(a, b);
}

echoHi('1', '3')
```



### never

如何函数永远没用返回值，则应该定义为 `never`

- 和 `void` 不同，`void` 会运行结束
- `never` 不会运行结束
  - 比如死循环

``` javascript
const neverOut = (): never => {
    while (true) {
        console.log(1);
    }
}

neverOut()
```














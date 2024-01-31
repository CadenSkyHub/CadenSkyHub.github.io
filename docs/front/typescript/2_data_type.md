# 数据类型

## 基本类型

### 布尔值

```typescript
const isTrue:boolean = true
const gender:boolean = false
```

### 数值

```typescript
const age:number = 15
const num:number = 22
const num1:number = NaN
const num2:number = Infinity	// 无限
```

### 字符串

```typescript
const name1:string = 'tom'
const name2:string = `${name1} and jerry`
```



### null、undefined

`undefined` 和 `null` 是两种独立类型，它们各自都只有一个值。

```typescript
let udF: undefined = undefined

let n: null = null
```

::: warning 注意

注意，如果没有声明类型的变量，被赋值为`undefined`或`null`，在关闭编译设置`noImplicitAny`和`strictNullChecks`时，它们的类型会被推断为`any`。

```typescript
// 关闭 noImplicitAny 和 strictNullChecks

let ud = undefined; // 类型推断为 any
let ay = null       // 类型推断为 any
```

如果希望避免这种情况，则需要打开编译选项`strictNullChecks`。

```typescript
// 打开编译设置 strictNullChecks

let ud = undefined; // 类型推断为 undefined
let ay = null       // 类型推断为 null
```

上面示例中，打开编译设置`strictNullChecks`以后，赋值为`undefined`的变量会被推断为`undefined`类型，赋值为`null`的变量会被推断为`null`类型。

:::



### symbol

``` typescript
const s:symbol = Symbol(20)
```



### bigint

新出的类型，但是请注意

- **目标低于 ES2020 时，BigInt 字面量不可用。**
- 需要在 `tsconfig.json` 中，配置 `target` 为 `ES2020` 或以上

``` javascript
const bi:bigint = 1n
```





## 任意类型

### any

`any` 类型表示没有任何限制，该类型的变量可以赋予任意类型的值。也可以被赋值为任意类型的值。

```typescript
let x: any;

x = 1
x = true
x = 'string
```

**类型污染**

变量类型一旦设为`any`，`TypeScript` 实际上会关闭这个变量的类型检查。即使有明显的类型错误，只要句法正确，都不会报错。

```typescript
// 这样造成了类型污染

let x: any;
let m: number = 1;
m = x;
```



### unknown

表示类型不确定，可能是任意类型，但是它的使用有一些限制，不像`any`那样自由，可以视为严格版的`any`。

`unknown`跟`any`的相似之处，在于所有类型的值都可以分配给`unknown`类型

```typescript
let x: unknown;

x = 1
x = 'string'
x = true
```

**无法造成类型污染**

```typescript
let x: unknown;
let m: number = 1;
m = x   // 报错：Type 'unknown' is not assignable to type 'number'.
```

::: tip 提示

`unknown`类型变量能够进行的运算是有限的，只能进行比较运算（运算符`==`、`===`、`!=`、`!==`、`||`、`&&`、`?`）、取反运算（运算符`!`）、`typeof`运算符和`instanceof`运算符这几种，其他运算都会报错。

:::












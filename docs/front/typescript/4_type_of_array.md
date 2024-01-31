# 数组

所有成员的类型必须相同，但是成员数量是不确定的，可以是无限数量的成员，也可以是零成员。



## 数组约束

**第一种写法**

```typescript
let arr: string[] = ['a', 'b', 'c']
```



**第二种写法**

```typescript
let arr: Array<string> = ['a', 'b', 'c']
```



::: details 复杂成员

``` typescript
let arr: (number | string)[] = ['1', 1, '2', 2]
// 或
let arr: Array<number | string> = ['1', 1, '2', 2]
```

这种写法本质上属于泛型，这里只要知道怎么写就可以了，详细解释参见《泛型》一章。

:::





## 只读数组

`JavaScript` 规定，`const`命令声明的数组变量是可以改变成员的。

但是，很多时候确实有声明为只读数组的需求，即不允许变动数组成员。

- 添加 `readonly` 关键字
- 只读数组没有`pop()`、`push()`之类会改变原数组的方法



**第一种写法**

```typescript {1}
let arr: readonly number[] = [1, 2, 3, 4, 5]

arr[0] = 0  // 报错
```



**第二种写法**

```typescript
let arr: ReadonlyArray<number> = [1, 2, 3, 4]   // 约束的数组内成员

let arr1: Readonly<number[]> = [1, 2, 3, 4]    // 约束的整个数组
```





## 多维数组

**二维数组**

```typescript
// 二维数组中的数组为 number 类型
let arr: number[][] = [[1, 2, 3], [3, 4, 5]]

let arr1: Array<number[]> = [[1, 2, 3], [3, 4, 5]]
```



**三维数组**

``` typescript
const arr: number[][][] = [[[1, 2, 3], [3, 4, 5]], [[1, 2, 3], [4, 5, 6]]]
```






















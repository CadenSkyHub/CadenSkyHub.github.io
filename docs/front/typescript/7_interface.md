# interface

> [!caution] interface 与 type
>
> - `type`能够表示非对象类型，而`interface`只能表示对象类型（包括数组、函数等）。
> - `interface`可以继承其他类型，`type`不支持继承。
> - `this`关键字只能用于`interface`。
> - `type` 可以扩展原始数据类型，`interface` 不行。
> - `interface`无法表达某些复杂类型（比如交叉类型和联合类型），但是`type`可以。





`interface` 是对象的模板，可以看作是一种类型约定，中文译为“接口”。使用了某个模板的对象，就拥有了指定的类型结构。实现该接口很简单，只要指定它作为对象的类型即可。

```typescript
// 定义接口
interface Person {
    firstName: string
    lastName: string
    age?: number
    gender?: boolean
}

// 实现接口
const zhangSan: Person = {
    firstName: '三',
    lastName: '张'
}
```





## 对象方法

对象的方法共有三种写法。

```typescript
interface A {
    f(x: boolean): string
}

interface B {
    f: (x: boolean) => string
}

interface C {
    f: { (x: boolean): string }
}
```



## 继承

`interface` 可以使用 `extends` 关键字，继承其他 `interface`。

### 继承 interface

```typescript
interface A {
    firstName: string
}

interface B extends A {	// [!code focus:3]
    lastName: string
}

const zhangSan: B = {
    firstName: '张',
    lastName: '三'
}
```



### 继承 type

> [!caution] 警告
>
> 如果 `type` 不是 `对象类型` 则无法继承

```typescript {1-4,6-8}
type Name = {
    firstName: string
    lastName: string
}

interface A extends Name {
    age?: number
}


const zhangSan: A = {
    firstName: '张',
    lastName: '三'
}
```



### 继承 class

`interface` 还可以继承 `class`，即继承该类的所有成员。

```typescript {13-19}
class Person {
    firstName: string = '张'

    getFirstName() {
        return this.firstName
    }
}

interface Z extends Person {	// [!code ++]
    lastName: string	// [!code ++]
}	// [!code ++]

const zhangSan: Z = {
    firstName: '张',
    lastName: '三',
    getFirstName(): string {
        return this.firstName
    }
}

console.log(zhangSan.getFirstName())    // 张
```



### 多重继承

```typescript
interface A {
    firstName: string
}

interface B {
    lastName: string
}

interface C extends A, B {	// [!code focus:3]
    age?: number
}

const zhangSan: C = {
    firstName: '张',
    lastName: '三'
}
```





## 接口合并

如果两个接口名称一致，则会自动合并接口

```typescript {1,5}
interface A {
    firstName: string
}

interface A {
    lastName: string
}

const zhangSan: A = {
    firstName: 'zhang',
    lastName: 'san'
}

console.log(zhangSan.lastName, zhangSan.firstName)
```


















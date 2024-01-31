# 对象

对象类型的最简单声明方法，就是使用大括号表示对象，在大括号内部声明每个属性和方法的类型。

```typescript
const zhangSan: {
    name: string,
    age: number,
    gender: boolean
} = {
    name: '张三',
    age: 1,
    gender: true
}
```

> [!caution] 注意
>
> 一旦声明了类型，对象赋值时，就不能缺少指定的属性，也不能有多余的属性。



## 可选属性

```typescript
const zhangSan: {
    name: string,
    age?: number,	// [!code ++]
    gender?: boolean	// [!code ++]
} = {
    name: '张三',
}
```



> [!warning] 检查
>
> 使用可选属性时应先检查该属性是否为 `undfined` 否则
>
> 如果没有定义会成为 `undifined`
>
> ```typescript
> const zhangSan: {
>     name: string,
>     age?: number,
>     gender?: boolean
> } = {
>     name: '张三',
> }
> 
> // Hi I'm 张三, My age undefined
> console.log(`Hi I'm ${zhangSan.name}, My age ${zhangSan.age}`)
> // Hi I'm 张三, My age 不告诉你
> console.log(`Hi I'm ${zhangSan.name}, My age ${zhangSan.age ?? '不告诉你'}`)
> ```





## 解构赋值

解构赋值的类型写法，跟为对象声明类型是一样的。

```typescript
const zhangSan: {
    id: string,
    age: number,
    gender: boolean
} = {
    id: '张三',
    age: 1,
    gender: false
}


const {id, age, gender}: {	// [!code focus:5]
    id: string,
    age: number,
    gender: boolean
} = zhangSan
```



为解构赋值定义默认值

```typescript {11}
const zhangSan: {
    id?: string,
    age?: number,
    gender: boolean
} = {
    age: 1,
    gender: false
}


const {id = '123', age = 123, gender}: {
    id?: string,
    age?: number,
    gender: boolean
} = zhangSan

console.log(id, age, gender)
```





## 对象方法

```typescript {4,8-10}
const zhangSan: {
    firstName: string
    lastName: string
    fullName: () => string
} = {
    firstName: '张',
    lastName: '三',
    fullName: function () {
        return `${this.firstName + this.lastName}`
    }
}

console.log(zhangSan.fullName())
```

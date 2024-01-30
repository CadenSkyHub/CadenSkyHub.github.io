# 解构赋值





## 数组解构

### 基本使用

```javascript {2}
let arr = ['张三', '李四', '王五']
let [a, b, c] = arr
console.log(a,b,c)  // 张三 李四 王五
```



### 变量多，参数少

::: code-group

```javascript [不赋予默认值] {3}
let arr = ['张三', '李四', '王五']
// 当参数少，则会赋值于 undefined
let [a, b, c, d, e] = arr
console.log(a, b, c, d, e)  // 张三 李四 王五 undefined undefined
```



```javascript [赋予默认值] {3}
let arr = ['张三', '李四', '王五']
// 当赋予了默认值之后，如果参数能对应上，则赋值，否则使用默认值
let [a, b, c = 'name', d = 'name', e = 'name'] = arr
console.log(a, b, c, d, e)  // 张三 李四 王五 name name
```

:::



### 变量少，参数多

::: code-group

```javascript [直接使用] {2}
let arr = ['张三', '李四', '王五', '王八']
let [a, b] = arr
console.log(a, b)  // 张三 李四
```



```javascript [...接收] {2}
let arr = ['张三', '李四', '王五', '王八']
let [a, b, ...c] = arr
console.log(a, b,c)  // 张三 李四 ['王五', '王八']
```

:::



### 快速交换变量值

```javascript {4}
let a = 10
let b = 20
console.log(a, b) // 10 20 
;[a, b] = [b, a]
console.log(a, b) // 20 10 
```





### 函数返回数组解构

```javascript {5}
const fn = () =>{
    return ['张三', '李四', '王五', '王八']
}

let [a,b] = fn()
console.log(a,b)    // 张三 李四
```





## 对象解构

### 基本使用

```javascript {2}
const obj = {name: '张三', age: 15, gender: true}
let {name, age} = obj
console.log(name,age)   // 张三 15
```



### 变量多，参数少

```javascript {8}
const fn = () => {
    return {
        name: "张三",
        age: 15
    }
}
// 定义默认参数
let {name, age, gender = true} = fn()

console.log(name, age, gender)  // 张三 15 true
```



### 变量别名

```javascript {8}
const fn = () => {
    return {
        name: "张三",
        age: 15
    }
}

let {name:n, age:a, gender:g = true} = fn()

console.log(n, a, g)  // 张三 15 true
```



### 函数返回数组解构

```javascript {8}
const fn = () => {
    return {
        name: "张三",
        age: 15
    }
}

let {name, age} = fn()

console.log(name, age)  // 张三 15
```












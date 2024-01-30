# 对象

> [!tip] 对象属性要求
>
> 属性名
>
> - 通常，属性名为一个字符串，所以属性名可以是任何值
> - 也可以使用符号（`Symbol`）
>   - 通过 `Symbol()` 添加的属性，通常是那些不希望被外界访问的属性
>
> 属性值
>
> - 属性值，也可以是任何值，也可以嵌套一个对象

## 操作对象

### 创建对象

```javascript {2}
/* 创建空对象 */

let obj = Object()	// 第一种方式
let obj1 = {}	// 第二种方式
```



### 添加属性

> [!caution] 两种方式
>
> - 可以使用 `obj.`
> - 可以使用 `obj[]`
>   - 这种方式可以传入变量



```javascript {5,10}
let obj = {}
// 添加属性
obj.name = '张三'
obj.age = 15
obj['like this']= 'like this'
console.log(obj.name, obj['age'], obj['like this'])	// 张三 15 like this

// 使用 symbol
let mySymbol = Symbol()
obj[mySymbol] = '这是symbol为属性的值'
console.log(obj, obj[mySymbol])

/*
{
  name: '张三',
  age: 15,
  'like this': 'like this',
  [Symbol()]: '这是symbol为属性的值'
}

这是symbol为属性的值
*/
```



### 读取属性

```javascript
let obj = {}
// 添加属性
obj.name = '张三'
obj.age = 15
obj['like this'] = 'like this'

let gender = 'gender'
obj[gender] = '男'

console.log(obj.name)   // 张三
console.log(obj.age)    // 15
console.log(obj['like this'])   //like this
console.log(obj[gender])    // 男


// 使用 symbol
let mySymbol = Symbol()
obj[mySymbol] = '这是symbol为属性的值'
console.log(obj, obj[mySymbol])
```



### 修改属性

```javascript {7}
let obj = {}
// 添加属性
obj.name = '张三'
obj.age = 15

// 修改属性
obj.name = "王五"

console.log(obj.name)
```



### 删除属性

```javascript {7}
let obj = {}
// 添加属性
obj.name = '张三'
obj.age = 15

// 删除属性
delete obj.name

console.log(obj.name)   // undefined
```



## 检查属性

检查属性是否存在于对象中

- `in` 
    - 检查无论是自身还是 [原型链](../2_advanced/2_prototype.md)，都会返回 `true`

```javascript {7-8}
let zhangSan = {
    name : '张三',
    age : 15,
    gender : true
}

console.log('name' in zhangSan) // true
console.log('like' in zhangSan) // false
```

- `Object.hasOwn(对象, 属性名)`
    - 只检查是否在自身中，如果在 [原型链 ](../2_advanced/2_prototype.md)中，则返回 `false`

```javascript
let zhangSan = {
    name : '张三',
    age : 15,
    gender : true
}

console.log(Object.hasOwn(zhangSan, 'name')) // true
console.log(Object.hasOwn(zhangSan, 'sex')) // false
```





## 遍历属性

获取到对象中的所有属性名和属性值

- 注意！：并不是所有属性都可以枚举，（符号就不可以）

::: code-group

``` javascript [枚举属性名] {7-9}
let zhangSan = {
    name : '张三',
    age : 15,
    gender : true
}

for (const key in zhangSan) {
    console.log(key)	// 获取属性名
}


/*
name
age
gender
*/
```



``` javascript [枚举属性值] {7-9}
let zhangSan = {
    name : '张三',
    age : 15,
    gender : true
}

for (const key in zhangSan) {
    console.log(key, zhangSan[key])	// 获取属性名和属性值
}

/*
name 张三
age 15
gender true
*/
```

:::



## 方法

对象的属性值为函数，也被称为对象的方法

> [!caution] 注意
>
> 对象中的方法，使用 `this` 可以访问当前对象中的属性，
>
> **箭头函数不适用，因为箭头函数没有自己的 `this` 绑定，而是捕获外部的 `this` 值。**

```javascript {4-6}
let zhangSan = {
    name:'张三',
    age :15,
    saySelf:function (){
        console.log(`我的名字是：${this.name}，年龄是：${this.age}`)
    }
}

zhangSan.saySelf()
```



## 拷贝

### 浅拷贝

浅拷贝会创建一个新对象，这个新对象有着原始对象属性值的一份精确副本。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是引用类型，拷贝的就是内存地址。因此，如果其中一个对象改变了这个地址指向的内容，就会影响到另一个对象。

实现浅拷贝的方法有：

1. 使用 `Object.assign()`:

    ```javascript
    const original = { a: 1, b: { c: 2 } };
    const copy = Object.assign({}, original);
    ```

2. 使用扩展运算符（Spread Operator）`...`:

    ```javascript
    const original = { a: 1, b: { c: 2 } };
    const copy = { ...original };
    ```

### 深拷贝

深拷贝则会复制对象的所有层级，生成一个完全独立的副本。在深拷贝后的对象中，不论是基本数据类型还是引用数据类型，都是完全新的，原始对象的任何更改都不会影响到深拷贝的对象。

实现深拷贝的方法有：

1. 使用 `structuredClone`

    ```javascript
    let zhangSan = {
        name:"张三",
        age:15
    }
    
    let deepCloneZhangSan = structuredClone(zhangSan)
    ```

2. 使用 `JSON.stringify()` 和 `JSON.parse()`（有局限性）:

    ```javascript
    const original = { a: 1, b: { c: 2 } };
    const deepCopy = JSON.parse(JSON.stringify(original));
    ```

    这种方法无法处理函数、`undefined`、循环引用等特殊情况。

3. 使用递归实现自定义的深拷贝函数：

    ```javascript
    function deepCopy(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
    
        let copy = Array.isArray(obj) ? [] : {};
    
        Object.keys(obj).forEach(key => {
            copy[key] = deepCopy(obj[key]);
        });
    
        return copy;
    }
    
    const original = { a: 1, b: { c: 2 } };
    const deepCopy = deepCopy(original);
    ```

在选择浅拷贝还是深拷贝时，需要根据实际情况考虑。如果你知道不需要完全独立的副本，或者处理的对象结构简单（没有嵌套的对象或数组），那么使用浅拷贝就足够了。但是，如果你的对象结构复杂（例如，有多层嵌套的对象或数组），并且你需要完全独立的副本以避免副作用，那么你应该使用深拷贝。

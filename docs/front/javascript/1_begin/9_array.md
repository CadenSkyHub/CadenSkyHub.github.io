# 数组

## 开始

### 定义数组

```javascript
const arr = ['a', 'b', 'c', 1, 2, 3]
console.log(arr)    // [ 'a', 'b', 'c', 1, 2, 3 ]
```







## 数组操作

### 获取元素

::: code-group

```javascript [slice方法获取] {6}
// 签名
// Array<string | number>.slice(start?: number,end?: number): (string | number)[]

let arr = ['a', 'b', 'c', 1, 2, 3]

console.log(arr.slice(0,3)) // [ 'a', 'b', 'c' ]
```



```javascript [下标获取]
let arr = ['a', 'b', 'c', 1, 2, 3]

console.log(arr[0]) // a
console.log(arr[1]) // b
```



```javascript [ES6解构赋值] {3}
let arr = ['a', 'b', 'c', 1, 2, 3]

let [one,two,three] = arr;

console.log(one,two,three) // a b c
```

:::

### 删除元素



::: code-group

```javascript [delete] {3}
const arr = ['a', 'b', 'c', 1, 2, 3]
// 删除索引 2 的元素，注意，会为空，而不是真正的删除
delete arr[2]

console.log(arr)    // ['a', 'b', 空, 1, 2, 3]
```



```javascript [splice] {6}
// 签名
// Array<string | number>.splice(start: number,deleteCount?: number): (string | number)[]

let arr = ['a', 'b', 'c', 1, 2, 3]
// splice 从索引 2 开始，删除 3 个元素。会返回删除的元素，
arr.splice(2,3)

console.log(arr)    // [ 'a', 'b', 3 ]
```



```javascript [删除末尾元素] {3}
let arr = ['a', 'b', 'c', 1, 2, 3]
// pop 删除末尾元素
arr.pop()
console.log(arr)    // [ 'a', 'b', 'c', 1, 2 ]
```



```javascript [删除开始元素]
let arr = ['a', 'b', 'c', 1, 2, 3]
// shift 删除开始元素
arr.shift()
console.log(arr)    // [ 'b', 'c', 1, 2, 3 ]
```

:::



### 新增元素

::: code-group

```javascript [末尾追加] {3}
let arr = ['a', 'b', 'c', 1, 2, 3]
// push 在数组末尾添加元素
arr.push(4,5,6)
console.log(arr)    // ['a','b','c',1, 2,3,4,5,6]

// length 
arr[arr.length] = 7
console.log(arr)    // ['a','b','c',1, 2,3,4,5,6,7]
```



```javascript [开头添加] {3}
let arr = ['a', 'b', 'c', 1, 2, 3]
// unshift 数组开头添加
arr.unshift('x', 'z')
console.log(arr)    // ['x','z','a','b','c',1,2,3]
```



```javascript [合并多个] {3，6}
let arr = ['a', 'b', 'c', 1, 2, 3]
// concat 合并多个数组或值
let newArr = arr.concat(4, 5, 6)
console.log(newArr)    //  ['a','b','c',1, 2,3,4,5,6]

let newArr1 = arr.concat([4, 5, 6], [7, 8, 9])
console.log(newArr1) // ['a','b','c', 1, 2,3,4,5,6,7,8,9]
```



```javascript [指定位置] {3}
let arr = ['a', 'b', 'c', 1, 2, 3]
// splice 指定位置插入或删除
arr.splice(3,0,'d','e')
console.log(arr)    // ['a', 'b', 'c', 'd','e', 1, 2, 3]
```



```javascript [ES6扩展] {3}
let arr = ['a', 'b', 'c', 1, 2, 3]
// splice 指定位置插入或删除
let newArr = [...arr, 4, 5, 6]
console.log(newArr)    // ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]
```

:::





### 修改元素

::: code-group

```javascript [使用索引] {3}
let arr = ['a', 'b', 'c', 1, 2, 3]
// 使用索引
arr[0] = 'x'
console.log(arr)    // ['x', 'b', 'c', 1, 2, 3]
```



```javascript [splice] {3}
let arr = ['a', 'b', 'c', 1, 2, 3]
// 使用 splice ， 从索引 2(包括) 开始，删除 1 个，用 cc 填充
arr.splice(2,1,'cc')
console.log(arr)    // ['a', 'b', 'cc', 1, 2, 3]
```



```javascript [fill] {3}
let arr = ['a', 'b', 'c', 1, 2, 3]
// 使用 fill 从索引 0 开始，到索引 （不包括）结束，用元素 aa 填充
arr.fill('aa',0,1)
console.log(arr)    // ['aa', 'b', 'c', 1, 2, 3]
```

:::





### 获取长度

获取数组长度，

获取的实际值是最大索引 `+1`

```javascript {2}
let arr = ['a', 'b', 'c', 1, 2, 3]
console.log(arr.length) // 6
```



### 遍历数组

::: code-group

```javascript [forI]
let arr = ['a', 'b', 'c', 1, 2, 3]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
```



```javascript [forOf]
let arr = ['a', 'b', 'c', 1, 2, 3]
for (let arrElement of arr) {
    console.log(arrElement)
}
```



```javascript [forEach]
let arr = ['a', 'b', 'c', 1, 2, 3]
arr.forEach((arrElement)=>{
    console.log(arrElement)
})
```

:::



## 拷贝

### 浅拷贝

浅拷贝仅复制对象的第一层属性。如果对象包含其他对象（例如，数组或嵌套对象），则浅拷贝将复制这些内部对象的引用，而不是它们的实际值。因此，原始对象和拷贝对象将共享嵌套对象的引用。

浅拷贝的例子：

1. 使用 `Array.slice()`:

    ```javascript
    let arr = [1, 2, 3];
    let shallowCopy = arr.slice();
    ```

2. 使用扩展运算符（Spread Operator）`...`:

    ```javascript
    let arr = [1, 2, 3];
    let shallowCopy = [...arr];
    ```

### 深拷贝

深拷贝复制对象的所有层级，创建一个完全独立的副本。修改原始对象中的嵌套对象不会影响到深拷贝出的新对象。

深拷贝的实现方式：

1. 使用 `structuredClone()`

    ```javascript
    let arr = ['a', 'b', 'c', 1, 2, 3]
    let deepCloneArr = structuredClone(arr)
    ```

2. 使用 `JSON.stringify()` 和 `JSON.parse()`：

    ```javascript
    let arr = [1, 2, [3, 4]];
    let deepCopy = JSON.parse(JSON.stringify(arr));
    ```

    注意：这种方法无法正确处理函数、`undefined`、循环引用等。

3. 使用递归来创建自定义的深拷贝函数：

    ```javascript
    function deepCopy(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
    
        let copy = Array.isArray(obj) ? [] : {};
    
        for (let key in obj) {
            copy[key] = deepCopy(obj[key]);
        }
    
        return copy;
    }
    
    let arr = [1, 2, [3, 4]];
    let deepCopy = deepCopy(arr);
    ```

在选择使用浅拷贝还是深拷贝时，应考虑你的具体需求。浅拷贝用于那些你确定不会修改嵌套对象的情况，而深拷贝用于需要完全独立副本的情况。在深拷贝时要注意性能问题，特别是对于非常大或复杂的对象，因为深拷贝会递归复制每个元素。



## 数组去重

::: code-group

```javascript [Set]
let arr = ['a','a','b','b','c','d']
// 使用 Set 去重
// Set 对象文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
let newArr = [... new Set(arr)]
console.log(newArr) // ['a', 'b', 'c', 'd']
```



```javascript [filter]
let arr = ['a','a','b','b','c','d']
// filter() 和 indexOf()
// 原理：如果 indexOf(item) 返回的下标与当前处理的 元素 index 相等，则表示该元素唯一
let newArr = arr.filter((item, index)=>arr.indexOf(item) === index)
console.log(newArr) // ['a', 'b', 'c', 'd']
```

:::





## 数组方法

> [!tip] 提示
>
> [Array - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
>
> 太多了，以下只列出部分

### 0. `at()`

- 作用：**`at()`** 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。
- 方法签名：`arr.at(index: number): string | number | undefined`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

### 1. `concat()`

- 作用：合并两个或多个数组，并返回一个新数组。
- 方法签名：`arr.concat(array1, array2, ..., arrayN)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

### 2. `copyWithin()`

- 作用：从数组的指定位置开始，将一系列元素复制到数组的另一个指定位置。覆盖现有元素。
- 方法签名：`arr.copyWithin(target, start, end)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

### 3. `entries()`

- 作用：返回一个新的数组迭代器对象，包含数组中每个索引的键/值对。
- 方法签名：`arr.entries()`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

### 4. `every()`

- 作用：测试数组的所有元素是否都通过了指定函数的测试。
- 方法签名：`arr.every(callback(currentValue, index, array), thisArg)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### 5. `fill()`

- 作用：用一个固定值填充数组的所有元素。
- 方法签名：`arr.fill(value, start, end)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

### 6. `filter()`

- 作用：创建一个新数组，其中包含通过提供函数实现的测试的所有元素。
- 方法签名：`arr.filter(callback(element, index, array), thisArg)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### 7. `find()`

- 作用：返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。
- 方法签名：`arr.find(callback(element, index, array), thisArg)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

### 8. `findIndex()`

- 作用：返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1。
- 方法签名：`arr.findIndex(callback(element, index, array), thisArg)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

### 9. `forEach()`

- 作用：对数组的每个元素执行提供的函数。
- 方法签名：`arr.forEach(callback(currentValue, index, array), thisArg)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### 10. `includes()`

- 作用：判断数组是否包含某个元素，返回布尔值。
- 方法签名：`arr.includes(searchElement, fromIndex)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

### 11. `indexOf()`

- 作用：返回数组中第一个找到的元素索引，如果不存在则返回 -1。
- 方法签名：`arr.indexOf(searchElement, fromIndex)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

### 12. `join()`

- 作用：将数组的所有元素连接成一个字符串。
- 方法签名：`arr.join(separator)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

### 13. `keys()`

- 作用：返回一个新的数组迭代器对象，包含数组中每个索引的键。
- 方法签名：`arr.keys()`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)

### 14. `map()`

- 作用：创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
- 方法签名：`arr.map(callback(currentValue, index, array), thisArg)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### 15. `pop()`

- 作用：删除数组的最后一个元素，并返回该元素。
- 方法签名：`arr.pop()`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

### 16. `push()`

- 作用：将一个或多个元素添加到数组的末尾，并返回数组的新长度。
- 方法签名：`arr.push(element1, element2, ..., elementN)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

### 17. `reduce()`

- 作用：对数组中的所有元素执行一个提供的 reducer 函数，将其结果累积为单个值。
- 方法签名：`arr.reduce(callback(accumulator, currentValue, index, array), initialValue)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### 18. `reduceRight()`

- 作用：与 `reduce()` 类似，但是从数组的最后一个元素开始累积。
- 方法签名：`arr.reduceRight(callback(accumulator, currentValue, index, array), initialValue)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

### 19. `reverse()`

- 作用：颠倒数组中元素的顺序。
- 方法签名：`arr.reverse()`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

### 20. `shift()`

- 作用：删除数组的第一个元素，并返回该元素。
- 方法签名：`arr.shift()`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

### 21. `slice()`

- 作用：返回一个新的数组对象，包含从开始到结束（不包括结束）选择的元素。
- 方法签名：`arr.slice(start, end)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### 22. `some()`

- 作用：测试数组的某些元素是否通过了指定函数的测试。
- 方法签名：`arr.some(callback(currentValue, index, array), thisArg)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### 23. `sort()`

- 作用：对数组元素进行排序。
- 方法签名：`arr.sort(compareFunction)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### 24. `splice()`

- 作用：在数组中添加或删除元素，并返回被删除的元素。
- 方法签名：`arr.splice(start, deleteCount, item1, item2, ...)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

### 25. `toString()`

- 作用：将数组转换为字符串并返回。
- 方法签名：`arr.toString()`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)

### 26. `unshift()`

- 作用：在数组的开头添加一个或多个元素，并返回数组的新长度。
- 方法签名：`arr.unshift(element1, element2, ..., elementN)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

### 27. `values()`

- 作用：返回一个新的数组迭代器对象，包含数组中每个索引的值。
- 方法签名：`arr.values()`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

### 28. `flat()`

- 作用：将多维数组转为一维数组。
- 方法签名：`arr.flat(depth)`
- [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
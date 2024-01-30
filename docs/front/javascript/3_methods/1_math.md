# Math

> [!tip]
>
> 内置 `Math` 对象，静态方法有很多，详细请看[官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) ，这里只列举一些常用

## 取绝对值

``` javascript
console.log(Math.abs(-1))   // 1
```



## 向上取整

``` javascript
console.log(Math.ceil(3.14))    // 4
```





## 向下取整

``` javascript
console.log(Math.floor(3.14))   // 3
```



## 四舍五入

``` javascript
console.log(Math.round(3.54))   // 4
```



## PI

``` javascript
console.log(Math.PI)    // 3.141592653589793
```



## 返回最大值

``` javascript
onsole.log(Math.max(...[1, 2, 3, 4, 5]))   // 5
```



## 返回最小值

``` javascript
console.log(Math.min(...[1, 2, 3, 4, 5]))   // 1
```



## 返回随机数

> 该随机数在 `0-1` 之内取值，不包括1

```javascript
console.log(Math.random())
```



### 获取数组随机内容

``` javascript
const persons = ['周杰伦', '刘德华', '周星驰', '林青霞', '维尼熊']
// 获取随机人
const getPerson = (persons) => {
    return persons[Math.floor(Math.random() * persons.length)] // [!code focus]
}
```

### 获取 n 到 m 随机数

```javascript
const random = (n,m) =>{
    return Math.floor(Math.random() * (m - n + 1) + n) // [!code focus]
}

console.log(random(1,10))
```








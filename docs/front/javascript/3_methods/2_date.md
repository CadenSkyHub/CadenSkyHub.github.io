# Date

> [!tip] 提示
>
> 内置 `Date` 类，方法有很多，详细请看[官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)，这里只列举一些常用



## 当前时间戳

```javascript
// 当前时间戳
// 静态方法
console.log(Date.now()) // 1706455113965
```



## 当前时间元信息

```javascript
const date = new Date()

// 当前年
console.log(date.getFullYear())

// 当前月
console.log(date.getMonth() + 1)    // 0 为 1 月

// 当前天
console.log(date.getDate())

// 当前周
console.log(date.getDay())  // 0 为周日

// 当前小时
console.log(date.getHours())

// 当前分钟
console.log(date.getMinutes())

// 当前秒
console.log(date.getSeconds())
```





## 当前时间格式化

```javascript
const date = new Date()

console.log(date.toString())    // Sun Jan 28 2024 23:28:14 GMT+0800 (China Standard Time)

console.log(date.toTimeString())  // 23:30:13 GMT+0800 (China Standard Time)

/*
* 第一个参数，传入缩写语言代码，
* */
console.log(date.toLocaleDateString("zh-Hans"))  // 2024/1/28

console.log(date.toLocaleString("zh-Hans"))  // 2024/1/28 23:31:50

console.log(date.toLocaleTimeString("zh-Hans"))  // 23:31:50

// 可以通过字符串方法改为 YYYY-MM-DD HH:ss:mm 格式
console.log(date.toLocaleString("zh-Hans").replaceAll("/", "-"))    // 2024-1-28 23:37:53
```

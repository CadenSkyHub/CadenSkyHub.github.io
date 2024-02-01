# 定时器

## 间歇函数

### 开启定时器

每隔一段时间执行一次函数

```javascript
setInterval(函数，间隔时间)	// 开启定时器要使用变量接收下，不然容易导致内存泄漏
```



### 关闭定时器

```javascript
const timerId = setInterval()
clearInterval(timerId)	// 关闭定时器可以在 开启定时器传入的函数内使用，具体看实例的 10s 阅读协议
```



### **示例**

**每隔一秒输出 当前秒数**

```javascript
setInterval(() => {
    const date = new Date()
    console.log(date.getSeconds())
}, 1000)
```

**每间隔一秒钟，页面更新为当前秒数**

```html
<body>
    <div style="font-size: 200px"></div>
</body>

<script>
    const div = document.querySelector('div')
    setInterval(()=>{
        const date = new Date()
        div.innerText = date.getSeconds().toString()
    },1000)
</script>
```

**页面展示当前时间，每秒更新**

```html
<body>
    <div style="font-size: 20px"></div>
</body>

<script>
    const div = document.querySelector('div')
    setInterval(()=>{
        const date = new Date()
        div.innerText = date.toLocaleString().replaceAll('/','-')
    },1000)
</script>
```

**页面展示当前时间，每秒更新，在 `10s` 后自动关闭**

```html
<body>
    <div style="font-size: 20px"></div>
</body>

<script>
    const div = document.querySelector('div')
    const echoTime = setInterval(() => {  // 开启一个定时器
        const date = new Date()
        div.innerText = date.toLocaleString().replaceAll('/', '-')
    }, 1000)

    setTimeout(() => {
        clearInterval(echoTime)   // 关闭定时器
    }, 10000)

</script>
```

**阅读协议，10s倒计时，按钮可点击**

```html {14}
<body>
    <button disabled>阅读注册协议 <span></span></button>
</body>

<script>
    const btn = document.querySelector('button')
    const sec = btn.querySelector('span')

    let i = 5
    const mToSec = setInterval(() => {
        sec.innerText = `(${i.toString()})`
        i--
        if (i < 0) {
            clearInterval(mToSec)   // 在传入的函数内关闭定时器
            btn.disabled = false    // 将按钮更换为可点击
            btn.removeChild(sec)    // 销毁计时节点
            btn.innerText = '同意协议'
        }
    }, 1000)
</script>
```





## 定时函数

`setTimeout()` 为`BOM`对象，也就是属于 `window` 下的

> [!caution] 注意
>
> `setTimeout()` 为异步函数

### 开启定时函数

``` javascript
setTimeout(函数，延迟时间)	// 只会执行一次
```

### 清除定时函数

```javascript
const timerId = setTimeout(函数，延迟时间)	// 只会执行一次
clearTimeout(timerId)
```



**示例**

```javascript
<body>
    <ul>
        <li>10s 后，我会被 setTimeout 改掉</li>
    </ul>
</body>
<script>
    const ul = document.querySelector('ul')
    setTimeout(()=>{
        ul.children[0].innerText = '我是 setTimeout, 举起手来，缴枪不杀'
    },10000)

</script>
```


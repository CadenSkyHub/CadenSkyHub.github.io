# Location

`location` 的数据类型对象，它拆分并保存了 `URL` 地址的各个部分



## 详情

`http://localhost:63342/JsLearn/index.html?_ijt=n0ikact5n5mh2n2uiubrle5ta5&_ij_reload=RELOAD_ON_SAVE`

```javascript
console.log({
    'href':location.href,   // http://localhost:63342/JsLearn/index.html?_ijt=.....
    'host':location.host,   // localhost:63342
    'hostName':location.hostname,   // localhost
    'port':location.port,           // 63342
    'pathName':location.pathname,   // "/JsLearn/index.html"
    'search':location.search,   // "?_ijt=n0ikact5n5mh2n2uiubrle5ta5&_ij_reload=RELOAD_ON_SAVE"
    'hash':location.hash,       // ""
    'origin':location.origin    // "http://localhost:63342"
})
```



| 属性/方法           | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| [href](#href)       | 获取或设置完整的 URL。例如，`window.location.href` 返回当前页面的完整 URL。<br />可以通过赋值修改页面的 URL。 |
| **`assign(url)`**   | 加载新的 URL。与直接赋值 `window.location.href = url` 相似，<br />但提供了更多控制和一些浏览器历史记录的支持。 |
| **`replace(url)`**  | 用新的 URL 替换当前页面，不在浏览器历史记录中创建新条目。    |
| **`protocol`**      | 获取或设置 URL 的协议部分，如 "http:" 或 "https:"。          |
| **`host`**          | 获取或设置 URL 的主机部分，包括端口号。                      |
| **`hostname`**      | 获取或设置 URL 的主机名部分，不包括端口号。                  |
| **`port`**          | 获取或设置 URL 的端口号。                                    |
| **`pathname`**      | 获取或设置 URL 的路径部分。                                  |
| **`search`**        | 获取或设置 URL 的查询部分，包括 "?"。                        |
| **`hash`**          | 获取或设置 URL 的片段标识符部分，包括 "#"。                  |
| **`origin`**        | 获取 URL 的协议、主机和端口部分。                            |
| **`reload(force)`** | 重新加载当前页面。如果参数 `force` 为 `true`，将会从服务器强制重新加载，否则可能从缓存中加载。 |





## href

获取当前 `url` 地址，或重定向到其他地址

- `replace` 与 `href` 的重定向效果一致，只是不在浏览器历史记录中创建新条目。

```javascript
console.log(location.href)  // 输出当前地址，完整地址
location.href = 'http://www.google.com'  // 会重定向，跳转到指定地址
```



**案例**

5 秒后自动跳转，或点击本按钮直接跳转

```html
<body>
    <button><span>5</span> 秒后自动跳转，或点击本按钮直接跳转</button>
</body>
<script>
    const btn = document.querySelector('button')
    const url = 'https://www.google.com'

    // 直接点击跳转方法
    btn.addEventListener('click', () => {
        location.href = url
    })

    let i = 5
    const intervalId = setInterval(() => {
        btn.children[0].innerText = i
        i--
        if (i < 0){
            location.href = url	// 跳转
            clearInterval(intervalId)	// 清除计时器
        }
    }, 1000)

</script>
```






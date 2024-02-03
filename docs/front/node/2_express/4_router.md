# 路由



## 路由分组

例。拆分三个文件

- `main.js`：主文件
- `article.js`：文章模块，包含文章模块的路由
- `user.js` ：用户模块，包含用户模块的路由

::: code-group

```javascript [main] {2-3}
const express = require('express')
const user = require('./user')
const article = require('./article')

const app = express()

app.use('/article', article)	// [!code focus:2]
app.use('/user', user)

;(async () => {
    app.listen(3000, '0.0.0.0', err => {
        if (err) {
            console.log('服务器启动失败')
        } else {
            console.log('服务器启动成功：', '127.0.0.1:3000')
        }
    })
})()
```

```javascript [user] {1,11}
const user = require('express').Router()

user.get('', async (req, res) => {
    res.jsonp({'path':  req.hostname + req.originalUrl})
})

user.get('/:id', async (req, res) => {
    res.jsonp({'path': req.hostname + req.originalUrl})
})

module.exports = user
```

```javascript [article] {1,11}
const article = require('express').Router()	// 注意这里

article.get('', async (req, res) => {
    res.jsonp({'path': req.hostname + req.originalUrl})
})

article.get('/:id', async (req, res) => {
    res.jsonp({'path':  req.hostname + req.originalUrl})
})

module.exports = article
```

:::





## 统一404

`Express` 中的路由匹配是从上到下顺序执行的，需要确保这个统一的 `404` 路由位于所有其他路由的末尾。

这样可以确保在 `Express` 中先匹配到其他路由，如果没有匹配到任何路由，就会执行这个统一的 `404` 路由。

```javascript
const express = require('express')

const app = express()

app.get('/app/:id', async (req, res) => {
    res.jsonp({'path': req.originalUrl})
})

app.post('/app/:id', async (req, res) => {
    res.jsonp({'path': req.originalUrl})
})

app.use((req, res) => {	// [!code focus:3]
    res.status(404).jsonp({'err': '404 - page not found'})
})
```


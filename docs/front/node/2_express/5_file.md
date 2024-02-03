

# 文件

官方文档：[Express.static](https://expressjs.com/zh-cn/api.html#express.static)

## 设置静态文件夹

- 该参数指定要从中提供静态资产的根目录。
- 该函数通过与提供的目录组合来确定要服务的文件。 
- 当找不到文件时，它不会发送 `404` 响应，而是调用移动到下一个中间件



```javascript
app.use(express.static('static'))   // 访问：localhost:3000/文件名称
app.use('/static',express.static('static'))   // 访问：locolhost:3000/static/文件名称
```

**文件夹结构**

``` bash
├── main.js
├── package.json
└── static
      └── upload
```



## 文件上传

`express`  默认使用了 [multer](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md) 中间件来进行文件上传。

> [!warning] 注意
>
> Multer 不会处理任何非 `multipart/form-data` 类型的表单数据。

### step.1 创建存储引擎

```javascript
const express = require('express')
const multer = require('multer')	// [!code ++]
const path = require('path')	// [!code ++]

const app = express()

const safePath = path.resolve(__dirname, './static/upload/')	// [!code ++]

/*
* 存储引擎, 自定义上传路径及文件名
* */
const storage = multer.diskStorage({	// [!code focus:9]
    destination: (req, file, cb) => {	// destination 设置上传路径
        cb(null, safePath)
    },
    filename: (req, file, cb) => {	// filename 设置文件名
        // 当前时间戳_文件名.扩展名
        cb(null, `${Date.now()}_${file.originalname.split('.')[0]}.${file.originalname.split('.').at(-1)}`)
    }
})
```



### step.2 创建 multer 实例

```javascript
/*
* 创建 multer 实例
* */
const upload = multer({storage: storage})
```



### step.3 上传路由

``` javascript
app.post('/upload', upload.single('file'), async (req, res) => {
    console.log(req.file)
    res.send("Hi")
})
```







## 文件下载

```javascript
const express = require('express')
const path = require('path')

const app = express()
	
app.get('/download', (req, res) => {	// [!code focus:5]
    res.download(
        path.resolve(__dirname, './static/upload/1706950111433_223.png')	// 绝对路径
    )
})
```


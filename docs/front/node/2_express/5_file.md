

# 文件

官方文档：[Express.static](https://expressjs.com/zh-cn/api.html#express.static)

### 设置静态文件夹

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



### 文件上传

`express`  默认使用了 [multer](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md) 中间件来进行文件上传。





### 文件下载




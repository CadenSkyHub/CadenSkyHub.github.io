# Dockerfile

官方文档（需代理）:[Dockerfile | Docker Docs](https://docs.docker.com/reference/dockerfile/)

## 常用命令

镜像就是包含了应用程序、程序运行时的系统函数库、运行配置等文件的文件包。构建镜像的过程其实就是把上述文件打包的过程。`Dockerfile`就是一个文本文件，其中包含一个个的指令，用指令来说明要执行什么操作来构建镜像。常见指令如下：

| 指令         | 说明                                           | 示例                           |
| ------------ | ---------------------------------------------- | ------------------------------ |
| `FROM`       | 指定基础镜像                                   | `FROM centos:7`                |
| `ENV`        | 设置环境变量，可在后面指令使用                 | `ENV key value`                |
| `COPY`       | 拷贝本地文件到镜像的指定目录                   | `COPY ./main.js /www`          |
| `RUN`        | 执行`linux`的`shell`命令，一般是安装过程的命令 |                                |
| `EXPOSE`     | 指定容器运行时监听的端口，是给镜像使用者看的   | `EXPOSE 8080`                  |
| `ENTRYPOINT` | 镜像中应用的启动命令，容器运行时调用           | `ENTRYPOINT node /www/main.js` |



## 打包镜像

``` bash
docker build -t 镜像名:tag	.
```

- `-t`：给镜像起名，`:` 后的 `tag` 如果不指定，则默认为 `latest`
- `.`：是指定 `Dockerfile` 的路径。如果在当前目录，则为 `.`



::: code-group

``` dockerfile [Dockerfile]
# 基础镜像
FROM node:18

# 创建工作目录
WORKDIR /www

# 映射工作目录
VOLUME ["/www"]

# 拷贝文件
COPY ./main.js .
COPY ./package.json .

# 安装依赖
RUN npm install

# 暴露端口
EXPOSE 8080

# 运行
ENTRYPOINT node ./main.js
```



``` js [main.js]
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hi,Im in Docker!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```



``` json [package.json]
{
  "description": "",
  "dependencies": {
    "express": "^4.18.3"
  }
}
```

:::

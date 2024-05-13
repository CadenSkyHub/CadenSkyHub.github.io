# 镜像

官方镜像库（需代理）:[Hub Docker](https://hub.docker.com/)

## mysql

``` bash
docker pull mysql:latest

docker run --name mysql \
        -d \
        -p 3306:3306 \
        -e MYSQL_INITDB_SKIP_TZINFO=Asia/Shanghai \
        -e MYSQL_ROOT_PASSWORD=123456 \
        -v /docker/mysql:/var/lib/mysql \
        mysql:latest
```



## nginx

### Setp.1 拉取镜像

``` bash
docker pull nginx:lagest
```

### Setp.2 启动一次容器

``` bash
docker run --name nginx -d -p 80:80 nginx
```

### Setp.3 复制文件

1. 宿主机创建文件夹

    ``` bash
    mkdir /docker/nginx/logs			# 日志
    mkdir /docker/nginx/conf			# 配置
    ```

2. 复制文件到对应目录

    ``` bash
    # 复制项目文件
    docker cp nginx:/usr/share/nginx/html /docker/nginx
    
    # 复制配置文件
    docker cp nginx:/etc/nginx/nginx.conf /docker/nginx/conf/nginx.conf
    
    docker cp nginx:/etc/nginx/conf.d /docker/nginx/conf/conf.d
    ```

3. 删除当前容器

    ``` bash
    docker rm -f nginx
    ```

### Setp.4 重新创建容器

``` bash
docker run --name nginx \
        -d \
        -p 80:80 \
        -p 443:443 \
        -v /docker/nginx/conf/conf.d:/etc/nginx/conf.d \
        -v /docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
        -v /docker/nginx/html:/usr/share/nginx/html \
        -v /docker/nginx/logs:/var/log/nginx \
nginx
```



> [!warning] 警告
>
> 外网只能访问到开放的端口，上方的 80和443





## phpmyadmin

``` bash
docker pull phpmyadmin:latest

docker run --name phpmyadmin \
        -d \
        -e PMA_ARBITRARY=1 \
        -p 3307:80 \
        --restart=always \
phpmyadmin:latest
```

## alist

``` bash
docker pull xhofe/alist

docker run -d --name="alist" \
        --restart=unless-stopped \
        -v /mnt/sata1-5/docker/alist:/opt/alist/data \
        -p 5244:5244 \
xhofe/alist:latest


# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
docker exec -it alist ./alist admin set NEW_PASSWORD
```


## gogs

``` bash
docker pull gogs/gogs

docker run -it --name=gogss \
        -p 30223:30223 \
        -p 3000:3000 \
        -v /mnt/sata1-5/docker/gogs:/data \
        --restart=always \
gogs/gogs
```



> [!warning] 注意
>
> - 如果 `ssh` 无法推送，则打开 `gogs/data/gogs/conf/app.ini`,将 `START_SSH_SERVER = fale` 改为 `true` 试试
>
>     ![](./assets/image-20231231003500409.png)
>
> - 安装时，`ssh` 端口要和`docker`创建外部映射以及内部自定义的端口一致，不然复制 `ssh` 地址会发生错误。
>
>     <span style="color:red;font-weight:bold;">因为复制的时候需要的是这个端口，外部无法使用22，因为宿主机占用了。所以外部映射端口地址和容器内部自定义端口地址要一致。</span>
>     
>     ![image-20231231003247560](./assets/image-20231231003247560.png)

 



## Portainer-ce

中文汉化版：[6053537/portainer-ce | Docker Hub](https://hub.docker.com/r/6053537/portainer-ce)

``` bash
docker pull 6053537/portainer-ce

docker run -d \
    --restart=always \
    --name="portainer" \
    -p 9000:9000 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /docker/portainer:/data \
6053537/portainer-ce
```



## Postgresql

### postgresql

镜像：[Postgres | Docker Hub](https://hub.docker.com/_/postgres)

``` bash
docker pull postgres

docker run \
--name postgres \
-v /mnt/sata1-5/docker/postgres:/var/lib/postgresql/data \
-p 5432:5432 \
-e POSTGRES_USER=root \				# 默认为 postgres
-e POSTGRES_PASSWORD=123456 \
-d \
postgres
```



### pgadmin

镜像：[elestio/pgadmin | Docker Hub](https://hub.docker.com/r/elestio/pgadmin)

``` bash
docker pull elestio/pgadmin

docker run --name pgadmin \
-e PGADMIN_DEFAULT_EMAIL=pgadmin@gmail.com \
-e PGADMIN_DEFAULT_PASSWORD=123456 \
-e PGADMIN_LISTEN_PORT=8080 \
-p 5433:8080 \
-d \
elestio/pgadmin
```



## chatgpt-next-web

- [ChatGPTNextWeb](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)
- [GPT_API_free](https://github.com/chatanywhere/GPT_API_free?tab=readme-ov-file)

``` bash
docker pull yidadaa/chatgpt-next-web

docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY=sk-xxxx \
   -e CODE=your-password \
   -e BASE_URL=https://api.chatanywhere.tech \
   yidadaa/chatgpt-next-web
```

`BASE_URL` 及` OPENAI_API_KEY` 可以通过 [GPT_API_free](https://github.com/chatanywhere/GPT_API_free?tab=readme-ov-file) 免费获得





## WARP-Clash-API

- [WARP-Clash-API](https://github.com/vvbbnn00/WARP-Clash-API)

该项目可以让你通过订阅的方式使用`WARP+`，支持`Clash`、`Shadowrocket`等客户端。

``` bash
docker pull vvbbnn00/warp-clash-api

docker run --name warp \
	-d \
	-p 3002:3000 \
	vvbbnn00/warp-clash-api
```


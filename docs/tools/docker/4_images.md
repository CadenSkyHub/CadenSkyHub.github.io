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
    mkdir nginx/logs			# 日志
    mkdir nginx/conf			# 配置
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


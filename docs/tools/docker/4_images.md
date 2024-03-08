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


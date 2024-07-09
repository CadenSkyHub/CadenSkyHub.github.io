# 自托管

[文档](https://docs.directus.io/self-hosted/quickstart.html)

`SECRET`：是必需的，并且应该是一个安全的随机值，它用于对令牌进行签名。

`ADMIN_EMAIL`：首次启动时的初始管理员用户凭据。

`ADMIN_PASSWORD`：首次启动时的初始管理员用户密码。

> [!caution] 注意！
>
> - 不可以直接挂载根目录，不然运行不起来
> - `-u root` 给 `root` 权限，不然本地的文件夹是不可读写的
> - `mysql` 不要大于 `8.0`
> - 要现在本地创建 `.env` 文件，再挂载到 `docker` 容器中。`.env` 配置：[查看所有配置](https://docs.directus.io/self-hosted/config-options.html)

```
docker run \
    --name directus \
    -d \
    -u root \
    -p 81:8055 \
    -v '$PWD/uploads:/directus/uploads' \
    -v '$PWD/extensions:/directus/extensions' \
    -v '$PWD/.env:/directus/.env' \
    -e SECRET=aabbccdd \	
    -e DB_CLIENT=mysql \
    -e DB_HOST=47.93.188.97 \
    -e DB_PORT=3306 \
    -e DB_DATABASE=learn \
    -e DB_USER=learn \
    -e DB_PASSWORD=123456 \
    -e ADMIN_EMAIL=qq@qq.com \
    -e ADMIN_PASSWORD=123456 \
    -e WEBSOCKETS_ENABLED=true \
directus/directus
```

> [!tip] 如果需要 Redis
>
> ```
> -e CACHE_ENABLED="true"
> -e CACHE_AUTO_PURGE="true"
> -e CACHE_STORE="redis"
> -e REDIS="redis://cache:6379"
> ```



## `.env` 参考

```
HOST="0.0.0.0"

SECRET="abcd1234dcba"

# 数据库
DB_CLIENT="mysql"
DB_HOST="mysql"
DB_PORT=3306
DB_DATABASE="directus"
DB_USER="directus"
DB_PASSWORD="password"

# cors
CORS_ENABLED=true


# Redis
# REDIS="redis://user:password@127.0.0.1:6380/4"
# REDIS_HOST="127.0.0.1"
# REDIS_PORT=6379
# REDIS_USERNAME="username"
# REDIS_PASSWORD="password"


# 管理员账户
ADMIN_EMAIL="caden@caden.com"
ADMIN_PASSWORD="123456"
```



## `docker` 托管参考

```
docker run \
    --name directus \
    -d \
    -u root \
    -p 8055:8055 \
    -v $PWD/uploads:/directus/uploads \
    -v $PWD/extensions:/directus/extensions \
    -v $PWD/.env:/directus/.env \
    --restart=always \
    --network=1panel-network \
directus/directus
```








# 用户管理

## 创建管理员用户

``` javascript
// 1. 首先，使用 mongo 命令连接到数据库
mongo

// 2. 使用 admin 数据库
use admin

// 3. 创建用户，并赋予权限
db.createUser({user:"admin", pwd:"123456", roles:["root"]})
```



## 创建普通用户

创建普通用户，并赋予此用户特定数据库全部权限

``` javascript
// 1. 使用管理员账户登录
mongo -u root -p password

// 2. 切换到指定数据库
use learn;

// 3. 创建用户并指定该数据库高级权限
db.createUser({user:"learn", pwd:"123456", roles:[{role:"dbOwner", db:"learn"}]})
```





## 查看所有用户

``` bash
show users;
```



## 删除用户

> [!important] 注意
>
> 要确保当前在 `管理员` 权限下，如果没有管理员账户，首先应该创建一个

``` javascript
db.dropUser("<username>")
```


# 开始

## 连接

`default` 为默认用户名

```
redis-cli --pass password

redis-cli -u redis://default:password@host:port/0	远程连接，数据库 0 default 为默认用户名
```

## 原样输出，尤其是中文

```
redis-cli --raw --pass password
```



## 数据类型

基本数据类型

| 类型        | 说明         |
| ----------- | ------------ |
| `String`    | 字符串类型   |
| `Hash`      | 哈希类型     |
| `List`      | 列表类型     |
| `SET`       | 集合类型     |
| `SortedSet` | 有序集合类型 |



## key 的设定建议

用户有 id，而商品也有 id 可以按照以下方式来设定，存 id 肯定不行，因为可能会被覆盖，所以项目中一般都是以 `项目名:业务名:id` 这种方式来给 `key` 设定名称，例如：用户 `project:user:id`  商品 `project:good:id`

```shell
# 存储 id 为 1 的用户 caden
SET redis:user:1 caden
OK

# 存储 id 为 2 的用户 emma
SET redis:user:2 emma
OK

# 存储 id 为 1 的商品 computer
SET redis:good:1 computer
OK

# 查看所有 key
KEYS *
1) "redis:good:1"
2) "redis:user:2"
3) "redis:user:1"

# 查看 id 为 1 的用户
GET redis:user:1
"caden"
```
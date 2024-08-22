# 通用命令

## 常用命令

KEYS 查看模板的所有 key
DEL 删除指定的 key

| 命令                    | 说明                                            |
| ----------------------- | ----------------------------------------------- |
| [`KEYS`](#KEYS)         | 查看模板的所有 key                              |
| [`DEL`](#DEL)           | 删除指定的 key                                  |
| [`EXISTS`](#EXISTS)     | 判断 key 是否存在                               |
| [`EXPIRE`](#EXPIRE)     | 给 key 设置一个有效期，当到了有效期，则自动删除 |
| [`TTL`](#TTL)           | 查看 key 的有效期                               |
| [`FLUSHALL`](#FLUSHALL) | 删除所有 **慎用**                               |



## KEYS

查看模板的所有 key

- 返回所有的 key
- 如果没有则返回 `(empty array)`

### 命令

``` shell
127.0.0.1:6379> HELP KEYS

  KEYS pattern
  summary: Returns all key names that match a pattern.
  since: 1.0.0
  group: generic
```

### 示例

``` shell
# 如果没有
KEYS *
(empty array)

# 设置三个 key value
SET lastname emma
SET firstname caden
SET age 12

# 查询所有
KEYS *
1) "firstname"
2) "lastname"
3) "age"

# 查询含有 name 的 key
KEYS *name*
1) "firstname"
2) "lastname"

# 查询以 a 开头的
KEYS a*
1) "age"

# 查询以 a 开头，长度为 3 的 key
KEYS a??
1) "age"
```

## DEL

删除指定的 key

返回删除的数量

### 命令

``` shell
127.0.0.1:6379> help DEL

  DEL key [key ...]
  summary: Deletes one or more keys.
  since: 1.0.0
  group: generic
```

### 示例

``` shell
SET lastname emma
SET firstname caden
SET age 12

# 删除 age
DEL age
(integer) 1

# 删除不存在的
DEL age
(integer) 0

# 删除多个
DEL firstname lastname
(integer) 2
```



## EXISTS

判断 key 是否存在

- 存在返回 1
- 不存在返回 0

### 命令

``` shell
127.0.0.1:6379> help EXISTS

  EXISTS key [key ...]
  summary: Determines whether one or more keys exist.
  since: 1.0.0
  group: generic
```

### 示例

``` shell
SET name

# 判断存在的 key
EXISTS name
(integer) 1

# 判断不存在的 key
EXISTS age
(integer) 0
```



## EXPIRE

给 key 设置一个有效期，当到了有效期，则自动删除

### 命令

``` shell
127.0.0.1:6379> help EXPIRE

  EXPIRE key seconds [NX|XX|GT|LT]
  summary: Sets the expiration time of a key in seconds.
  since: 1.0.0
  group: generic
```

### 示例

```shell
# 先设置一个 key
SET name caden
OK

# 设置过期事件为 10s
EXPIRE name 10
(integer) 1

# 查看剩余过期事件
TTL name
(integer) 6

# ... 一直 TTL 等到到期后
TTL name
(integer) -2
```



## TTL

查看 key 的有效期

- `-1` 永久有效
- `-2` 已经被移除

### 命令

``` shell
127.0.0.1:6379> help TTL

  TTL key
  summary: Returns the expiration time in seconds of a key.
  since: 1.0.0
  group: generic
```

示例请查看 [`EXPIRE`](#EXPIRE)



## FLUSHALL 慎用

从数据库删除所有 key, **慎用**

### 命令

``` shell
127.0.0.1:6379> help FLUSHALL

  FLUSHALL [ASYNC|SYNC]
  summary: Removes all keys from all databases.
  since: 1.0.0
  group: server
```

### 示例

```shell
FLUSHALL
OK
```

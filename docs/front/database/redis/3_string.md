# String

可以分为 3 类

| 类型     | 说明                         |
| -------- | ---------------------------- |
| `string` | 普通字符串                   |
| `int`    | 整数类型，可以自增、自减操作 |
| `float`  | 浮点类型，可以自增、自减操作 |



## 常用命令

| 命令                            | 说明                                                         |
|-------------------------------| ------------------------------------------------------------ |
| [`SET`](#set)                 | 添加或者修改已经存在的一个 String 类型的键值对               |
| [`GET`](#get)                 | 根据 key 获取 value                                          |
| [`MSET`](#mset)               | 批量添加多个 string 类型的键值对，如果有存在的，则会覆盖     |
| [`MGET`](#mget)               | 根据多个 key 获取的对应的多个 value                          |
| [`INCR`](#incr)               | 让一个整型的 value 自增 1                                    |
| [`INCRBY`](#incrby)           | 让一个整型的 value 自增并指定步长，例如：`INCRBY num 2` 让 num 值增  `2` |
| [`INCRBYFLOAT`](#incrbyfloat) | 让一个浮点类型的 value 自增并指定步长，例如 `INCRBYFLOAT flo -10` 让 flo 的值增 `-10` |
| [`SETNX`](#setnx)             | 添加一个 string 类型的键值对，如果 key 不存在，则添加，否则不执行 |
| [`SETEX`](#setex)             | 添加一个 string 类型的键值对，并且指定有效期                 |





## SET

设置键的字符串值，忽略其类型。如果键不存在，则创建该键。

如果 key 不存在，则新增，如果存在，则覆盖，也就是修改

### 命令

``` shell
127.0.0.1:6379> help SET

  SET key value [NX|XX] [GET] [EX seconds|PX milliseconds|EXAT unix-time-seconds|PXAT unix-time-milliseconds|KEEPTTL]
  summary: Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.
  since: 1.0.0
  group: string
```

### 示例

``` shell
# 新增 name 为 caden
SET name caden
OK

# 修改 name 为 emma
SET name emma
OK

# 查询看看是不是
GET name
"emma"
```



## GET

根据 key 获取 value

### 命令

```shell
127.0.0.1:6379> help GET

  GET key
  summary: Returns the string value of a key.
  since: 1.0.0
  group: string
```

### 示例

```shell
# 新增设定 name 为 caden
SET name caden
OK

# 获取 name
GET name
"caden"
```



## MSET

批量添加多个 string 类型的键值对

- 如果有存在的，则会覆盖

### 命令

``` shell
127.0.0.1:6379> help MSET

  MSET key value [key value ...]
  summary: Atomically creates or modifies the string values of one or more keys.
  since: 1.0.1
  group: string
```

### 示例

``` shell
# 插入 name:caden age:12 gender:boy
MSET name caden age 12 gender boy
OK

# 查看
MGET name age gender
1) "caden"
2) "12"
3) "boy"

# 插入或者叫修改 name 为 emma, age 为 13
MSET name emma age 13
OK

# 查看
MGET name age gender
1) "emma"
2) "13"
3) "boy"
```



## MGET

批量查询多个 key

### 命令

``` shell
127.0.0.1:6379> help MGET

  MGET key [key ...]
  summary: Atomically returns the string values of one or more keys.
  since: 1.0.0
  group: string
```

示例请查看 [`MSET`](#MSET)



## INCR

将键的整数值增加1。如果该键不存在，则使用 0 作为初始值。

### 命令

```shell
127.0.0.1:6379> help INCR

  INCR key
  summary: Increments the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.
  since: 1.0.0
  group: string
```

### 示例

``` shell
# 新增设定 age 为 12
SET age 12
OK

# 将 age + 1
INCR age
(integer) 13
```



## INCRBY

将键的整数值增加一个数字。如果该键不存在，则使用 0 作为初始值。

> [!CAUTION] 注意！
>
> `INCRBY` 不支持 `float` 类型



### 命令

``` shell
127.0.0.1:6379> help INCRBY

  INCRBY key increment
  summary: Increments the integer value of a key by a number. Uses 0 as initial value if the key doesn't exist.
  since: 1.0.0
  group: string
```



### 示例

```shell
# 新增设定 age 为 20
SET age 20
OK

# 将 age + 10
INCRBY age 10
(integer) 30

# 将 age - 10
INCRBY age -10
(integer) 20
```



## INCRBYFLOAT

将键的浮点值增加一个数字。如果该键不存在，则使用 0 作为初始值。

> [!CAUTION] 注意！
>
> `INCRBYFLOAT` 不支持 `int` 类型

### 命令

``` shell
127.0.0.1:6379> help INCRBYFLOAT

  INCRBYFLOAT key increment
  summary: Increment the floating point value of a key by a number. Uses 0 as initial value if the key doesn't exist.
  since: 2.6.0
  group: string
```

### 示例

```shell
# 新增设定 money 为 3.3
SET money 3.3
OK

# 将 money + 2.5
INCRBYFLOAT money 2.5
"5.8"

# 将 money - 2.5
INCRBYFLOAT money -2.5
"3.3"
```



## SETNX

仅在键不存在时设置键的字符串值。如果存在，则不执行任何操作。

### 命令

```shell
help SETNX

  SETNX key value
  summary: Set the string value of a key only when the key doesn't exist.
  since: 1.0.0
  group: string
```



### 示例

```shell
# 使用 SETNX 新增设定 name caden
SETNX name caden
(integer) 1

# 再次使用 SETNX 新增设定 name 为 emma
SETNX name emma
(integer) 0

# 发现第二次无法设定，因为 name 已经存在了
GET name
"caden"
```



## SETEX

设置键的字符串值和过期时间。如果键不存在，则创建该键。

> [!WARNING] 注意
>
> 使用 `SETEX` 时，如果 `key` 存在，则会覆盖掉原值

### 命令

```shell
127.0.0.1:6379> help SETEX

  SETEX key seconds value
  summary: Sets the string value and expiration time of a key. Creates the key if it doesn't exist.
  since: 2.0.0
  group: string
```

### 示例1

```shell
# 新增设定 name 为 caden 过期时间为 10s
SETEX name 10 caden
OK

# TTL 检查
TTL name
(integer) 5

# 过期后
TTL name
(integer) -2
```

### 示例2

``` shell
# 新增设定 name 为 caden
SET name caden
OK

# 使用 SETEX 给 name 增加 10s 过期时间，并修改 name 为 emma
SETEX name 20 emma
OK

# 查看 name
GET name
"emma"
```


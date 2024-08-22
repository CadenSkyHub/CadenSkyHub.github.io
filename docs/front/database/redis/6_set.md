# Set

- 无序
- 元素不可重复
- 支持交集、并集、差集等功能

## 常用命令

**单集合操作**

| 命令                        | 说明                                                         |
|---------------------------| ------------------------------------------------------------ |
| [`SADD`](#sadd)           | 将一个或多个成员添加到集合中。如果集合不存在，则创建该键     |
| [`SREM`](#srem)           | 从集合中删除一个或多个成员。如果最后一个成员被删除，则删除该集合 |
| [`SCARD`](#scard)         | 返回集合中的成员数量。                                       |
| [`SISMEMBER`](#sismember) | 判断某个成员是否属于集合。                                   |
| [`SMEMBERS`](#smembers)   | 返回集合的所有成员。                                         |

**多集合操作**

| 命令                  | 说明                 |
|---------------------| -------------------- |
| [`SINTER`](#sinter) | 返回多个集合的交集。 |
| [`SDIFF`](#sdiff)   | 返回多个集合的差集。 |
| [`SUNION`](#sunion) | 返回多个集合的并集。 |





## SADD

将一个或多个成员添加到集合中。如果集合不存在，则创建该键

### 命令

```shell
help SADD                                                               
                                                                                        
  SADD key member [member ...]                                                          
  summary: Adds one or more members to a set. Creates the key if it doesn't exist.      
  since: 1.0.0                                                                          
  group: set 
```

### 示例

``` shell
# 张三的好友有 李四、王五、赵六
SADD zsfriends 李四 王五 赵六
3

# 看一下
SMEMBERS zsfriends
李四
王五
赵六
```



## SREM

从集合中删除一个或多个成员。如果最后一个成员被删除，则删除该集合

### 命令

```shell
help SREM                                                               
                                                                                        
  SREM key member [member ...]                                                          
  summary: Removes one or more members from a set. Deletes the set if the last member wa
s removed.                                                                              
  since: 1.0.0                                                                          
  group: set  
```

### 示例

```shell
# 张三的好友有 李四、王五、赵六
SADD zsfriends 李四 王五 赵六
3

# 和李四闹掰了，删除李四
SREM zsfriends 李四
1

# 再看看
SMEMBERS zsfriends
王五
赵六
```



## SCARD

返回集合中的成员数量。

### 命令

```shell
help SCARD                                                              
                                                                                        
  SCARD key                                                                             
  summary: Returns the number of members in a set.                                      
  since: 1.0.0                                                                          
  group: set
```

### 示例

```shell
# 张三的好友有 李四、王五、赵六
SADD zsfriends 李四 王五 赵六
3

# 看看数量
SCARD zsfriends
3
```



## SISMEMBER

判断某个成员是否属于集合。

- 存在返回 1
- 不存在返回 0

### 命令

```shell
help SISMEMBER                                                          
                                                                                        
  SISMEMBER key member                                                                  
  summary: Determines whether a member belongs to a set.                                
  since: 1.0.0                                                                          
  group: set 
```

### 示例

```shell
# 张三的好友有 李四、王五、赵六
SADD zsfriends 李四 王五 赵六
3

# 看看 李王八 在不在好友中
SISMEMBER zsfriends 李王八
0

# 看看 赵六呢？
SISMEMBER zsfriends 赵六
1
```



## SMEMBERS

返回集合的所有成员。

### 命令

```shell
help SMEMBERS                                                           
                                                                                        
  SMEMBERS key                                                                          
  summary: Returns all members of a set.                                                
  since: 1.0.0                                                                          
  group: set
```

### 示例

``` shell
# 张三的好友有 李四、王五、赵六
SADD zsfriends 李四 王五 赵六
3

# 看一下
SMEMBERS zsfriends
李四
王五
赵六
```





## SINTER

返回多个集合的交集。

### 命令

```shell
help SINTER                                                       
                                                                                  
  SINTER key [key ...]                                                            
  summary: Returns the intersect of multiple sets.                                
  since: 1.0.0                                                                    
  group: set
```

### 示例

```shell
# 张三有 李四 王五 刘六 三个好友， 李四有 王五 刘四 张三 三个好友
SADD zsfriends 李四 王五 刘六
3
SADD lsfriends 王五 刘四 张三
3

# 看看他们共同的朋友
SINTER zsfriends lsfriends
王五
```





## SDIFF

返回多个集合的差集。

### 命令

```shell
help SDIFF                                                        
                                                                                  
  SDIFF key [key ...]                                                             
  summary: Returns the difference of multiple sets.                               
  since: 1.0.0                                                                    
  group: set
```

### 示例

```shell
# 张三有 李四 王五 刘六 三个好友， 李四有 王五 刘四 张三 三个好友
SADD zsfriends 李四 王五 刘六
3
SADD lsfriends 王五 刘四 张三
3

# 看看张三有但是李四没有的朋友
SDIFF zsfriends lsfriends
李四
刘六

# 看看李四有的但是张三没有的朋友
SDIFF lsfriends zsfriends
刘四
张三
```



## SUNION

返回多个集合的并集。

- 如果有重复的，则只记录一次

### 命令

```shell
help SUNION                                                       
                                                                                  
  SUNION key [key ...]                                                            
  summary: Returns the union of multiple sets.                                    
  since: 1.0.0                                                                    
  group: set 
```

### 示例

```shell
# 张三有 李四 王五 刘六 三个好友， 李四有 王五 刘四 张三 三个好友
SADD zsfriends 李四 王五 刘六
3
SADD lsfriends 王五 刘四 张三
3

# 把他们的朋友汇总起来
SUNION zsfriends lsfriends
李四
王五
刘六
刘四
张三
```


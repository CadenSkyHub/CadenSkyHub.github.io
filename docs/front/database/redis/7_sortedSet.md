# SortedSet

每一个元素都带有 `score` 属性，可以基于 `score` 属性对元素排序。常用于实现排行榜。

- 可排序
- 不可重复



> [!TIP] 提示
>
> 默认为 升序排名。如果要降序。 则需要在命令的 `Z` 后面添加 `REV`
>
> 例如：`ZREVRANGE`  、 `ZREVRANK` ...

## 常用命令

单集合操作

| 命令                                | 说明                                                         |
|-----------------------------------| ------------------------------------------------------------ |
| [`ZADD`](#zadd)                   | 将一个或多个成员添加到有序集合中，或更新它们的`score` 。如果集合不存在，则创建该键。 |
| [`ZREM`](#zrem)                   | 删除一个或多个成员。如果所有成员都被删除，则删除该有序集合。 |
| [`ZSCORE`](#zscore)               | 返回选定成员的 `score`。                                     |
| [`ZRANK`](#zrank)                 | 返回按升序排序中指定成员的排名                               |
| [`ZCARD`](#zcard)                 | 返回成员数量。                                               |
| [`ZCOUNT`](#zcount)               | 返回在指定 `score` 范围内成员的数量。                        |
| [`ZINCRBY`](#zincrby)             | 增加某个成员的 `score`，步长为指定的 `increment` 值          |
| [`ZRANGE`](#zrange)               | 按照`score`排序后，返回在指定索引范围内的成员                |
| [`ZRANGEBYSCORE`](#zrangebyscore) | 返回在指定 `score` 范围内的成员。                            |



## ZADD

将一个或多个成员添加到有序集合中，或更新它们的分数。如果集合不存在，则创建该键。

### 命令

```shell
help ZADD                                                         
                                                                                  
  ZADD key [NX|XX] [GT|LT] [CH] [INCR] score member [score member ...]            
  summary: Adds one or more members to a sorted set, or updates their scores. Crea
tes the key if it doesn't exist.                                                  
  since: 1.2.0                                                                    
  group: sorted-set  
```

### 示例

```shell
# 一个排序集合，数学成绩，张三 32 李四 55 刘武 43 元华 90
ZADD math 32 张三 55 李四 43 刘武 90 元华 
4

# 查看，包括 SCORES
ZRANGE math 0 -1 WITHSCORES
张三
32
刘武
43
李四
55
元华
90
```





## ZREM

删除一个或多个成员。如果所有成员都被删除，则删除该有序集合。

- 返回删除的数量

### 命令

```shell
help ZREM                                                         
                                                                                  
  ZREM key member [member ...]                                                    
  summary: Removes one or more members from a sorted set. Deletes the sorted set i
f all members were removed.                                                       
  since: 1.2.0                                                                    
  group: sorted-set
```

### 示例

``` shell
# 一个排序集合，数学成绩，张三 32 李四 55 刘武 43 元华 90
ZADD math 32 张三 55 李四 43 刘武 90 元华 
4

# 删除 李四的成绩
ZREM math 李四
1

# 查看
ZRANGE math 0 -1 WITHSCORES
张三
32
刘武
43
元华
90
```



## ZSCORE

返回选定成员的 `score`。

- 如果该成员不存在则返回 `nil`

### 命令

```shell
help ZSCORE                                                       
                                                                                  
  ZSCORE key member                                                               
  summary: Returns the score of a member in a sorted set.                         
  since: 1.2.0                                                                    
  group: sorted-set
```

### 示例

``` shell
# 一个排序集合，数学成绩，张三 32 李四 55 刘武 43 元华 90
ZADD math 32 张三 55 李四 43 刘武 90 元华 
4

# 查看刘武的 score
ZSCORE math 刘武
43
```



## ZRANK

返回按升序排序中指定成员的排名

- 值如果不存在，返回 `nil`

### 命令

```shell
help ZRANK

  ZRANK key member [WITHSCORE]
  summary: Returns the index of a member in a sorted set ordered by ascending scores.
  since: 2.0.0
  group: sorted-set
```

### 示例

``` shell
# 一个排序集合，数学成绩，张三 32 李四 55 刘武 43 元华 90
ZADD math 32 张三 55 李四 43 刘武 90 元华 
4

# 查看 李四的排名
ZRANK math 李四
2
```



## ZCARD

返回成员数量。

### 命令

```shell
help ZCARD                                                        
                                                                                  
  ZCARD key                                                                       
  summary: Returns the number of members in a sorted set.                         
  since: 1.2.0                                                                    
  group: sorted-set
```

### 示例

``` shell
# 一个排序集合，数学成绩，张三 32 李四 55 刘武 43 元华 90
ZADD math 32 张三 55 李四 43 刘武 90 元华 
4

# 查看数量
ZCARD math
4
```



## ZCOUNT

返回在指定 `score` 范围内成员的数量。

- 没有则返回 0

### 命令

```shell
help ZCOUNT                                                       
                                                                                  
  ZCOUNT key min max                                                              
  summary: Returns the count of members in a sorted set that have scores within a 
range.                                                                            
  since: 2.0.0                                                                    
  group: sorted-set
```

### 示例

```shell
# 一个排序集合，数学成绩，张三 32 李四 55 刘武 43 元华 90
ZADD math 32 张三 55 李四 43 刘武 90 元华 
4

# 查看 50-90 之间的成员数量
ZCOUNT math 50 90
2
```



## ZINCRBY

增加某个成员的 `score`，步长为指定的 `increment` 值

- 如果该成员不存在，则会执行操作
- 如果该成员不存在，则会新增该成员

### 命令

```shell
help ZINCRBY                                                      
                                                                                  
  ZINCRBY key increment member                                                    
  summary: Increments the score of a member in a sorted set.                      
  since: 1.2.0                                                                    
  group: sorted-set
```

### 示例

``` shell
# 一个排序集合，数学成绩，张三 32 李四 55 刘武 43 元华 90
ZADD math 32 张三 55 李四 43 刘武 90 元华 
4

# 给 张三 的分数 增加 10
ZINCRBY math 10 张三
42

# 给 张三 的份数 减少 10
ZINCRBY math -10 张三
32
```



## ZRANGE

按照`score`排序后，返回在指定索引范围内的成员

- `WITHSCORES` 包括 `scores`
- 如果没有该 `key` 返回 `nil`

### 命令

```shell
help ZRANGE                                                       
                                                                                  
  ZRANGE key start stop [BYSCORE|BYLEX] [REV] [LIMIT offset count] [WITHSCORES]   
  summary: Returns members in a sorted set within a range of indexes.             
  since: 1.2.0                                                                    
  group: sorted-set
```

### 示例

```shell
# 一个排序集合，数学成绩，张三 32 李四 55 刘武 43 元华 90
ZADD math 32 张三 55 李四 43 刘武 90 元华 
4

# 查看所有成员
ZRANGE math 0 -1
张三
刘武
李四
元华

# 查看所有成员和 score
ZRANGE math 0 -1 WITHSCORES
张三
32
刘武
43
李四
55
元华
90
```



## ZRANGEBYSCORE

返回在指定 `score` 范围内的成员。

- 如果没有，则返回 `nil`

### 命令

```shell
help ZRANGEBYSCORE                                                
                                                                                  
  ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]                     
  summary: Returns members in a sorted set within a range of scores.              
  since: 1.0.5                                                                    
  group: sorted-set
```

### 示例

``` shell
# 一个排序集合，数学成绩，张三 32 李四 55 刘武 43 元华 90
ZADD math 32 张三 55 李四 43 刘武 90 元华 
4

# 返回分数为 40-80 的成员
ZRANGEBYSCORE math 40 80 
刘武
李四
```
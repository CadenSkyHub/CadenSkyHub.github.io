# 删除文档

## db.col.deleteOne()

::: details 语法

``` javascript
db.collection.deleteOne(<filter>)
```

参数

- `filter`：使用查询运算符指定删除条件。

返回

- `acknowledged`：是否执行
- `deletedCount`：删除的文档数
    - 成功：返回删除的文档个数
    - 失败：返回 `0`

:::

在 `students` 集合中，删除一个文档

``` javascript
db.students.deleteOne(	// [!code focus:7]
    {name:'王五'}
)

db.students.deleteOne(
    {_id:ObjectId('65ef13dffba2a36cb9d7923c')}
)

# output
{ 
 acknowledged: true,	# 是否执行
 deletedCount: 1 	# 删除的文档数
}

{ 
 acknowledged: true, 	# 是否执行
 deletedCount: 0  	# 删除的文档数
}
```

> [!important] 重要
>
> 通过 `_id` 删除数据，需要使用 `ObjectId('_id')` 进行查找删除

## db.col.deleteMany()

::: details 语法

``` javascript
db.collection.deleteMany(<filter>)
```

参数

- `filter`：使用查询运算符指定删除条件。

返回

- `acknowledged`：是否执行
- `deletedCount`：删除的文档数
    - 成功：返回删除的文档个数
    - 失败：返回 `0`

:::

在 `students` 集合中，删除所有 `age:0` 的文档

- `acknowledged`：是否执行
- `deletedCount`：删除的文档数
    - 成功：返回删除的文档个数
    - 失败：返回 `0`

``` javascript
db.students.deleteMany(	// [!code focus:3]
    {age:0}
)

# output
{ 
 acknowledged: true,	# 是否执行
 deletedCount: 2 	# 删除的文档数
}
```

> [!tip] 删除所有文档
>
> ``` javascript
> db.students.deleteMany({})
> ```
>
> 不指定条件即可删除所有文档


# 查询文档

``` bash
db.students.insertMany(
    [
        { "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
        { "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "A" },
        { "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "D" },
        { "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" }, "status": "D" },
        { "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" }
    ]
)
```

## 基本查询

### db.col.findOne()

::: details 语法

[db.collection.findOne](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/)

``` javascript
db.collection.findOne( <query>, <projection>, <options> )
```

参数

- `query`：可选，使用查询运算符指定查询选择条件。如果为 `{}`或空 则返回集合中返回的第一个文档。
- `projection`：指定要使用投影运算符返回的字段。省略此参数可返回匹配文档中的所有字段。
- `options`：指定查询的其他选项。这些选项可修改查询行为以及返回结果的方式。[详细文档](https://mongodb.github.io/node-mongodb-native/4.0//interfaces/findoptions.html)。

返回

- 返回数据，无数据则返回 `null`

:::

1. 查询 `students` 的第一个文档

    ``` javascript
    db.students.findOne()
    ```

2. 查询 `students` 中 `{item:'journal'}` 的文档

    ``` javascript
    db.students.findOne({item:'journal'})
    ```

3. 查询 `students` 中 `{item:'journal'}` 的文档，且只返回 `size`

    ``` javascript {3}
    db.students.findOne(
        {item:'journal'},
        {'size':1, _id:0}
    )
    ```

    

### db.col.find()

::: details 语法

[db.collection.find()](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/)

``` javascript
db.collection.find( <query>, <projection>, <options> )
```

参数

- `query`：可选，使用查询运算符指定查询选择条件。如果为 `{}`或空 则返回集合中返回的第一个文档。
- `projection`：指定要使用投影运算符返回的字段。省略此参数可返回匹配文档中的所有字段。
- `options`：指定查询的其他选项。这些选项可修改查询行为以及返回结果的方式。[详细文档](https://mongodb.github.io/node-mongodb-native/4.0//interfaces/findoptions.html)。

返回

- 返回数据，无数据则什么都不返回

:::

1. 查询 `students` 集合所有数据

    ``` javascript
    db.students.find()
    ```

2. 查询 `students` 集合所有数据，仅需要 `size`

    ``` javascript {2,3}
    db.students.find(
        {},
        {'size':1, _id:0}
    )
    ```

    



## 条件查询

[查看更多](./9_operate_symbol)



## 排序查询

> [!tip] 说明
>
> `$sort`:排序
>
> - `1`：正序
> - `-1`：倒序

查询所有数据，按照 `qty` 正序查询

```javascript {2}
db.students.aggregate([
    { $sort: {qty:1} }
])
```





## 分页查询

> [!tip] 提示
>
> `$skip`： 跳过前面几条数据
>
> `$limit`：限制返回的数据条数



> [!important] 算法
>
> ``` javascript
> skip = (pageNumber - 1) * pageSize
> ```
>
> - `pageSize`： 每页显示的数据条数 
> - `pageNumber`： 要查询的页数



1. 查询前两条数据

    ``` javascript
    db.students.aggregate( 
        [ 
            { $limit:2 }
        ] 
    )
    ```

2. 每页显示两条，显示第二页信息

    ``` javascript
    db.students.aggregate(
        [
            { $skip:2 },
            { $limit:2 }
        ]
    )
    ```

3. 根据 `qty` 正序，每页显示两条，显示第二页数据

    ``` javascript
    db.students.aggregate(
        [
            { $sort: { qty: 1} },
            { $skip: 2 },
            { $limit: 2 }
        ]
    )
    ```



## 计数

> [!tip] 方法
>
> `db.col.countDocuments() `获取符合特定查询条件的文档数量。

计算 `qty > 20` 的文档数量

``` javascript
db.students.countDocuments({qty:{$gt:50}})
```


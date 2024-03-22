# 聚合管道



在 MongoDB 中，聚合是一种强大的操作，用于处理数据并返回计算结果。通过聚合管道，可以对文档进行多个阶段的处理，包括筛选、投影、排序、分组、聚合等，最终生成所需的结果。以下是一些关于 MongoDB 聚合的观点：

1. **灵活性**：MongoDB的聚合框架非常灵活，允许用户根据需要构建复杂的数据处理管道，以满足各种数据分析和处理需求。
2. **强大的操作符**：MongoDB提供了丰富的聚合操作符，如 `$match`、`$project`、`$group`、`$sort`、`$unwind` 等，可以在聚合管道中灵活应用，实现数据的多维度处理和分析。
3. **性能优化**：通过合理设计聚合管道，可以有效地优化查询性能，减少数据处理时间，提高查询效率。
4. **数据处理能力**：MongoDB的聚合框架支持复杂的数据处理操作，包括数据转换、数据聚合、数据分组统计等，可以满足各种数据处理需求。
5. **可扩展性**：聚合操作可以应用于单个集合或多个集合，支持跨集合的数据聚合和处理，从而提供更大的数据处理能力和灵活性。

> [!tip] 练习数据
>
> ``` javascript
> db.users.insertMany(
>        [
>              {_id: ObjectId('65f145b1df770b0b02a4d3cf'),name: 'Alice',age: 25,city: 'New York',salary: 50000,department: 'Sales',hobby: ['A','B','C','D']},
>              {_id: ObjectId('65f145b1df770b0b02a4d3d0'),name: 'Bob',age: 30,city: 'Los Angeles',salary: 60000,department: 'Marketing',hobby: ['A','B']},
>              {_id: ObjectId('65f145b1df770b0b02a4d3d1'),name: 'Charlie',age: 28,city: 'Chicago',salary: 55000,department: 'Sales',hobby: ['C']},
>              {_id: ObjectId('65f145b1df770b0b02a4d3d2'),name: 'David',age: 35,city: 'Houston',salary: 70000,department: 'Engineering',hobby: ['B','C']},
>              {_id: ObjectId('65f145b1df770b0b02a4d3d3'),name: 'Eve',age: '27',city: 'Miami',salary: 58000,department: 'Marketing',hobby: ['A','D']},
>              {_id: ObjectId('65f145b1df770b0b02a4d3d4'),name: 'Frank',age: 32,city: 'Seattle',salary: 62000,department: 'Engineering',hobby: ['A','C']},
>              {_id: ObjectId('65f145b1df770b0b02a4d3d5'),name: 'Grace',age: 29,city: 'Boston',salary: 57000,department: 'Sales',hobby: ['B','C','D']},
>              {_id: ObjectId('65f145b1df770b0b02a4d3d6'),name: 'Henry',age: 31,city: 'San Francisco',salary: 65000,department: 'Engineering',hobby: ['B','D']},
>              {_id: ObjectId('65f145b1df770b0b02a4d3d7'),name: 'Ivy',age: 26,city: 'Denver',salary: 59000,department: 'Marketing',hobby: ['A','C']},
>              {_id: ObjectId('65f145b1df770b0b02a4d3d8'),name: 'Jack',age: 33,city: 'Dallas',salary: 63000,department: 'Engineering',hobby: ['A','D']}
>        ]
> )





## 操作符

| 聚合阶段操作符 | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| `$match`       | 筛选文档，类似于查询中的 `find()` 方法，用于筛选符合条件的文档。 |
| `$project`     | 投影操作，用于选择文档的字段并重命名或增加新字段。           |
| `$group`       | 分组操作，按照指定条件对文档进行分组，并可以对分组后的数据进行聚合操作。 |
| `$sort`        | 排序操作，对文档进行排序。                                   |
| `$limit`       | 限制返回的文档数量。                                         |
| `$skip`        | 跳过指定数量的文档。                                         |
| `$unwind`      | 展开数组字段，将数组拆分为多个文档。                         |
| `$lookup`      | 在不同集合之间执行类似 SQL 中的 JOIN 操作，<br />用于在一个集合中查找另一个集合中的匹配文档。 |
| `$addFields`   | 添加新字段到文档中，类似于 `$project`，但不会删除现有字段。  |
| `$replaceRoot` | 替换文档的根级字段，将指定字段替换为新的根级字段。           |
| `$facet`       | 允许在同一聚合管道中执行多个独立的子管道，并返回各个子管道的结果。 |
| `$out`         | 将聚合管道的结果输出到新的集合中。                           |
| `$sample`      | 从管道中随机选择指定数量的文档。                             |
| `$bucket`      | 将文档按照指定条件进行分桶操作。                             |
| `$bucketAuto`  | 自动根据文档值的范围进行分桶操作。                           |
| `$graphLookup` | 在集合中执行递归查询，用于处理具有父子关系的文档。           |



## $match

筛选文档，类似于查询中的 `find()` 方法，用于筛选符合条件的文档。

::: details 筛选出 `age>=30` 的数据

```javascript {3}
db.users.aggregate(
    [
        { $match: { age: { $gte: 30 } } }
    ]
)
```

:::



## $project

投影操作，用于选择文档的字段并重命名或增加新字段。

::: details 筛选出 `age>=30` 的数据，并只展示 `_id、city、name、salary`

```javascript {4}
db.users.aggregate(
    [
        { $match:{ age: {$gte:30} } },
        { $project:{city:1, name:1,salary:1}}
    ]
)
```

:::



::: details 筛选出 `age>=30` 的数据，并只展示 `_id、city、name、salary`。并且将 `_id` 展示为 `id`

```javascript {4-10}
db.users.aggregate(
    [
        { $match:{ age:{ $gte:30 } }},
        { $project:{
            id:"$_id",      // 将 _id 字段重命名为 id
            _id:0,          // 将 _id 设置为不展示
            city:1,
            name:1,
            salary:1
        }}
    ]
)
```

:::



## $group

分组操作，按照指定条件对文档进行分组，并可以对分组后的数据进行聚合操作。

::: details 筛选出 `age>=30` 的数据，并计算这些人的工资总和

```javascript {4}
db.users.aggregate(
    [
        { $match:{ age:{ $gte:30 } }},
        { $group:{ _id:null, allSalary:{ $sum:'$salary' } } }
    ]
)

// output
[ { _id: null, allSalary: 320000 } ]
```

> [!tip] 解释
>
> 1. 为什么要有 `_id` 这个字段？
>     - 在 MongoDB 的聚合管道中，`$group` 阶段需要指定一个 `_id` 字段来表示分组的依据。
>     - 即使不需要基于任何字段的值来分组，仍然需要指定 `_id` 字段。
>     - 当将 `_id` 设置为 `null` 时，表示将所有匹配的文档作为一个整体进行聚合操作，而不是基于某个特定字段的值进行分组。
> 2. 为什么 `salary` 前要加 `$` 符号？
>     - 在 MongoDB 的聚合管道中，使用 `$` 符号来引用字段名。
>     - 在这种情况下，`$salary` 表示引用文档中名为 `salary` 的字段，以便在 `$group` 阶段中对工资字段进行求和操作。
>     - 通过使用 `$` 符号，您可以引用文档中的字段，以便在聚合管道中对其进行操作。

:::



::: details 计算各个部门的总工资

```javascript {3-6}
db.users.aggregate(
    [
        { $group:{
            _id:"$department",              // 按照 department 进行分组
            allSalary:{ $sum:"$salary" }    // 计算 salary 的和
        }}
    ]
)

// output
[
  { _id: 'Engineering', allSalary: 260000 },
  { _id: 'Sales', allSalary: 162000 },
  { _id: 'Marketing', allSalary: 177000 }
]
```



:::

::: details 计算 `Sales` 部门的员工总数以及所有工资总和以 `yuangong`和`gongzi` 输出

```javascript {3-8}
db.users.aggregate(
    [
        { $match: { department:'Sales' } },
        { $group: {
            _id:'$department',
            gongzi:{ $sum:'$salary' },
            yuangong:{ $sum:1 }		// 表示有一个则 +1
        }},
        { $project: {
            department:'$_id',  // 将 Sales 改为 department
            _id:0,              // 不展示 _id
            gongzi:1,
            yuangong:1,
        }}
    ]
)

// output
[ { gongzi: 162000, yuangong: 3, department: 'Sales' } ]
```

:::





## $sort

排序操作，对文档进行排序。

::: details 根据年龄进行升序

```javascript
db.users.aggregate(
    [
        { $sort:{ age: 1 }}
    ]
)
```

:::



::: details 根据年龄进行升序，同年龄按照工资进行降序

``` javascript
db.users.aggregate(
    [
        { $sort:{ age: 1, salary: -1 }}
    ]
)
```

:::



## $unwind

展开数组字段，将数组拆分为多个文档。

::: details 展开 `hobby` 数组字段，并统计每种爱好出现的次数。

```javascript {3-7}
db.users.aggregate(
    [
        { $unwind: '$hobby' },	// 展开 hobby 列表
        { $group: {
            _id: '$hobby',      // 以 hobby 分组
            count: { $sum: 1}   // 计算爱好出现的次数
        }}
    ]
)

// output
[
  { _id: 'C', count: 6 },
  { _id: 'D', count: 5 },
  { _id: 'B', count: 5 },
  { _id: 'A', count: 6 }
]
```

:::



## $lookup












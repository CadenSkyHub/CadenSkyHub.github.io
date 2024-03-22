# 嵌套数组

> [!tip] 操作
>
> - `$push`: 向数组中添加一个或多个元素。
> - `$pull`: 从数组中删除匹配特定条件的元素。
> - `$pop`: 从数组中删除第一个或最后一个元素。

```javascript
db.like.insertMany([
    { like:['吃','喝','玩','乐'], name:'张三', number:[1,10,20] },
    { like:['吃','喝','嫖','赌'], name:'李四', number:[30,40,50] },
    { like:['a','b','c','d'], name:'王五', number:[60,70,80] },
    { like:['A','B','C','D'], name:'王八', number:[90,100,101] },
])
```

## 新增

`$push`

### 追加单个

向 `{name:张三}` 文档的 `like` 新增 `嫖`

```javascript
db.like.updateOne(
    { name:'张三' },
    { $push:{ like:'嫖' } }
)
```

::: details 结果

``` javascript {3}
{
  _id: ObjectId('65f01a96c66ad1456dc89237'),
  like: [ '吃', '喝', '玩', '乐', '嫖' ],
  name: '张三',
  number: [ 1, 10, 20 ]
}
```

:::

### 追加多个

向 `{name:张三}` 文档的 `like` 新增 `A,B,C,D`

``` javascript
db.like.updateOne(
    {name:'张三'},
    {$push:{ like:{ $each:['A','B','C','D'] } }}
)
```

::: details 结果

``` javascript {3}
{
  _id: ObjectId('65f01a96c66ad1456dc89237'),
  like: ['吃', '喝', '玩','乐', '嫖', 'A','B',  'C',  'D'],
  name: '张三',
  number: [ 1, 10, 20 ]
}
```

:::

## 删除

`$pull`

### 删除单个



```javascript
db.like.updateOne(
    { name:'张三' },
    { $pull:{ like:'嫖' } }
)
```

::: details 结果

``` javascript {3}
{
  _id: ObjectId('65f01a96c66ad1456dc89237'),
  like: ['吃', '喝', '玩','乐', 'A',  'B','C',  'D'],
  name: '张三',
  number: [ 1, 10, 20 ]
}
```

:::

### 删除多个

删除 `{name:张三}` 文档 `like` 的 `A,B,C,D`

```javascript
db.like.updateOne(
    { name:'张三' },
    { $pull: { like: { $in: ['A','B','C','D'] } } }
)
```

::: details 结果

``` javascript {3}
{
  _id: ObjectId('65f01a96c66ad1456dc89237'),
  like: [ '吃', '喝', '玩', '乐' ],
  name: '张三',
  number: [ 1, 10, 20 ]
}
```

:::



### 删除前后

> [!tip] 语法
>
> ``` javascript
> { $pop: { <field>: <-1 | 1>, ... } }
> ```
>
> - `-1`：前
> - `1`：后

- 删除 `{name:张三}` 文档 `like` 的 第一个元素

    ```javascript
    db.like.updateOne(
        { name:'张三' },
        { $pop: { like:-1 } }
    )
    ```

- 删除 `{name:张三}` 文档 `like` 的 最后一个元素

    ``` javascript
    db.like.updateOne(
        { name:'张三' },
        { $pop: { like:1 } }
    )
    ```



## 更新

> [!important] 注意
>
>  `$` 定位符
>
> 使用点表示法进行查询时，字段和嵌套字段必须位于引号内。



将 `{name:张三}` 文档的 like 中 `嫖` 更新为 `赌`

```javascript {2-3}
db.like.updateOne(
    { name:'张三', like:'嫖' },	// [!code ++]
    { $set:{ 'like.$':'赌' } }	// [!code ++]
)
```

::: details 结果

``` javascript {3}
{
  _id: ObjectId('65f01a96c66ad1456dc89237'),
  like: ['喝', '玩', '乐','A',  'B',  'C','赌'],
  name: '张三',
  number: [ 1, 10, 20 ]
}
```

:::



## 查询

### 数组确切匹配

> [!tip] 提示
>
> 匹配确切数组，包括元素的顺序。

- 查询 `like` 为 `['吃','喝','玩','乐']` 的数据

``` javascript
db.like.find({like:['吃','喝','玩','乐']})  // 准确匹配

db.like.find({like:['吃','喝']})  // 查询结果为空 // [!code error]
```

::: details 结果

``` javascript
[
  {
    _id: ObjectId('65f01a96c66ad1456dc89237'),
    like: [ '吃', '喝', '玩', '乐' ],
    name: '张三',
    number: [ 1, 10, 20 ]
  }
]
```

:::

---

### 数组包含匹配

> [!tip] 提示
>
> 如果希望找到一个同时包含元素 `"吃"` 和 `"喝"` 的数组，
>
> 而不考虑数组中的顺序或其他元素，请使用 `$all` 运算符

- 查询 `like` 中含 `吃，喝` 的数据

```javascript
db.like.find({like:{$all:['吃','喝']}})
```

::: details 结果

``` javascript {4,10}
[
  {
    _id: ObjectId('65f01a96c66ad1456dc89237'),
    like: [ '吃', '喝', '玩', '乐' ],
    name: '张三',
    number: [ 1, 10, 20 ]
  },
  {
    _id: ObjectId('65f01a96c66ad1456dc89238'),
    like: [ '吃', '喝', '嫖', '赌' ],
    name: '李四',
    number: [ 30, 40, 50 ]
  }
]
```

:::

---

### 任意元素匹配

> [!tip] 提示
>
> 查询数组字段是否包含至少一个具有指定值的元素

1. 查询 `like` 中含 `吃` 的数据

``` javascript
db.like.find({like:'吃'})
```

::: details 结果

``` javascript {4,10}
[
  {
    _id: ObjectId('65f01a96c66ad1456dc89237'),
    like: [ '吃', '喝', '玩', '乐' ],
    name: '张三',
    number: [ 1, 10, 20 ]
  },
  {
    _id: ObjectId('65f01a96c66ad1456dc89238'),
    like: [ '吃', '喝', '嫖', '赌' ],
    name: '李四',
    number: [ 30, 40, 50 ]
  }
]
```

:::

2. 查询 `number` 中的文档，只要有大于 `40` 的全部取出

``` javascript
db.like.find({ number: { $gt:40 } } )
```

::: details 结果

``` javascript {6,12,18}
[
  {
    _id: ObjectId('65f01a96c66ad1456dc89238'),
    like: [ '吃', '喝', '嫖', '赌' ],
    name: '李四',
    number: [ 30, 40, 50 ]
  },
  {
    _id: ObjectId('65f01a96c66ad1456dc89239'),
    like: [ 'a', 'b', 'c', 'd' ],
    name: '王五',
    number: [ 60, 70, 80 ]
  },
  {
    _id: ObjectId('65f01a96c66ad1456dc8923a'),
    like: [ 'A', 'B', 'C', 'D' ],
    name: '王八',
    number: [ 90, 100, 101 ]
  }
]
```

:::

---

### 任意元素多条件

1. 查询 `number` 的数组中任意元素，只要有 `>40` 和 `<70` 的文档，则全部取出

``` javascript
db.like.find( { number:{$gt:40, $lt:70} } )
```

::: details 结果

``` javascript {6,12}
[
  {
    _id: ObjectId('65f01a96c66ad1456dc89238'),
    like: [ '吃', '喝', '嫖', '赌' ],
    name: '李四',
    number: [ 30, 40, 50 ]
  },
  {
    _id: ObjectId('65f01a96c66ad1456dc89239'),
    like: [ 'a', 'b', 'c', 'd' ],
    name: '王五',
    number: [ 60, 70, 80 ]
  }
]
```

:::

> [!tip] 提示
>
> 如果，要查询一个 **数组** 任意元素，需要同时满足两个条件
>
> 则需要 `$elemMatch` 运算符

2. 查询 `number` 数组中的数据，只查询同时满足任意元素 `=1` 且 `<70` 的文档

```javascript
db.like.find({ number:{$elemMatch:{$eq:1, $lt:60}} })
```

::: details 结果

``` javascript {6}
[
  {
    _id: ObjectId('65f01a96c66ad1456dc89237'),
    like: [ '吃', '喝', '玩', '乐' ],
    name: '张三',
    number: [ 1, 10, 20 ]
  }
]
```

:::



### 索引

> [!important] 注意
>
> 索引从 `0` 开始
>
> 使用点表示法进行查询时，字段和嵌套字段必须位于引号内。

查询 `number` 数组中，第 `2` 位为 `70` 的文档

``` javascript
db.like.find({ 'number.1':70 })
```

::: details 结果

``` javascript {6}
[
  {
    _id: ObjectId('65f01a96c66ad1456dc89239'),
    like: [ 'a', 'b', 'c', 'd' ],
    name: '王五',
    number: [ 60, 70, 80 ]
  }
]
```

:::



### 长度

> [!tip] 提示
>
> 使用 `$size` 运算符按元素的数量查询数组。
>
> 注意：这里只能计算 `number`

查找 `number` 数量，长度至少包含 `5` 个

``` javascript
db.like.find({ number:{ $size:5 } })
```

::: details 结果

``` javascript
null
```

:::










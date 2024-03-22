# 更新文档

## db.col.updateOne()

::: details 语法

``` javascript
db.collection.updateOne(
   <filter>,
   <update>,
   {
     upsert: <boolean>
   }
)
```

参数

- `filter`：使用查询运算符指定更新的条件。如果为 `{}` 则更新集合中返回的第一个文档。
- `update`：配合运算符进行要应用的修改内容。
- `upsert`：默认值为 `false` ，当为 `true` 时，如果找不到文档会插入文档。

返回

- `acknowledged`: 表示是否执行了更新操作。
- `insertedId`: 对于 `updateOne` 操作，这个字段通常为 `null`，因为它主要用于插入文档时返回新插入文档的 `_id`。
- `matchedCount`: 表示匹配到的文档数量
- `modifiedCount`: 表示实际被修改的文档数量
- `upsertedCount`: 表示操作是否被执行，对于 `updateOne`，通常为 `0`，因为这是一个更新操作而不是插入新文档的操作。

:::



将 `students` 集合中的 `{name:'小六'}` 改为 `{name:'小七'}`

``` javascript
db.students.updateOne(	// [!code focus:4]
    {name:'小六'},
    {$set:{name:'小七'}}
)

# output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

> [!important] 重要
>
> `{$set:{name:'小七'}}`：这是更新操作，使用 `$set` 设置字段 `name` 的新值为 '小七'。
>
> - 如果不使用 `$set`，而是直接提供新的值，会导致整个文档的替换而不是部分更新。
>- 使用 `$set` 可以确保只更新指定字段，而其他字段保持不变。
> - 总的来说，`$set` 是用于在更新文档时指定要修改的字段及其新值的操作符。



## db.col.updateMany()

::: details 语法

``` javascript
db.collection.updateMany(
   <filter>,
   <update>,
   {
     upsert: <boolean>
   }
)
```

参数

- `filter`：使用查询运算符指定更新的条件。如果为 `{}` 则更新集合中 **所有文档** 。
- `update`：配合运算符进行要应用的修改内容。
- `upsert`：默认值为 `false` ，当为 `true` 时，如果找不到文档会插入文档。

返回

- `acknowledged`: 表示是否执行了更新操作。
- `insertedId`: 对于 `updateOne` 操作，这个字段通常为 `null`，因为它主要用于插入文档时返回新插入文档的 `_id`。
- `matchedCount`: 表示匹配到的文档数量
- `modifiedCount`: 表示实际被修改的文档数量
- `upsertedCount`: 表示操作是否被执行，对于 `updateMany`，通常为 `0`，因为这是一个更新操作而不是插入新文档的操作。

:::

将 `students` 集合中的 `age > 10` 的 `gender` 改为 `null`

```javascript
db.students.updateMany(		// [!code focus:4]
    {age:{$gt:10}},
    {$set:{gender:null}}
)

# output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
```



## db.col.replaceOne()

::: details 语法

``` javascript
db.collection.replaceOne(
   <filter>,
   <replacement>,
   {
      upsert: <boolean>
   }
)
```

参数

- `filter`：使用查询运算符指定替换的条件。如果为 `{}` 则替换集合中返回的第一个文档。
- `replacement`：要替换的文档，**不能包含更新运算符**
- `upsert`：默认值为 `false` ，当为 `true` 时，如果找不到文档会插入文档。

返回

- `acknowledged`: 表示是否执行了更新操作。
- `insertedId`: 对于 `replaceOne` 操作，这个字段通常为 `null`，因为它主要用于插入文档时返回新插入文档的 `_id`。
- `matchedCount`: 表示匹配到的文档数量
- `modifiedCount`: 表示实际被替换的文档数量
- `upsertedCount`: 表示操作是否被执行，对于 `updateOne`，通常为 `0`，因为这是一个替换操作而不是插入新文档的操作。

:::



将 `students` 集合中的 `{name:'小八'}` 改为 `{firstName:'L',lastName:'F'}`

``` javascript
db.students.replaceOne(	// [!code focus:4]
        {name:'小八'},
        {firstName:'L',lastName:'F'}
)

# output
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```



> [!tip] 何时使用 updateOne 和 replaceOne：
>
> - 使用 `updateOne`：当你只想更新文档的部分字段而不是整个文档时，可以使用 `updateOne`。
>     - 例如，只更新文档中的某个属性值，而保持其他属性不变。
> - 使用 `replaceOne`：当你想完全替换文档而不是部分更新时，可以使用 `replaceOne`。
>     - 例如，你有一个新的文档要替换掉现有的文档，并且希望新文档完全覆盖旧文档时，可以使用 `replaceOne`。


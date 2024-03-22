# 查询操作符

``` javascript
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

## 比较运算符

| 查询操作符 | 说明     | 示例                                      |
| ---------- | -------- | ----------------------------------------- |
| `$eq`      | 等于     | `db.students.find({ qty: { $eq: 25 } })`  |
| `$ne`      | 不等于   | `db.students.find({ qty: { $ne: 25 } })`  |
| `$gt`      | 大于     | `db.students.find({ qty: { $gt: 25 } })`  |
| `$gte`     | 大于等于 | `db.students.find({ qty: { $gte: 25 } })` |
| `$lt`      | 小于     | `db.students.find({ qty: { $lt: 25 } })`  |
| `$lte`     | 小于等于 | `db.students.find({ qty: { $lte: 25 } })` |

::: details 示例

1. 查询 `qty = 25` 的数据

    ``` javascript
    db.students.find({qty:{$eq:25}})
    ```

2. 查询 `qty != 25`的数据

    ``` javascript
    db.students.find({qty:{$ne:25}})
    ```

3. 查询 `qty > 25`的数据

    ``` javascript
    db.students.find({qty:{$gt:25}})
    ```

4. 查询 `qty >= 25`的数据

    ``` javascript
    db.students.find({qty:{$gte:25}})
    ```

5. 查询 `qty < 25`的数据

    ``` javascript
    db.students.find({qty:{$lt:25}})
    ```

6. 查询 `qty <= 25`的数据

    ``` javascript
    db.students.find({qty:{$lte:25}})
    ```

:::



## 逻辑运算符

| 查询操作符 | 说明           | 示例                                                         |
| ---------- | -------------- | ------------------------------------------------------------ |
| `$and`     | 逻辑<br />AND  | `db.students.find({ $and: [{ qty: 25 }, { status: "A" }] })` |
| `$or`      | 逻辑<br />OR   | `db.students.find({ $or: [{ qty: 25 }, { qty: "100" }] })`   |
| `$nor`     | 逻辑<br />NOR  | `db.students.find({ $nor: [ { qty:{ $gte: 50 } } ] })`       |
| `$not`     | 逻辑 <br />NOT | `db.students.find({ qte: { $not: { $eq: 50 } } })`           |

::: details 示例

1. 查询 `qty = 25` 且 `status = A`的数据

    ``` javascript
    db.students.find({$and:[{qty:25},{status:'A'}]})
    ```

2. 查询 `qty = 25` 或 `status = A`的数据

    ``` javascript
    db.students.find({$or:[{qty:25},{status:'A'}]})
    ```

3. 查询 `qty !>= 50` 的数据

    两种写法均可，区别是：`$nor` 写在前面

    ``` javascript
    // 使用 $not
    db.students.find({qty:{$not:{$gte:50}}})
    
    // 使用 $nor
    db.students.find({$nor:[{qty:{$gte:50}}]})
    ```

4. 查询 `size.h > 8 且 size.w = 11` 或 `size.h > 8 且 size.uom = in` 的

    ``` javascript
    db.students.find(
        {
            $or:[
                { $and:[ {'size.h':{$gt:8}}, {'size.w':{$eq:11}} ] },
                { $and:[ {'size.h':{$gt:8}}, {'size.uom':{$eq:'in'}} ] }
            ]
        }
    )
    ```

:::



## 包含操作符

| 查询操作符 | 说明                                                       | 示例                                                  |
| ---------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| `$in`      | 指定一个字段的值是否<br />与指定的值数组中的任何一个匹配。 | `db.students.find({ qty:{ $in:[45,50] } })`           |
| `$nin`     | 指定一个字段的值是否<br />不包含在指定的值数组中。         | `db.students.find({ 'size.h':{ $nin:[22.85, 10] } })` |

::: details 示例

1. 查询 `qty = 45 和 qty = 50` 的所有数据

    ``` javascript
    db.students.find({ qty:{ $in:[45,50] } })
    ```

2. 查询 `size.h 不是 22.85 和 10` 的所有数据

    ``` javascript
    db.students.find({ 'size.h':{ $nin:[22.85, 10] } })
    ```

:::



## 元素操作符

| 查询操作符 | 说明               | 示例                                             |
| ---------- | ------------------ | ------------------------------------------------ |
| `$exists`  | 判断字段是否存在   | `db.students.find({ email: { $exists: true } })` |
| `$type`    | 判断字段的数据类型 | `db.students.find({ age: { $type: "number" } })` |

## 数组操作符

| 查询操作符   | 说明                               | 示例                                                         |
| ------------ | ---------------------------------- | ------------------------------------------------------------ |
| `$all`       | 匹配包含所有指定元素的数组         | `db.students.find({ hobbies: { $all: ["reading", "writing"] } })` |
| `$elemMatch` | 匹配数组中至少一个元素满足指定条件 | `db.students.find({ hobbies: { $elemMatch: { $eq: "sports" } } })` |
| `$size`      | 匹配数组长度                       | `db.students.find({ hobbies: { $size: 3 } })`                |

## 正则表达式

| 查询操作符 | 说明                     | 示例                                           |
| ---------- | ------------------------ | ---------------------------------------------- |
| `$regex`   | 使用正则表达式匹配字符串 | `db.students.find({ name: { $regex: /^J/ } })` |

## 文本搜索

| 查询操作符 | 说明         | 示例                                                  |
| ---------- | ------------ | ----------------------------------------------------- |
| `$text`    | 执行全文搜索 | `db.articles.find({ $text: { $search: "mongodb" } })` |

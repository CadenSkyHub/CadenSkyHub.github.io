# 嵌套文档

```javascript
db.size.insertMany(
    [
        { size:{height:12, width:12,round:30}, name:'张三' },
        { size:{height:15, width:20,round:31}, name:'李四'  },
        { size:{height:34, width:62,round:32}, name:'王五'  },
        { size:{height:33, width:99,round:33}, name:'麻子'  }
    ]
)
```

> [!note] 注意
>
> 使用点表示法进行查询时，字段和嵌套字段必须位于引号内。



## 新增

向 `name:张三` 的 `size` 中增加 `color:red`

```javascript
db.size.updateOne(
    {name:'张三'},
    { $set:{'size.color':'red'} }
)
```

## 删除

删除 `name:张三` 中 `size` 的 `color:red`

```javascript
db.size.updateOne(
    {name:'张三'},
    { $unset:{'size.color':1} }
)
```

## 更新

更新 `name:张三` 中 `size` 的 `height` 为 `1000`

```javascript
db.size.updateOne(
    {name:'张三'},
    { $set:{'size.height':1000} }
)
```

## 查询

查询 `size.height > 20` 的所有数据

```javascript
db.size.find(
    {'size.height':{$gt:20}}
)
```
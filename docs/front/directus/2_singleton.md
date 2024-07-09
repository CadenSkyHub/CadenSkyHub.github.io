# 单例表

## 查询单例

[文档](https://docs.directus.io/reference/items.html#get-singleton)

`readSingleton(collection_name)`

```typescript
await client.request(
	readSingleton('connect')
)
```



## 修改单例

[文档](https://docs.directus.io/reference/items.html#update-singleton)

`updateSingleton(collection_name, partial_item_object)`

``` typescript
await client.request(
    updateSingleton('connect', { x: 'abcd' })
)
```




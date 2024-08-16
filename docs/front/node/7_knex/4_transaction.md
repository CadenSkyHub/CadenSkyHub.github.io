# 事务

## 写法1

```ts
await knex.transaction(async (trx) => {
    // 向 table1 中插入一条记录并获取插入的 ID
    const [id1] = await trx('table1').insert({ column1: 'value1' });

    // 向 table2 中插入一条记录并获取插入的 ID
    const [id2] = await trx('table2').insert({ column2: 'value2' });

    // 现在可以获取插入记录 id
    console.log('Inserted ID in table1:', id1);
    console.log('Inserted ID in table2:', id2);

    // 如果一切正常，则主动提交事务，否则会回滚，则 id1 和 id2 都不会被插入
});
```

## 写法2

`id1` 和 `id2` 分别是插入到 `table1` 和 `table2` 的记录的 ID。

如果你需要在事务外部使用这些 ID，你可以将它们返回：


```ts
async function performTransaction() {
    try {
        const result = await knex.transaction(async (trx) => {
            // 向 table1 中插入一条记录并获取插入的 ID
            const [id1] = await trx('table1').insert({ column1: 'value1' });

            // 向 table2 中插入一条记录并获取插入的 ID
            const [id2] = await trx('table2').insert({ column2: 'value2' });

            // Return the IDs
            return { id1, id2 };
    	});

        console.log('事务执行成功');
        console.log('插入的 id 为：', result);
        
        return result;
        
    } catch (error) {
    	console.error('事务执行失败:', error);
        throw error;
    }
}

// 调用 performTransaction 函数并处理结果
performTransaction()
    .then((result) => {
    	// 如果成功，则会自动执行事务
		console.log('事务结果:', result);
	})
    .catch((error) => {
    	// 如果失败，则会自动回滚事务
		console.error('错误:', error);
	});
```




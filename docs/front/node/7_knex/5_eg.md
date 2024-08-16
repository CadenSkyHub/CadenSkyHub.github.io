# 封装示例

``` ts
import knex from "knex";
import {getOffsetLimit} from "../utils";

// TODO 通过环境获取
export const knexClient = knex({
    client: 'mysql2',
    connection: {
        host: '10.10.10.10',
        port: 3306,
        user: '8234',
        password: '123456',
        database: '8234',
        timezone: 'Z'   // 设置时区，Z是当前时区
    },
    pool: {
        min: 0,
        max: 10,
    }
})

export class Database {
    protected tableName: string

    constructor(tableName: string) {
        this.tableName = tableName
    }

    /**
     * 获取连接,自行构建
     * 注意这里不能使用箭头函数
     * 会出现 this 指向错误，导致所有的都用一个 实例对象。
     */
    client() {
        return knexClient(this.tableName)
    }

    /**
     * 执行 sql
     * @param sql 要执行的sql eg:`SELECT ? FROM goods`
     * @param params 构建 sql 的参数 eg:`['*']`
     */
    async execute(sql: string, params: knex.Knex.RawBinding) {
        return knexClient.raw(sql, params)
    }

    /**
     * 查询所有
     * @param rows 选择查询的列 eg:['id','name']
     * @param sort 排序，只可排序一次 eg:{id: Sort.ASC}
     * @param page 展示的页数
     * @return 查询结果 查询不到，则返回空列表
     */
    async getAll(
        rows: string[] = ['*'],
        sort?: { [key: string]: Sort },
        page: number = 1) {

        // 给 sort 默认值
        let sortName: string = 'id'
        let sorts: Sort = Sort.ASC

        // 如果传了 sort
        // 解构 sort, 将 key 和 value 提取出来
        if (sort) {
            for (const [key, value] of Object.entries(sort)) {
                sortName = key
                sorts = value
            }
        }

        // 获取 offset 和 limit
        const [offset, limit] = await getOffsetLimit(page)

        // 条件查询结果
        return this.client().select(...rows).orderBy(sortName, sorts).offset(offset).limit(limit)
    }


    /**
     * 根据 ID 查询
     * @param rows   选择查询的列 eg:['id','name']
     * @param id
     * @return 查询结果 查询不到则返回空列表
     */
    async getById(rows: string[] = ['*'], id: number) {
        return this.client().select(...rows).where('id', '=', id)
    }

    /**
     * 新增数据
     * @param data 可以是单个，也可以是多个 eg:[{data}] 或 ['{data}','{data}']
     * @return - 新增的 id, 如果是多个数据，也只返回第一个数据的 id , 返回形式为 Array eg:[23]
     * @description **新增失败直接报错**
     */
    async postData(data: any[]) {
        return this.client().insert(data)
    }

    /**
     * 删除数据
     * @param id 要删除的 id
     * @return - 删除成功，返回 1， - 数据不存在，返回 0
     */
    async delDataById(id: number) {
        return this.client().del().where('id', '=', id)
    }


    /**
     * 更新数据
     * @param id 要修改的id
     * @param data 要修改的数据
     * @returns 返回修改的行数，<br> **如果要修改的数据和传入的数据相同，也是返回1** <br> 如果 id 不存在，则返回 0
     * @description **更新失败直接报错**
     */
    async putDataById(id: number, data: object) {
        return this.client().update(data).where('id', '=', id)
    }
}


export enum Sort {
    ASC = "asc",
    DESC = "desc"
}
```


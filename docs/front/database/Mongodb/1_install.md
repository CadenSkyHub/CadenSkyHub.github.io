# 安装

[官方文档](https://www.mongodb.com/zh-cn/docs/manual/introduction/)

## docker 安装

- `mongo` 主程序

    ``` bash
    docker pull mongo
    
    
    docker run --name mongodb \
    -d \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=123456 \
    -p 27017:27017 \
    -v /mnt/sata1-5/docker/mongo:/data/db \
    --network=mongo \
    mongo
    ```

- `express` 编写的 `web` 可视化

    ``` bash
    docker pull mongo-express
    
    docker run --name express \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=123456 \
    -e ME_CONFIG_MONGODB_SERVER="10.10.10.100" \
    -d \
    --network=mongo \
    -p 27018:8081 \
    mongo-express
    ```

    

## 连接

### 本地

``` bash
mongo -u root -p 123456
```

### 远程

``` bash
mongodb://user:password@host:[port]/[database]
```


## javascript 使用

[使用文档](https://www.mongodb.com/zh-cn/docs/drivers/node/current/quick-start/)

``` bash
npm install mongodb
```

注意

```ts
import {MongoClient} from "mongodb";

const uri = "mongodb://root:password@10.10.10.10:27017";

const client = new MongoClient(uri)


async function main(){
    try{
        const database = client.db('learn')
        const col = database.collection('learn')
        const res = col.find()
        // 查询所有
        // find() 返回游标，需要遍历才能拿到数据，其他的不需要
        for await (const doc of res){
            console.log(doc)
        }
    }finally {
        await client.close()
    }
}

main()
```



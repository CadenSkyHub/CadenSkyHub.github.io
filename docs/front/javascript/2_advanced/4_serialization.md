# 序列化



## 序列化

**`stringify`**

```javascript {3}
const data = {name: '张三', age: 15, gender: true, like: ['吃', '喝', '睡']}

const json_data = JSON.stringify(data)

console.log(json_data)	// string
```



## 反序列化

```javascript {3}
const json_data = `{"name": "张三", "age": 15, "gender": true, "like": ["吃", "喝", "睡"]}`

const obj_data = JSON.parse(json_data)

console.log(typeof obj_data)    // object
```
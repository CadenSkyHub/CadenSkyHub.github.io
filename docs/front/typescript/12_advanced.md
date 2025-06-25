# 🧠 一图理解常见 Utility Types

```
T               → 原始类型
Pick<T, K>      → 只选取 T 中的一部分字段
Omit<T, K>      → 排除 T 中的某些字段
Partial<T>      → 把 T 的所有字段变成可选的
Required<T>     → 把 T 的所有字段变成必填的
Readonly<T>     → 把 T 的所有字段变成只读的
Record<K, T>    → 创建一个以 K 为键、T 为值的对象类型
Exclude<T, U>   → 从 T 中排除 U
Extract<T, U>   → 提取 T 中能赋值给 U 的部分
```

---

## 📌 示例基础类型

```ts
type User = {
  id: number
  name: string
  email?: string
}
```

---

### ✅ `Omit<T, K>`：从类型中排除指定属性

```ts
type UserWithoutEmail = Omit<User, 'email'>

// 等价于：
type UserWithoutEmail = {
  id: number
  name: string
}
```

📍 常用于：表单不需要用户手动填写的字段，比如 id、创建时间等。

---

### ✅ `Pick<T, K>`：只选取某些字段

```ts
type UserNameOnly = Pick<User, 'name'>

// { name: string }
```

📍 常用于：只传部分字段给子组件、接口。

---

### ✅ `Partial<T>`：所有字段变为可选

```ts
type PartialUser = Partial<User>

// { id?: number; name?: string; email?: string }
```

📍 常用于：更新操作，如 PATCH 接口、表单输入。

---

### ✅ `Required<T>`：所有字段都变为必填

```ts
type FullUser = Required<User>

// { id: number; name: string; email: string }
```

📍 用于强制必须提供所有数据。

---

### ✅ `Readonly<T>`：将字段变为只读（不可更改）

```ts
type ReadonlyUser = Readonly<User>

// user.id = 2 // ❌ 报错，不能修改
```

📍 常用于：不可变对象、状态管理。

---

### ✅ `Record<K, T>`：构造一个对象类型，键为 K，值为 T

```ts
type Role = 'admin' | 'user' | 'guest'
type RolePermissions = Record<Role, boolean>

// 等价于：
type RolePermissions = {
  admin: boolean
  user: boolean
  guest: boolean
}
```

📍 常用于：映射表、权限控制、状态字典。

---

### ✅ `Exclude<T, U>`：从联合类型 T 中排除 U

```ts
type Role = 'admin' | 'user' | 'guest'
type WithoutGuest = Exclude<Role, 'guest'>  // 'admin' | 'user'
```

---

### ✅ `Extract<T, U>`：提取出 T 中能赋值给 U 的部分

```ts
type Role = 'admin' | 'user' | 'guest'
type OnlyCommon = Extract<Role, 'user' | 'super'>  // 'user'
```

---

## 💡 实用组合示例：更新接口参数

```ts
type User = {
  id: number
  name: string
  email: string
  createdAt: string
}

// 用于 PATCH 更新接口参数
type UpdateUserDTO = Partial<Omit<User, 'id' | 'createdAt'>>

// { name?: string; email?: string }
```

---

## ✅ 最佳实践

* 使用 `Pick` + `Partial` 构造表单类型
* 使用 `Omit` 剔除敏感或只读字段
* 使用 `Record` 创建权限、字典、状态表
* 使用 `Exclude/Extract` 处理联合类型差集/交集

---

如你想了解 `infer`、条件类型、模板字符串类型、递归类型，也可以继续深入。我也可以出一套练习题，帮助你系统掌握这些工具类型 🙌
# 运算符

## 逻辑运算符

| 运算符 | 描述   | 示例            |
| ------ | ------ | --------------- |
| `&&`   | 逻辑与 | `true && false` |
| `||`   | 逻辑或 | `true || false` |
| `!`    | 逻辑非 | `!true`         |

**注意事项**：

- 逻辑运算符返回布尔值 `true` 或 `false`。
- 对于逻辑与运算符 `&&`，如果第一个操作数是 `false`，则不会对第二个操作数求值，因为整个表达式已经为 `false`。
- 对于逻辑或运算符 `||`，如果第一个操作数是 `true`，则不会对第二个操作数求值，因为整个表达式已经为 `true`。



## 算数运算符

| 运算符 | 描述 | 示例                 |
| ------ | ---- | -------------------- |
| `+`    | 加法 | `2 + 3`，结果为 `5`  |
| `-`    | 减法 | `5 - 3`，结果为 `2`  |
| `*`    | 乘法 | `2 * 3`，结果为 `6`  |
| `/`    | 除法 | `6 / 3`，结果为 `2`  |
| `%`    | 取余 | `5 % 2`，结果为 `1`  |
| `**`   | 指数 | `2 ** 3`，结果为 `8` |

**注意事项**：

- 运算符 `+` 也可以用于字符串连接，如 `"Hello" + " " + "World"` 结果为 `"Hello World"`。
- 在进行除法运算时，注意被除数不能为 `0`，否则会导致错误。
- 当使用 `%` 运算符时，结果的符号与被除数相同。



## 条件运算符

| 运算符 | 描述       | 示例                            |
| ------ | ---------- | ------------------------------- |
| `==`   | 等于       | `2 == 2`，结果为 `true`         |
| `===`  | 全等于     | `'2' === 2`，结果为 `false`     |
| `!=`   | 不等于     | `3 != 2`，结果为 `true`         |
| `!==`  | 不全等于   | `'3' !== 3`，结果为 `true`      |
| `>`    | 大于       | `3 > 2`，结果为 `true`          |
| `<`    | 小于       | `2 < 3`，结果为 `true`          |
| `>=`   | 大于等于   | `3 >= 3`，结果为 `true`         |
| `<=`   | 小于等于   | `2 <= 3`，结果为 `true`         |
| `? :`  | 三元运算符 | `(condition) ? value1 : value2` |

**注意事项**：

- `==` 和 `!=` 运算符执行类型转换，比较值是否相等，而不考虑数据类型。
- `===` 和 `!==` 运算符执行严格相等比较，包括值和数据类型。
- 在使用三元运算符时，如果 `condition` 为真，则返回 `value1`，否则返回 `value2`。



## 一元运算符

| 运算符   | 描述           | 示例                      |
| -------- | -------------- | ------------------------- |
| `+`      | 正号           | `+5`，结果为 `5`          |
| `-`      | 负号           | `-5`，结果为 `-5`         |
| `++`     | 递增           | `let x = 5; x++;`         |
| `--`     | 递减           | `let x = 5; x--;`         |
| `!`      | 逻辑非         | `let x = true; !x;`       |
| `typeof` | 类型检测       | `typeof x;`               |
| `delete` | 删除对象的属性 | `delete object.property;` |

**注意事项**：

- 一元运算符可以应用于数字、变量、表达式等。
- `typeof` 运算符返回一个表示操作数类型的字符串。
- `delete` 运算符用于删除对象的属性或数组的元素。










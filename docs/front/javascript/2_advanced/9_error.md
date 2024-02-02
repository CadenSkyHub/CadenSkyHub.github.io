# 错误处理



## 自定义异常

**`throw`** **语句**用来抛出一个用户自定义的异常。当前函数的执行将被停止（`throw` 之后的语句将不会执行），并且控制将被传递到调用堆栈中的第一个 [`catch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 块。

如果调用者函数中没有 `catch` 块，程序将会终止。



### 语法

`expression`：要抛出的表达式。

```javascript
throw expression;
```



### 示例



```javascript
throw "Error2"; // 抛出了一个值为字符串的异常
throw 42; 		// 抛出了一个值为整数 42 的异常
throw true; 	// 抛出了一个值为 true 的异常
throw new Error('我是抛出的异常') // 抛出一个异常，基础异常对象
```



### 抛出一个对象

你可以在抛出异常时指定一个对象。然后可以在`catch`块中引用对象的属性。以下示例创建一个类型为`UserException`的对象，并在`throw`语句中使用它。

``` javascript {28-33}
function UserException(message) {	// [!code focus:4]
  this.message = message;
  this.name = "月份错误";
}
function getMonthName(mo) {
  mo = mo - 1; // 调整月份数字到数组索引 (1=一月, 12=十二月)
  let months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];
  if (months[mo] !== undefined) {
    return months[mo];
  } else {
    throw new UserException("输入月份错误，请输入 1-12 的整数");
  }
}

try {
  // 尝试错误
  let monthName = getMonthName(15); // 15 超出边界并引发异常
} catch (e) {
  console.log(e.message, e.name); // 传递异常对象到错误处理
}

```





## 错误处理

**`try...catch`** 语句标记要尝试的语句块，并指定一个出现异常时抛出的响应。

### 语法

- `try_statements`

  需要被执行的语句。

- `exception_var_1`，`exception_var_2`

  用于保存关联`catch`子句的异常对象的标识符。

- `condition_1`

  一个条件表达式。

- `finally_statements`

  在`try`语句块之后执行的语句块。无论是否有异常抛出或捕获这些语句都将执行。

``` javascript
try {
   try_statements
}
[catch (exception_var_1 if condition_1) { // 如果第一层没有捕捉到
   catch_statements_1
}]
...
[catch (exception_var_2) {
   catch_statements_2
}]
[finally {
   finally_statements
}]
```



### 无条件的 catch

当使用单个无条件`catch`子句时，抛出的任何异常时都会进入到`catch`块。

例如，当在下面的代码中发生异常时，控制转移到`catch`子句。

```javascript
try {
    throw '我来报错，你来捕获'
}catch (e) {
    console.log(e)	// 我来报错，你来捕获
}
```



### 有条件的 catch

当用一个无条件`catch`子句和一个或多个条件语句时，无条件`catch`子句必须放在最后。

否则当到达条件语句之前所有的异常将会被非条件语句拦截。

```javascript
try {
    // throw new TypeError('抛出一个 typeError')
    // throw new URIError('抛出一个 uriError')
    throw new Error('error')
} catch (e) {
    if (e instanceof TypeError) {
        console.log('typeError 捕捉')
    } else if (e instanceof URIError) {
        console.log('uriError 捕捉')
    } else {
        console.log('最后捕捉，上面捕捉不到，我来捕捉，做最后保障')
    }
}
```



### finally

`finally` 块包含的语句会在 `try` 块和 `catch` 块执行之后、及 `try...catch...finally` 块后面的语句执行之前执行。

控制流始终会进入 `finally` 块，可以通过以下方式之一执行：

- `try` 块正常执行结束后（没有抛出异常）立即执行；
- 在 `catch` 块正常执行完毕后立即执行；
- 紧接着在 `try` 代码块或 `catch` 代码块中的控制流语句（`return`、`throw`、`break`、`continue`）执行之前执行。

```javascript {5-7}
try {
    throw new Error('我是抛出的异常')
} catch (e) {
    console.log(e.name, e.message)
} finally {
    console.log('无论报不报错，我都会执行')
}
```
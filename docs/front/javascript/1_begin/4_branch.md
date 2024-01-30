# 分支语句



## if

**获取用户输入，判断是奇数还是偶数**

>[!tip]
>
>`+prompt()` 使用了隐式转换，会将用户输入的转换为数字类型

```javascript
let num = prompt('请输入一个整数：')
// 判断输入的是否是整数
if (!isNaN(Number(num)) && Number.isInteger(Number(num))) {
    if (Number(num % 2 === 0)) {
        alert(`${num}是偶数`)
    } else {
        alert(`${num}是奇数`)
    }
} else {
    alert(`你输入的不是整数`)
}

// 死循环
while (true) {
    let num = prompt('请输入一个整数：')
    // 判断输入的是否是整数
    if (!isNaN(Number(num)) && Number.isInteger(Number(num))) {
        if (Number(num % 2 === 0)) {
            alert(`${num}是偶数`)
        } else {
            alert(`${num}是奇数`)
        }
    } else {
        alert(`你输入的不是整数`)
    }
}
```



**判断期末成绩**

```javascript
/*
* 当为 100 时，满分！
* 当为 80-99 时，优秀！
* 当为 60-79 时，凑合！
* 当小于 60 时，滚蛋
* */

let score = prompt("请输入分数：")

if (isNaN(Number(score))) {	// 检查输入的是否可转为 number 类型
    alert("输入成绩有误，请输入分数，不要输入其他内容")
} else {
    score = Number(score)
    if (score === 100) {
        alert("满分！")
    } else if (score >= 80 && score <= 99) {
        alert("优秀！")
    } else if (score >= 60 && score <= 79) {
        alert("凑合")
    } else {
        alert("滚蛋")
    }
}
```

**嫁人问题，值得深思**

```javascript
/*
* 输入三个内容，身高，财产，是否帅气
* 如果 身高 > 180， 财产 > 1000, 且帅气，则嫁
* 如果 只满足一个，则 嫁吧，比上不足，比下有余
* 如果都不满足， 不嫁
* */

let height = prompt("请输入您的身高（单位：cm）：")
let money = prompt("请输入您的财产(单位：万)：")
let handSome = prompt("是否帅气？(帅：1，不帅：0)：")


if (isNaN(Number(height)) || (Number(height) < 100) || Number(height) > 230) { // 检查身高输入是否合法
    alert("身高输入不合法啊大哥，看清题目")
}else if (isNaN(Number(money))) {   // 检查身价输入是否合法
    alert("财产输入不合法啊大哥，看清题目")
}else if (handSome !== "1" && handSome !== "0") {   // 检查帅气输入是否合法
    alert("帅气吗？让你输入1或者0")
}else {
    if (Number(height) >= 180 && Number(money) >= 1000 && handSome === '1'){
        alert("嫁给你")
    }else if (Number(height) >= 180 || Number(money) >= 1000 || handSome === '1'){
        alert('凑合嫁给你吧')
    }else {
        alert('不嫁！')
    }
}
```





## switch

```javascript
let scope = 'A'
switch (scope) {
    case 'A':	// 可多个
    case 'B':	// 可多个
        console.log('A 或者 B')
        break
    case 'C':
        console.log('C')
        break
    default:
        console.log('啥玩意儿')
}
```

**数字转中文星期几**

```javascript
let week = prompt('请输入1-7：')

if (isNaN(Number(week)) || (Number(week) < 1 || Number(week) > 7)){
    alert("输入有误，让你输入 1-7 之间的数字")
}else {
    switch (Number(week)){
        case 1:
            alert("星期一")
            break
        case 2:
            alert("星期二")
            break
        case 3:
            alert("星期三")
            break
        case 4:
            alert("星期四")
            break
        case 5:
            alert("星期五")
            break
        case 6:
            alert("星期六")
            break
        case 7:
            alert("星期天")
            break
    }
}
```




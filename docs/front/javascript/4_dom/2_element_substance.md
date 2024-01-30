# 操作元素内容

## innierText

标签中的文字内容

### 获取及修改

- 显示纯文本，不解析标签

```html {10,14}
<body>
    <div class="box">我是文字内容</div>
    <div class="box1">不解析标签</div>
</body>
<script>
    const box = document.querySelector('.box')
    // 获取标签文字内容
    console.log(box.innerText)
    // 修改标签文字内容
    box.innerText = '我是新的内容'

    // innerText 只处理文本，不解析标签
    const box1 = document.querySelector('.box1')
    box1.innerText = '<strong>这样是原输出，不会解析 strong 标签</strong>'
</script>
```



## innerHtml

- 会解析标签

```html {7}
<body>
    <div class="box1">不解析标签</div>
</body>
<script>
    // innerHtml 会解析标签
    const box1 = document.querySelector('.box1')
    box1.innerHTML = '<strong>这样会解析 strong 标签</strong>'
</script>
```



### 案例

**从数组中，随机抽取一二三等奖，显示到对应标签**

```html
<body>
    <h1>年会抽奖</h1>
    <div class="box">
        <div style="font-size: xx-large">一等奖：<span style="color: red"></span></div>
        <div style="font-size: x-large">二等奖：<span></span></div>
        <div>三等奖:<span></span></div>
    </div>
</body>

<script>
    const persons = ['周杰伦', '刘德华', '周星驰', '林青霞', '维尼熊']
    // 获取随机人函数
    const getPerson = (persons) => {
        return persons[Math.floor(Math.random() * persons.length)]
    }
    // 重新打乱数组
    const winPerson = []
    do {
        const person = getPerson(persons)
        if (winPerson.indexOf(person) === -1) {
            winPerson.push(person)
        }
        // 因为不确定有多少人，所以获取到所有人，重新 push, 获取前三个即可
    } while (winPerson.length < persons.length)

    // 控制 DOM
    const span = document.querySelectorAll('.box div span')
    for (let i = 0; i < span.length; i++) {
        span[i].innerHTML = `<strong>${winPerson[i]}</strong>`
    }

</script>
```
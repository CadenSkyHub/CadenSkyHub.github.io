# 操作元素属性



## 常用属性

### 基本用法

- 通过 `Js` 设置/修改 标签元素属性，比如通过 `src` 更换图片
- 常见的属性比如 `href` 、 `title` 、 `src` 等
- 语法：
    - `对象.属性 = 值`



```html
<body>
    <img src="http://img.daimg.com/uploads/allimg/240118/3-24011R31T60-L.jpg"
         alt="外链图片">
</body>
<script>
    // 获取图片元素
    const img = document.querySelector('img')
	// 修改图片属性
    img.src = 'http://img.daimg.com/uploads/allimg/240118/3-24011R23H80-L.jpg'
    img.title = '更换外链图片'
    img.alt = '新外链图片'

</script>
```



### 示例

**刷新页面，获取不同图片**

```html
<body>
    <img src="http://img.daimg.com/uploads/allimg/240118/3-24011R31T60-L.jpg"
         alt="外链图片">
</body>
<script>
    const imgs = [
        'http://img.daimg.com/uploads/allimg/240118/3-24011R31T60-L.jpg',
        'http://img.daimg.com/uploads/allimg/240118/3-24011R23H80-L.jpg',
        'http://img.daimg.com/uploads/allimg/240118/3-24011QK6010-L.jpg',
        'http://img.daimg.com/uploads/allimg/240118/3-24011QJZ10-L.jpg'
    ]
    // 创建获取随机列表元素函数
    const getAnyImg = (imgs) => {
        return imgs[Math.floor(Math.random() * imgs.length)]
    }
    // 获取 img 对象
    const img = document.querySelector('img')
    img.src = getAnyImg(imgs)
</script>
```







## 样式属性

- 通过 `classList` 操作 `css`

### style

通过 `.style` 属性操作 `css`

- `对象.style.样式属性 = 新值`

```html
<head>
    <style>
        .box{
            width: 100px;
            height: 100px;
            background-color: antiquewhite;
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
<script>
    const div = document.querySelector('div')
    div.style.width = '200px'
    div.style.backgroundColor = 'red'
    div.style.border = '3px solid black'
</script>
```



### className

- 通过类名 `className` 操作 `css`

    - 由于 `class` 是关键字，所以使用 `className` 代替

    - `className` 是新值换旧值，如果需要添加一个类，**则需要保留之前的类名**

        ```javascript
        // active 是一个 css 类名
        元素.className = 'active'
        ```

```html {18,20}
<head>
    <style>
        .box {
            color: red;
        }
        .box1{
            width: 200px;
            height: 200px;
            background: green;
        }
    </style>
</head>
<body>
    <div class="box">123</div>
</body>
<script>
    const div = document.querySelector('div')
    div.className = 'box1'
    // 保留之前类名
    div.className = 'box box1'
</script>
```



### classList *

可以使用 `classList` 方式追加和删除类名

- 类名不加 `.`

- 语法

    ``` javascript
    // 追加一个类
    元素.classList.add('类名','类名'...)
    
    // 删除一个类
    元素.classList.remove('类名','类名'...)
    
    // 切换一个类，有则删除，无则添加
    元素.classList.toggle('类名')
    
    // 替换一个类
    元素.classList.replace('旧类名','新类名')
    ```




## 表单元素属性

`element.value`

```html
<body>
    <input type="text" value="请输入内容...">
</body>

<script>
    const ipt = document.querySelector('input')
    console.log(ipt.value)
</script>
```



::: info 提示

表单属性中添加就有效果，移除就没有效果，一律使用 `boolen` 表示

:::



::: code-group

```html [checked] {11}
<body>
    <label>
        选择框： <input type="checkbox" checked>
    </label>
</body>

<script>
    const ipt = document.querySelector('input')
    console.log(ipt.checked)    // true
    // 修改为 false, 则就不会选中
    ipt.checked = false
</script>
```



```html [disabled] {11}
<body>
    <label>
        选择框是否禁用： <input type="checkbox" disabled>
    </label>
</body>

<script>
    const ipt = document.querySelector('input')
    console.log(ipt.checked)    // false，禁用
    // 修改为 true, 则表示可操作
    ipt.disabled = true
</script>
```

:::



## 自定义属性

- 在 `html5` 中推出了专门的 `data-` 自定义属性
- 在标签上一律使用 `data-` 开头
- 在 `DOM` 树上一律以 `dataset` 对象方式获取

```html {2,7}
<body>
    <div data-a='1' data-b="一" data-c="壹">1</div>
</body>

<script>
    const div = document.querySelector('div')
    console.log(div.dataset)    // DOMStringMap{a: '1', b: '一', c: '壹'}
    console.log(div.dataset.a)  // 1
    console.log(div.dataset.b)  // 一
    console.log(div.dataset.c)  // 壹
</script>
```












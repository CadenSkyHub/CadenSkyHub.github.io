# 获取 DOM 对象

`DOM`是浏览器提供一套专门操作网页内容的功能

`DOM`作用：

- 开发网页内容特效和实现用户交互

> [!tip]
>
> 这里讲解的是 `css` 选择器
>
> - 在使用上更加灵活，`css` 选择器怎么写
> - `querySelector()` 中的参数就可以怎么写
>
> 其他选择器
>
> - `document.getElementById()`：只可以获取 `id` 选择器
> - `document.getElementsByTagName()`：获取页面上 **所有** 的标签，例如 `div`
> - `document.getElementsByClassName('name')`：获取页面上 **所有** `class='name'` 的元素

**选择页面找到的 第一元素**

- `querySelector(css选择器)`
- 获取结果为一个对象
- 可直接修改

**选择页面找到的 所有元素**

- `querySelectorAll(css选择器)`
- 获取结果为一个对象伪数组
    - 有`length`及索引
    - 但是没有 `Array` 的方法
- 通过遍历数组操作修改

```html
<body>
    <div class="box">123</div>
    <div id="box2">234</div>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</body>
<script>
    const div = document.querySelector('.box')  // [!code focus:5]
    const box = document.querySelector('div')
    const id = document.querySelector('#box2')
    const ulOneLi = document.querySelector('ul li:first-child')
    const li = document.querySelectorAll('ul li')

    console.log("获取第一个div：", div)
    console.log("获取第一个class为box的：", box)
    console.log("获取id：", id)
    console.log("获取 ul 下的第一个 li：", ulOneLi)
    console.log("获取所有ul下的li：", li)
</script>
```






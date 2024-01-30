# 节点操作



## 查找节点

### 父节点查找

返回最近一级的父节点对象，如果不存在返回 `null`

``` javascript
子元素.parentNode()
```

示例

```html
<body>
   <div>
       父节点
       <div class="son">子节点</div>
   </div>
</body>
<script>
    const son = document.querySelector('.son')
    console.log('父节点是：',son.parentNode)
    console.log('父父节点是：',son.parentNode.parentNode)
</script>
```



### 子节点查找

返回子节点伪数组

```javascript
父元素.children()
```

示例

```html
<body>
   <div class="father">
       父节点
       <div class="son">子节点</div>
   </div>
</body>
<script>
    const father = document.querySelector('.father')
    console.log('子节点是：',father.children)
</script>
```



### 兄节点查找

返回上一个或下一个节点对象，如果不存在返回 `null`

`previousElementSibling`：上一个节点

`nextElementSibling`：下一个节点

```html
<body>
   <div>
       父节点
       <div class="son0">子节点0</div>
       <div class="son">子节点</div>
       <div class="son1">子节点1</div>
   </div>
</body>
<script>
    const son = document.querySelector('.son')
    console.log("上一个节点", son.previousElementSibling)
    console.log("下一个节点", son.nextElementSibling)
</script>
```



## 增加节点

1. 创建一个新的节点
2. 然后把这个新的节点放到指定的元素内部



### 创建节点

``` javascript
document.createElement('标签名')
```



### 追加节点

```javascript
// 插入到父元素，作为最后一个子元素
父元素.appendChild(新节点)

// 插入到父元素某个子元素的前面
父元素.insertBefore(新节点，在哪个元素前面)
```



### 示例

```html
<body>
   <ul>

   </ul>
</body>
<script>
    const ul = document.querySelector('ul')

    for (let i = 0; i < 10; i++) {
        // 创建节点
        const li = document.createElement('li')
        li.innerText = i.toString()
        // 追加节点
        ul.appendChild(li)
    }
</script>
```



## 克隆节点

1. 复制一个原有节点
2. 把复制的节点增加到指定元素的内部

```javascript
元素.cloneNode(boolen)	

// true 为复制后代节点
// false 则代表克隆时，不包含后代节点。默认
```



示例

```html
<body>
   <ul>
       <li>我是要被复制的，接下来会有好几个我</li>
   </ul>
</body>
<script>
    const ul = document.querySelector('ul')
    const li = document.querySelector('ul li')

    const clonedNode = li.cloneNode(true)
    ul.appendChild(clonedNode)


    /* 或者这么写 */
    ul.appendChild(ul.children[0].cloneNode(true))
</script>
```



## 删除节点

- 删除自己

    ``` javascript
    元素.remove()
    ```

- 删除子节点

    ```javascript
    元素.removeChild(子节点)
    ```

    

示例

```html
<body>
   <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
   </ul>
</body>
<script>
    const ul = document.querySelector('ul')
    const li = document.querySelector('ul li:first-child')
    const li3 = document.querySelector('ul li:last-child')

    li.remove() // 删除自己
    ul.removeChild(li3) // 删除子节点
</script>
```






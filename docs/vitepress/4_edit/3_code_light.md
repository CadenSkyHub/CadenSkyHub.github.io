# 代码块行高亮

- 行范围：`{5-8}` `{3-10}` `{10-17}`
- 多个单行：`{4,7,9}`
- 行范围和多个单行: `{4,7-13,16,23-27,40}`

## 行范围

高亮 `3-5` 行

````markdown
``` python{3-5}
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
```
````
::: details 输出

``` python{3-5}
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
```
:::


## 多个单行

高亮 `1,3,5` 行

````markdown
``` python{1,3,5}
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
```
````

::: details 输出

``` python{1,3,5}
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
```
:::


## 行范围和多个单行

高亮 `1,3,5` `7-9` 行

````markdown
``` python{1,3,5,7-9}
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
```
````

::: details 输出

``` python{1,3,5,7-9}
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
print('VitePress')
```
:::
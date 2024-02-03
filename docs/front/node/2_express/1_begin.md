# express

官方文档：[Express](https://www.expressjs.com.cn/)

中文文档：[Express 中文文档](https://nodejs.cn/express/starter/)

::: details 中文网，弹窗问题解决

篡改猴（油猴管）新建脚本

``` javascript
// ==UserScript==
// @name         屏蔽 nodejs.cn 弹窗
// @namespace    http://tampermonkey.net/
// @version      2024-02-03
// @description  try to take over the world!
// @author       You
// @match        *://*.nodejs.cn/*	// 这里，匹配所有 nodejs.cn 的域名
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.alert=function(){}
    window.setInterval = function(){}
    window.setTimeout = function(){}
    // Your code here...
})();
```

:::

## 安装

``` bash
npm i -D express
```





## 监听项目更改

``` bash
# 全局
npm i -g nodemon
# 仅在项目
npm i -D nodemon
```

运行： `nodemon xxx.js`



## 笔记说明

> [!caution] 警告
>
> `express` 笔记中
>
> - 所有 `req` 为 `Request` 对象
> - 所有 `res` 为 `Response` 对象


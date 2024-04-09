# 重启策略

使用PM2启动应用程序时，应用程序会在自动退出、事件循环为空或应用程序崩溃时自动重新启动。

但您也可以配置额外的重新启动策略，如：

- [在指定的CRON时间重新启动应用程序](#在cron时重新启动)
- [文件更改后重新启动应用程序](#更改文件时重新启动)
- [当应用程序达到内存阈值时重新启动](#基于内存的重启策略)
- [延迟启动和自动重启](#重启延迟)
- [禁用自动重启（默认情况下，应用程序崩溃或退出时总是用PM2重启）]( #无自动重启)



## 在cron时重新启动

这将在每天的午夜（0点）执行`app.js`脚本，从而重新启动`PM2`管理的Node.js应用程序。

```bash
pm2 start app.js --cron-restart="0 0 * * *"
# Or
pm2 restart app --cron-restart="0 0 * * *"
```

通过配置文件，使用 `cron_restart` 属性：

```js
module.exports = {
    apps: [{
        name: 'app1',
        script: 'app.js',
        instances: 1,
        cron_restart: '0 0 * * *',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
}
```

要禁用cron重新启动：

```
pm2 restart app --cron-restart 0
```



## 更改文件时重新启动

当文件在当前目录或其子目录中被修改时，PM2可以自动重新启动您的应用程序：

```
pm2 start app.js --watch
```

> [!warning] 注意
>
> 如果使用 `--watch` 选项启动应用程序，停止应用程序不会阻止它在文件更改时重新启动。
>
> 要完全禁用监视功能，请执行： `pm2 stop app --watch` 或通过 `pm2 restart app --watch` 在应用程序重启时切换监视选项。

通过配置文件，使用 `watch: true` 属性：

```javascript
module.exports = {
    script: "app.js",
    watch: true
}
```

您可以使用以下选项指定要监视哪个文件夹的更改、忽略文件夹和监视文件间隔：

```javascript
module.exports = {
    script: "app.js",
    // 指定要监视的文件夹
    watch: ["server", "client"],
    // 指定监视间隔之间的延迟
    watch_delay: 1000,
    // 指定要忽略的文件夹
    ignore_watch: ["node_modules", "client/img"],
}
```



## 基于内存的重启策略

PM2 允许根据内存限制重新加载应用程序（如果不在集群中，则自动回退以重新启动）

> [!tip] 提示
>
> PM2内部工作程序（检查内存）每30秒启动一次，因此您可能需要等待一段时间，才能在达到内存阈值后自动重新启动进程。

```
pm2 start api.js --max-memory-restart 300M
```

通过配置文件，使用 `max_memory_restart` 属性：

```javascript
module.exports = {
    script: 'api.js',
    max_memory_restart: '300M'
}
```

> [!important] 提示
>
> 注意：单位可以是K（如 `512K` ）、M（如 `128M` ）、G（如 `1G` ）。



## 重启延迟

使用重启延迟策略设置自动重启之间的延迟：

```
pm2 start app.js --restart-delay=3000
```

通过配置文件，使用 `restart_delay` 属性：

```javascript
module.exports = {
    script: 'app.js',
    restart_delay: 3000
}
```



## 无自动重启

如果我们希望运行一次性脚本，并且不希望进程管理器在脚本运行完成时重新启动脚本，这将非常有用。

```
pm2 start app.js --no-autorestart
```

通过配置文件，使用 `autorestart` 属性：

```javascript
module.exports = {
    script: 'app.js',
    autorestart: false
}
```






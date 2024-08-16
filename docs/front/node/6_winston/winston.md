# Winston

- `winston`：[github](https://github.com/winstonjs/winston)
- `winston-daily-rotate-file`：[github](https://github.com/winstonjs/winston-daily-rotate-file)

Winston 是一个非常流行的 Node.js 日志库，功能强大且易于配置。以下是一个详细的步骤，教你如何使用 Winston 并配置按天分割日志文件。

```
npm install winsto
```

> [!NOTE] Level
>
> `level` 说明：配置中的作用是设置日志记录器的最低日志级别。只有级别等于或高于这个设置的日志消息才会被记录。`winston` 支持以下默认日志级别（从低到高）：
>
> 1. `silly`
> 2. `debug`
> 3. `verbose`
> 4. `info`
> 5. `warn`
> 6. `error`



## 简单使用

```ts
import { createLogger, format, transports } from 'winston';
import path from 'path';
import fs from 'fs';

// 确保文件夹存在
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// 创建日志记录器
const logger = createLogger({
    level: 'http',
    format: format.combine(
        format.timestamp(), // 添加时间戳
        format.json() // 输出为 JSON 格式
    ),
    transports: [
        new transports.Console(), // 输出到控制台
        new transports.File({
            dirname: logDir, // 指定目录
            filename: 'logs.log' // 指定文件名
        }) // 输出到指定文件夹
    ]
});

// 使用 logger，传入额外参数
logger.log({
    level: 'http',
    message: 'abc',
    userName: '张三',
    age: 15
});

// 你也可以使用 logger.info() 或 logger.error() 等方法
logger.info('这是一条信息日志', { userName: '李四', age: 30 });
```

## 按天分割

### 1. 安装 `Daily Rotate File` 插件

首先，你需要安装 `winston` 和 `winston-daily-rotate-file` 插件：

```bash
npm install winston-daily-rotate-file
```

### 2. 配置 Winston 日志记录器

接下来，创建一个日志记录器并配置按天分割日志文件。

以下是一个完整的示例：

```javascript
import winston from 'winston';
import 'winston-daily-rotate-file';

// 创建一个传输实例，用于按天分割日志文件
const transport = new winston.transports.DailyRotateFile({
    filename: 'logs/application-%DATE%.log', // 日志文件名，%DATE% 会被替换为当前日期
    datePattern: 'YYYY-MM-DD', // 日期格式
    zippedArchive: true, // 是否压缩归档日志文件
    maxSize: '20m', // 单个日志文件的最大尺寸
    maxFiles: '14d' // 日志文件的保留天数
});

// 创建一个 Winston 日志记录器
const logger = winston.createLogger({
    level: 'info', // 日志级别
    format: winston.format.combine(
        winston.format.timestamp(), // 添加时间戳
        winston.format.json() // 日志格式为 JSON
    ),
    transports: [
        new winston.transports.Console(), // 控制台输出
        transport // 文件输出（按天分割）
    ]
});

// 示例日志
logger.info('This is an info message');
logger.error('This is an error message');
```

### 3. 使用日志记录器

可以在应用程序中随时使用这个日志记录器来记录日志。

例如：

```javascript
// 记录信息级别的日志
logger.info('User logged in', { userId: 123 });

// 记录错误级别的日志
logger.error('Failed to connect to database', { error: 'Connection timeout' });
```

### 4. 其他配置选项

`winston-daily-rotate-file` 提供了许多其他配置选项，你可以根据需要进行调整。以下是一些常用的选项：

- `level`: 设置日志级别（如 `info`, `warn`, `error` 等）。
- `dirname`: 设置日志文件的目录。
- `filename`: 设置日志文件的名称模式。
- `datePattern`: 设置日期模式。
- `zippedArchive`: 是否压缩归档日志文件。
- `maxSize`: 设置单个日志文件的最大尺寸。
- `maxFiles`: 设置日志文件的保留天数。

可以参考 [winston-daily-rotate-file 文档](https://github.com/winstonjs/winston-daily-rotate-file) 获取更多详细信息。

通过上述步骤，你可以轻松地在 Node.js 应用程序中使用 Winston 并配置按天分割日志文件。



## 按日志类型分割

要根据日志类型（例如 `info`, `error`, `warn` 等）来分割日志文件，

可以为每种日志类型创建不同的传输实例，并将它们添加到 `winston` 日志记录器中。

以下是一个示例，展示了如何实现这一点：

```javascript
import winston from 'winston';
import 'winston-daily-rotate-file';

// 创建不同的传输实例，用于不同类型的日志
const infoTransport = new winston.transports.DailyRotateFile({
    dirname: 'logs/info', // 自定义目录
    filename: 'info-%DATE%.log', // 日志文件名，%DATE% 会被替换为当前日期
    datePattern: 'YYYY-MM-DD', // 日期格式
    zippedArchive: true, // 是否压缩归档日志文件
    maxSize: '20m', // 单个日志文件的最大尺寸
    maxFiles: '14d', // 日志文件的保留天数
    level: 'info' // 只记录 info 级别的日志
});

const errorTransport = new winston.transports.DailyRotateFile({
    dirname: 'logs/error', // 自定义目录
    filename: 'error-%DATE%.log', // 日志文件名，%DATE% 会被替换为当前日期
    datePattern: 'YYYY-MM-DD', // 日期格式
    zippedArchive: true, // 是否压缩归档日志文件
    maxSize: '20m', // 单个日志文件的最大尺寸
    maxFiles: '14d', // 日志文件的保留天数
    level: 'error' // 只记录 error 级别的日志
});

// 创建一个 Winston 日志记录器
const logger = winston.createLogger({
    level: 'info', // 默认日志级别
    format: winston.format.combine(
        winston.format.timestamp(), // 添加时间戳
        winston.format.json() // 日志格式为 JSON
    ),
    transports: [
        new winston.transports.Console(), // 控制台输出
        infoTransport, // info 级别的文件输出（按天分割）
        errorTransport // error 级别的文件输出（按天分割）
    ]
});

// 示例日志
logger.info('This is an info message');
logger.error('This is an error message');
```

通过为每种日志类型创建不同的传输实例，并将它们添加到 `winston` 日志记录器中，你可以根据日志类型来分割日志文件。这使得你可以更好地管理和组织不同类型的日志信息。



## 修改日志文件夹

当然可以将日志文件保存到其他文件夹。你只需要在配置 `winston-daily-rotate-file` 传输实例时指定你想要的目录即可。可以通过设置 `dirname` 和 `filename` 来指定日志文件的目录和名称。

```javascript
import winston from 'winston';
import 'winston-daily-rotate-file';

// 创建一个传输实例，用于按天分割日志文件，并保存到自定义目录
const transport = new winston.transports.DailyRotateFile({
    dirname: 'custom_logs', // 自定义目录
    filename: 'application-%DATE%.log', // 日志文件名，%DATE% 会被替换为当前日期
    datePattern: 'YYYY-MM-DD', // 日期格式
    zippedArchive: true, // 是否压缩归档日志文件
    maxSize: '20m', // 单个日志文件的最大尺寸
    maxFiles: '14d' // 日志文件的保留天数
});

// 创建一个 Winston 日志记录器
const logger = winston.createLogger({
    level: 'info', // 日志级别
    format: winston.format.combine(
        winston.format.timestamp(), // 添加时间戳
        winston.format.json() // 日志格式为 JSON
    ),
    transports: [
        new winston.transports.Console(), // 控制台输出
        transport // 文件输出（按天分割）
    ]
});

// 示例日志
logger.info('This is an info message');
logger.error('This is an error message');
```

通过设置 `dirname` 和 `filename`，你可以将日志文件保存到任何你想要的目录。这使得你可以根据项目的需求灵活地管理日志文件的位置。



## 自定义日志格式

### 字符串格式

- 在 `customFormat` 中，使用 `...metadata` 来捕获额外的参数。
- 将额外参数转换为字符串并附加到日志消息中。

```ts
import { createLogger, format, transports, Logger } from 'winston';

// 自定义格式
const customFormat = format.printf(({ level, message, timestamp, ...metadata }) => {
    // 将额外的参数转换为字符串
    const meta = Object.keys(metadata).length ? JSON.stringify(metadata) : '';
    return `${timestamp} [${level}]: ${message} ${meta}`;
});

// 创建日志记录器
const logger: Logger = createLogger({
    level: 'http',
    format: format.combine(
        format.timestamp(), // 添加时间戳
        customFormat // 使用自定义格式
    ),
    transports: [
        new transports.Console(), // 输出到控制台
        new transports.File({ filename: 'http.log' }) // 输出到文件
    ]
});

// 使用 logger，传入额外参数
logger.log({
    level: 'http',
    message: 'abc',
    userName: '张三',
    age: 15
});

// 你也可以使用 logger.info() 或 logger.error() 等方法
logger.info('这是一条信息日志', { userName: '李四', age: 30 });
```

### json 格式

- 参考 [简单使用](#简单使用)
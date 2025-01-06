# 安装

## Linux

在 `Ubuntu` 上使用 `apt` 下载并安装 `PostgreSQL`。

### 安装

1. 创建文件存储库配置

``` bash
sudo sh -c 'echo "deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```

2. 更新包列表

``` bash
sudo apt-get update
```

3. 安装

```bash
sudo apt-get install postgresql

# 安装特定版本
sudo apt-get install postgresql-12
```

### 连接

**当您安装 PostgreSQL 时，安装过程会创建一个名为`postgres`的与默认`postgres`角色关联的用户账号。**

1. 切换到 `postgres` 账户

    ```bash
    sudo -i -u postgres
    ```

2. 然后，您可以通过键入以下命令使用`psql`来访问 `PostgreSQL`：

    ```bash
    psql
    ```

    接下来即可进入 `postgresql`命令提示符：

    ```bash
    postgres=#
    ```

3. 要退出 `PostgreSQL 提示符`，请运行以下命令：

    ```bash
    postgres=# \q
    ```
    
    

### 设置 PostgreSQL 用户密码

1. **切换到 `postgres` 用户**：

    ```bash
    sudo -i -u postgres
    ```

2. **进入 `psql`**：

    ```bash
    psql
    ```

3. **设置密码**： 在 `psql` 提示符下，输入以下命令：

    ```bash
    sql \password postgres
    ```

    系统会提示你输入新的密码。

4. **退出 `psql`**： 输入：

    ```bash
    sql \q
    ```



### 配置远程连接

要允许远程连接，需要修改 `PostgreSQL` 的配置文件和访问控制文件：

#### 修改 `postgresql.conf`

1. 使用文本编辑器打开配置文件：(`<version>` 是 PostgreSQL 的版本号)

    ```bash
    sudo vim /etc/postgresql/<version>/main/postgresql.conf
    ```

2. 找到以下行

    ``` bash
    #listen_addresses = 'localhost'
    ```

3. 修改为：

    ```bash
    listen_addresses = '*'
    ```

#### 修改 `pg_hba.conf`

1. 打开访问控制文件 `pg_hba.conf`：

    ```
    sudo vim /etc/postgresql/<version>/main/pg_hba.conf
    ```

2. 移动到最后，将文件中的（*如果没有则新增一行即可*）：

    ```
    host   all    all   127.0.0.1/32    scram-sha-256
    ```

3. 修改为：

    ```
    host   all    all   0.0.0.0/0   md5
    ```



### 重启PostgreSQL

``` bash
sudo systemctl restart postgresql
```







# 常用命令



## 创建一个用户

```bash
# 连接到 PostgreSQL
psql -U postgres

# 创建用户
CREATE USER myuser WITH PASSWORD 'mypassword';

# 授予创建数据库的权限（该用户是否可以创建用户）
ALTER USER myuser CREATEDB;

# 查看用户列表
\du

# 退出 psql
\q
```





## 创建一个数据库

``` bash
# 连接到 PostgreSQL
psql -U postgres

# 创建数据库
CREATE DATABASE mydatabase;

# 或者在创建数据库时，指定拥有者
CREATE DATABASE mydatabase OWNER myuser;

# 列出所有数据库
\l

# 连接到新数据库
\c mydatabase

# 退出 psql
\q
```





## 删除用户

```bash
# 删除用户
DROP USER myuser;
```





## 删除数据库

```bash
# 删除数据库
DROP DATABASE mydatabase;
```







# 数据类型

| 数据类型                                 | 说明                                                         | 示例                                                         |
| ---------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **整数类型**                             |                                                              |                                                              |
| `smallint`                               | 2 字节整数，范围 -32,768 到 32,767                           | `smallint`                                                   |
| `integer` (或 `int`)                     | 4 字节整数，范围 -2,147,483,648 到 2,147,483,647             | `integer`                                                    |
| `bigint`                                 | 8 字节整数，范围 -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807 | `bigint`                                                     |
| **浮点数类型**                           |                                                              |                                                              |
| `real`                                   | 4 字节单精度浮点数                                           | `real`                                                       |
| `double precision`                       | 8 字节双精度浮点数                                           | `double precision`                                           |
| `numeric` (或 `decimal`)                 | 可变精度数值                                                 | `numeric(10, 2)`                                             |
| **字符类型**                             |                                                              |                                                              |
| `char(n)`                                | 固定长度字符串，长度为 n                                     | `char(10)`                                                   |
| `varchar(n)` (或 `character varying(n)`) | 可变长度字符串，最大长度为 n                                 | `varchar(255)`                                               |
| `text`                                   | 可变长度字符串，没有长度限制                                 | `text`                                                       |
| **布尔类型**                             |                                                              |                                                              |
| `boolean`                                | 存储 `TRUE`、`FALSE` 或 `NULL`                               | `boolean`                                                    |
| **日期和时间类型**                       |                                                              |                                                              |
| `date`                                   | 存储日期（年、月、日）                                       | `date`                                                       |
| `time`                                   | 存储时间（时、分、秒）                                       | `time`                                                       |
| `timestamp`                              | 存储日期和时间（不带时区）                                   | `timestamp`                                                  |
| `timestamptz`                            | 存储日期和时间（带时区）                                     | `timestamptz`                                                |
| `interval`                               | 存储时间间隔                                                 | `interval '1 day'`                                           |
| **二进制类型**                           |                                                              |                                                              |
| `bytea`                                  | 存储二进制数据                                               | `bytea`                                                      |
| **枚举类型**                             |                                                              |                                                              |
| `enum`                                   | 定义一组有限的值                                             | `CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');`           |
| **复合类型**                             |                                                              |                                                              |
| `composite`                              | 用户定义的复合类型                                           | `CREATE TYPE address AS (street varchar, city varchar, zip code varchar);` |
| **JSON 类型**                            |                                                              |                                                              |
| `json`                                   | 存储 JSON 数据                                               | `json '{"key": "value"}'`                                    |
| `jsonb`                                  | 存储二进制格式的 JSON 数据                                   | `jsonb '{"key": "value"}'`                                   |
| **数组类型**                             |                                                              |                                                              |
| `type[]`                                 | 存储任意类型的数组                                           | `integer[]`                                                  |
| **地理空间类型**                         |                                                              |                                                              |
| `geometry`                               | 存储空间数据（需要 PostGIS 扩展）                            | `geometry`                                                   |
| `geography`                              | 存储地理数据（需要 PostGIS 扩展）                            | `geography`                                                  |
| **UUID 类型**                            |                                                              |                                                              |
| `uuid`                                   | 存储通用唯一标识符                                           | `uuid`                                                       |
| **网络地址类型**                         |                                                              |                                                              |
| `inet`                                   | 存储 IPv4 或 IPv6 地址                                       | `inet '192.168.0.1'`                                         |
| `cidr`                                   | 存储网络地址                                                 | `cidr '192.168.0.0/24'`                                      |
| `macaddr`                                | 存储 MAC 地址                                                | `macaddr '08:00:20:4b:67:99'`                                |
| **其他类型**                             |                                                              |                                                              |
| `xml`                                    | 存储 XML 数据                                                | `xml '<root></root>'`                                        |
| `tsvector`                               | 用于全文搜索的文本搜索向量                                   | `tsvector`                                                   |
| `tsquery`                                | 用于全文搜索的查询类型                                       | `tsquery`                                                    |



# 约束

| 约束            | 说明                                  | 示例                                                         |
| --------------- | ------------------------------------- | ------------------------------------------------------------ |
| **NOT NULL**    | 不允许列值为空                        | `column_name INT NOT NULL`                                   |
| **UNIQUE**      | 列中的所有值必须唯一                  | `column_name VARCHAR(255) UNIQUE`                            |
| **PRIMARY KEY** | 唯一标识表中每一行，自动包含 NOT NULL | `PRIMARY KEY (column1, column2)`                             |
| **FOREIGN KEY** | 约束表之间的关系，引用另一个表的主键  | `FOREIGN KEY (column_name) REFERENCES other_table(column_name)` |
| **CHECK**       | 验证列中的值是否符合特定条件          | `CHECK (age >= 18)`                                          |
| **DEFAULT**     | 指定列的默认值                        | `column_name INT DEFAULT 0`                                  |
| **EXCLUDE**     | 用于排除约束，通常用于空间数据        | `EXCLUDE USING GIST (column_name WITH &&)`                   |
| **CONSTRAINT**  | 自定义约束名称                        | `CONSTRAINT constraint_name UNIQUE (column_name)`            |





# 查询







## 串联运算符

``` sql
SELECT
    first_name || ' ' || last_name,
    email
FROM
    customer;
```





## 别名

语法：

```sql
SELECT
    select_colum [AS] "custum name",
FROM
    table_name;
```



别名可省略 `AS`

```sql
SELECT
    first_name || ' ' || last_name 全名,
    email
FROM
    customer;
```



包含空格的别名

```sql
SELECT
    first_name || ' ' || last_name AS "全 名",
    email
FROM
    customer;
```



## 排序

语法：

```sql
SELECT
	select_list
FROM
	table_name
ORDER BY
	sort_expression1 [ASC | DESC],
        ...
	sort_expressionN [ASC | DESC];
```





# 函数/例程

## last_updated

函数

```sql
CREATE OR REPLACE FUNCTION update_timestamp()
    RETURNS TRIGGER AS $$
BEGIN
    NEW.update_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

触发器

```sql
-- 自动更新 更新时间
create trigger last_updated
    before update
    on table_name
    for each row
execute procedure last_updated();
```







# 示例

1. books：书籍表

| 字段       | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| book_id    | 自增，id，主键                                               |
| name       | 书籍名字                                                     |
| date       | 出版时间                                                     |
| publish_id | 出版社id。外键关联到 publish 表的 publish_id 上。如果删除出版社，则改行为 NULL |
| create_at  | 创建时间，插入时自动插入时间                                 |
| update_at  | 更新时间，更新改行时，自动更新该时间                         |



2. author：作者表

| 字段      | 说明                                 |
| --------- | ------------------------------------ |
| author_id | 自增，id，主键                       |
| name      | 作者名字                             |
| gender    | 作者性别                             |
| create_at | 创建时间，插入时自动插入时间         |
| update_at | 更新时间，更新改行时，自动更新该时间 |



3. publish：出版社表

| 字段       | 说明                                 |
| ---------- | ------------------------------------ |
| publish_id | 自增，id，主键                       |
| name       | 出版社名字                           |
| city       | 出版社城市                           |
| create_at  | 创建时间，插入时自动插入时间         |
| update_at  | 更新时间，更新改行时，自动更新该时间 |



4. author_books：作者和书籍标

| 字段            | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| author_books_id | 自增，id，主键                                               |
| author_id       | 作者id。外键关联到 author 表的 author_id 上，如果删除作者，则删除该行 |
| books_id        | 书籍id。外键关联到 books 表的 book_id 上。 如果删除书籍，则删除该行 |
| create_at       | 创建时间，插入时自动插入时间                                 |
| update_at       | 更新时间，更新改行时，自动更新该时间                         |



```sql
-- 创建出版社表
CREATE TABLE publish (
    publish_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建作者表
CREATE TABLE author (
    author_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gender VARCHAR(10),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建书籍表
CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE,
    publish_id INT,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (publish_id) REFERENCES publish(publish_id) ON DELETE SET NULL
);

-- 创建作者与书籍关联表
CREATE TABLE author_books (
    author_books_id SERIAL PRIMARY KEY,
    author_id INT,
    books_id INT,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES author(author_id) ON DELETE CASCADE,
    FOREIGN KEY (books_id) REFERENCES books(book_id) ON DELETE CASCADE
);

-- 创建更新时间戳的函数
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.update_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 为 books 表创建触发器
CREATE TRIGGER update_books_timestamp
BEFORE UPDATE ON books
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- 为 author 表创建触发器
CREATE TRIGGER update_author_timestamp
BEFORE UPDATE ON author
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- 为 publish 表创建触发器
CREATE TRIGGER update_publish_timestamp
BEFORE UPDATE ON publish
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- 为 author_books 表创建触发器
CREATE TRIGGER update_author_books_timestamp
BEFORE UPDATE ON author_books
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();
```


GitHub: [juewuy/ShellCrash (github.com)](https://github.com/juewuy/ShellCrash/blob/dev/README_CN.md)

官方 Blog : [Juewuy's Blog](https://juewuy.github.io/)



## 安装

### Linux 安装

```bash
su root		# 切换到 root 用户
bash 	# 切换到 bash 环境

export url='https://fastly.jsdelivr.net/gh/juewuy/ShellCrash@master' && wget -q --no-check-certificate -O /tmp/install.sh $url/install.sh && bash /tmp/install.sh && source /etc/profile &> /dev/null
```

如果上面的不行，试试下面的，墙高，没法

```BASH
su root		# 切换到 root 用户
bash 	# 切换到 bash 环境

export url='https://gh.jwsc.eu.org/master' && bash -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null
```



### 路由器安装

```bash
# 1 尝试 github 安装
export url='https://raw.githubusercontent.com/juewuy/ShellCrash/master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null


# 2 不行就尝试 jsDelivrCDN 安装
export url='https://fastly.jsdelivr.net/gh/juewuy/ShellCrash@master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null


# 3 再不行，用作者的源安装
export url='https://gh.jwsc.eu.org/master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null


# 4 再不行，用 curl 安装
export url='https://raw.githubusercontent.com/juewuy/ShellCrash/master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null


# 5 再不行，jsDelivrCDN源
export url='https://fastly.jsdelivr.net/gh/juewuy/ShellCrash@master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null


# 6 再不行，本地安装吧
```



### 虚拟机/Docker环境安装

虚拟机或 `Docker` 环境推荐使用 `Alpine` 镜像安装

``` bash
#注意，以下命令请分步执行！
#Docker一键启动Alpine镜像
docker run -d --name ShellCrash alpine sleep infinity
#进入容器内sh环境
docker exec -it ShellCrash sh
#安装必要依赖
apk add curl 
apk add nftables
#执行安装命令
export url='https://fastly.jsdelivr.net/gh/juewuy/ShellCrash@master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null
```



## 去你妈的 GFW (本地安装)

文档：[本地安装ShellCrash的教程](https://juewuy.github.io/bdaz/#一-通过winscp或其他scp客户端手动上传安装包文件完整安装或覆盖升级)

识别内核及安装版本

```bash
uname -ms | tr ' ' '_' | tr '[A-Z]' '[a-z]'
```

**注意：** `aarch64 = armv8 = arm64`	`x86_64 = amd64`





### 1. 通过上传安装包安装或升级

1. 点击 [Github源](https://github.com/juewuy/ShellCrash/raw/master/bin/ShellCrash.tar.gz) 或者 [Jsdelivr源](https://fastly.jsdelivr.net/gh/juewuy/ShellCrash@master/bin/ShellCrash.tar.gz) 下载本地安装包文件 `ShellCrash.tar.gz`（如果文件名不对或乱码，请自行改名）
2. 将该压缩文件**（请勿解压） **上传至设备 `/tmp` 目录

3. 运行`OpenWrt`或其他非标准Linux系统的设备（主要是各类路由器），请使用如下命令安装：

    ```bash
    mkdir /tmp/SC_tmp && tar -zxf '/tmp/ShellCrash.tar.gz' -C /tmp/SC_tmp/ && source /tmp/SC_tmp/init.sh 
    ```

4. 运行标准Linux系统的设备则使用如下命令进行安装：

    ```bash
    sudo -i #如提示输入密码，请输入用户密码
    
    mkdir /tmp/sc_tmp && tar -zxf /mnt/ShellCrash.tar.gz -C /tmp/sc_tmp/ && bash /tmp/sc_tmp/init.sh && source /etc/profile >/dev/null
    ```

5. 参考 **下面** 安装所需的内核文件

6. 运行 `ShellCrash` 脚本，如有需要，请使用 `8-2` 功能进入新手引导

### 2. 手动上传内核单独安装/升级内核

1. 下载相关内核文件
    - `Sing-Box` 内核：https://github.com/juewuy/ShellCrash/tree/dev/bin/singbox
    - `Meta` 内核：https://github.com/juewuy/ShellCrash/tree/dev/bin/meta

2. 需要标准 **二进制** 文件，第三方地址请 *自行解压*，通常无须改名
3. 之后将该二进制文件上传至 `/tmp` 目录
4. 之后在 `SSH` 中直接运行 `crash` 命令
5. 参考提示完成加载



## 使用脚本

```bash
Clash 		#进入对话
Clash -h 	#帮助列表
```





## 其他问题

### 1. root 安装到哪儿了？

```
/etc/ShellCrash
```



### 2. Linux 使用代理

参考： [Linux代理 加速：apt 和 Docker 的解决方案](https://yanh.tech/2023/11/linux-proxy-acceleration-for-apt-docker/)



### 3. 软路由如何劫持本机以及局域网？

`2-内核功能设置 -> 1-切换防火墙运行模式 -> 7-设置劫持范围`



### 4. 如何修改 sockets5 端口及账密

`7-内核进阶设置 -> 5-自定义端口及密钥 `

# Docker

官方文档（需代理）：[Install Docker Engine](https://docs.docker.com/engine/install/)

学习视频：[哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1HP4118797/?p=6&spm_id_from=pageDriver&vd_source=a971f27cdc6a5c5e8a16041ae47b0aec)

`Centos7` 下 `docker` 的安装、卸载、配置镜像等

## Step1. 卸载

> [!caution] 注意
>
> 安装前，先卸载旧版本，如果是干净的系统，则无需执行
>
> ``` bash
> sudo yum remove docker \
>                   docker-client \
>                   docker-client-latest \
>                   docker-common \
>                   docker-latest \
>                   docker-latest-logrotate \
>                   docker-logrotate \
>                   docker-engine
> ```



## Step2. 安装

1. 安装 `yum-utils` 软件包（提供 `yum-config-manager` 实用程序）。

    ``` bash
    yum install -y \
    		yum-utils \
    		device-mapper-persistent-data \
    		lvm2 \
    		--skip-broken
    ```

2. 设置存储库（阿里云）

    ``` bash
    yum-config-manager \
            --add-repo \
            https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    ```

3. 安装`docker`

    ``` bash
    sudo yum install \
    		docker-ce \
    		docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```

    

## Step3. 启动

### 启动服务

``` bash
systemctl start docker
```

### 停止服务

``` bash
systemctl stop docker
```

### 重启服务

``` bash
systemctl restart docker
```

### 设置开机自启

``` bash
systemctl enable docker
```



> [!important] 提示
>
> 防火墙问题，在线上环境，不要关闭防火墙，这里是为了学习，所以关闭了系统的防火墙
>
> ``` bash
> # 关闭防火墙
> systemctl stop firewalld
> 
> # 禁止开机启动防火墙
> systemctl disable firewalld
> ```



## Step4. 配置镜像

详细设置：[容器镜像服务 (aliyun.com)](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)

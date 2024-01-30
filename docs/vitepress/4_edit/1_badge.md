# 徽标

徽章可以向 **标题或文字** 添加状态。

例如，指定部分的类型或支持的版本可能很有用。

## 用法

::: code-group

``` html [text]
### Title <Badge type="info" text="info" />
### Title <Badge type="tip" text="tip" />
### Title <Badge type="warning" text="warning" />
### Title <Badge type="danger" text="danger" />
```



``` html [子节点]
### Title <Badge type="info">info badge</Badge>
### Title <Badge type="tip">tip badge</Badge>
### Title <Badge type="warning">warning badge</Badge>
### Title <Badge type="danger">danger badge</Badge>
```



``` typescript [类型提示]
interface Props {
  // 当传递 `<slot>` 时，该值将被忽略
  text?: string

  // 默认为 `tip`.
  type?: 'info' | 'tip' | 'warning' | 'danger'
}
```



:::

<br>
演示 info <Badge type="info" text="default" /> <br><br>
演示 tip <Badge type="tip" text="tip" /> <br><br>
演示 warning <Badge type="warning">warning badge</Badge> <br><br>
演示 danger <Badge type="danger">danger badge</Badge> <br><br>


## 自定义类型颜色

可以通过覆盖 css 变量来自定义徽章。

详细请查看主题配置 ： [主题配置](/vitepress/3_config/2_custom_css.md)

``` css
:root {
  --vp-badge-info-border: var(--vp-c-divider-light);
  --vp-badge-info-text: var(--vp-c-text-2);
  --vp-badge-info-bg: var(--vp-c-white-soft);

  --vp-badge-tip-border: var(--vp-c-green-dimm-1);
  --vp-badge-tip-text: var(--vp-c-green-darker);
  --vp-badge-tip-bg: var(--vp-c-green-dimm-3);

  --vp-badge-warning-border: var(--vp-c-yellow-dimm-1);
  --vp-badge-warning-text: var(--vp-c-yellow-darker);
  --vp-badge-warning-bg: var(--vp-c-yellow-dimm-3);

  --vp-badge-danger-border: var(--vp-c-red-dimm-1);
  --vp-badge-danger-text: var(--vp-c-red-darker);
  --vp-badge-danger-bg: var(--vp-c-red-dimm-3);
}

.dark {
  --vp-badge-info-border: var(--vp-c-divider-light);
  --vp-badge-info-bg: var(--vp-c-black-mute);

  --vp-badge-tip-border: var(--vp-c-green-dimm-2);
  --vp-badge-tip-text: var(--vp-c-green-light);

  --vp-badge-warning-border: var(--vp-c-yellow-dimm-2);
  --vp-badge-warning-text: var(--vp-c-yellow-light);

  --vp-badge-danger-border: var(--vp-c-red-dimm-2);
  --vp-badge-danger-text: var(--vp-c-red-light);
}
```
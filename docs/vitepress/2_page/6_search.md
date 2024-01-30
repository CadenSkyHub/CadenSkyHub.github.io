# 搜索

参考文档：[官方文档](https://vitepress.dev/zh/reference/default-theme-search#local-search)

## `minisearch`

要启用此功能，只需在 `.vitepress/config.ts` 文件中将 `themeConfig.search.provider` 选项设置为 `'local'` 即可：

``` typescript
import {defineConfig} from 'vitepress'

export default defineConfig({
    themeConfig: {
        search: {
            provider: 'local'
        }
    }
}
```

## i18n

配置来使用多语言搜索，设置搜索的文本。

``` typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
```


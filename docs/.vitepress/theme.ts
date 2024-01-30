import { DefaultTheme } from "vitepress";
import { nav } from "./nav";
import { vitePressSideBar } from "../vitepress/sidebar";

export const themeConfig: DefaultTheme.Config = {
    siteTitle: "< ~/ > MyNote",
    logo: "/public/logo.png",


    outline: [2, 3],
    outlineTitle: '在本页中',

    docFooter: {
        prev: '上一章',
        next: '下一章',
    },
    nav,
    sidebar: {
        '/vitepress/': vitePressSideBar,
    },

    search: {
        provider: 'local',
        options: {
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档',
                },
                modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭'
                    }
                }
            }
        }
    },

    lightModeSwitchTitle: '切换至暗色主题',
    darkModeSwitchTitle: '切换至亮色主题',
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true,
    lastUpdated: {
        text: '最后更新时间'
    },
    notFound: {
        title: '页面未找到',
        linkText: "返回首页"
    },

    socialLinks: [
        { icon: 'github', link: 'https://github.com/CadenSkyHub' }
    ]
}
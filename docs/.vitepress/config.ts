import { defineConfig } from "vitepress";
import { themeConfig } from "./theme";


export default defineConfig({
    title: '< ~/ > MyNote',
    lang: 'zh',
    description: '这里记录了我的个人笔记，因为脑子不好，所以经常查询',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig,
    markdown: {
        lineNumbers: true
    },
    lastUpdated: true,
})
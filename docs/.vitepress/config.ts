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
        lineNumbers: true,
        config(md) {
            md.use((md)=>{
                md.renderer.rules.table_open = (tokens, idx, options, env, self)=>{
                    return '<div class="table_p">\n<table>'
                }

                md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
                    return '</table>\n</div>';
                };
            })
        },
    },
    lastUpdated: true,
})
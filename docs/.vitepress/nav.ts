import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {text: '首页', link: 'index'},
    {text: 'VitePress', link: '/vitepress/1_begin/1_begin'},
    {
        text: '开发',
        items: [
            {
                text: '前端',
                items: [
                    {text: 'JavaScript', link: '/front/javascript/1_begin/1_var_const_ident'},
                    {text: 'TypeScript', link: '/front/typescript/1_begin'},
                    {text: 'Node', link: '/front/node/1_base/1_npm'},
                    {text: 'Directus', link: '/front/directus/0_start'},
                ]
            },
            {
              text:'数据库',
              items:[
                  {text: 'Mongodb', link: '/front/database/Mongodb/1_install'},
                  {text: 'Redis', link: '/front/database/redis/1_begin'},
              ]
            },
            {
                text: 'Python',
                items: [
                    {text: '官方文档', link: '/front/Python/index'},
                    {text: '廖雪峰教程', link: 'https://liaoxuefeng.com/books/python'},
                ]
            }
        ]
    },
    {text: '工具', link: '/tools/fnm/Fnm'},
    {text: '其他工具', link: '/other-tools/index'}
]
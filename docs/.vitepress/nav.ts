import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: '首页', link: 'index' },
    { text: 'VitePress', link: '/vitepress/1_begin/1_begin' },
    {
        text: '前端', 
        items: [
            {text:'JavaScript', link:'/front/javascript/1_begin/1_var_const_ident'}
        ]
    }
]
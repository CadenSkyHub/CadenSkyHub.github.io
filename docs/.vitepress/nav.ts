import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: '首页', link: 'index' },
    { text: 'VitePress', link: '/vitepress/1_begin/1_begin' },
    {
        text: 'JavaScript', 
        items: [
            {text:'JavaScript', link:'/front/javascript/1_begin/1_var_const_ident'},
            {text:'TypeScript', link:'/front/typescript/1_begin'},
            {text:'Node', link:'/front/node/1_base/1_npm'},
            {text:'Mongodb', link:'/front/mongodb/1_install'},
        ]
    },
    {text:'Tools', link:'/tools/fnm/Fnm'}
]
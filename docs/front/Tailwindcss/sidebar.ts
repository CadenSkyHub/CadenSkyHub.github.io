import { DefaultTheme } from "vitepress";


export default [
    {
        text: 'Tailwindcss',
        items: [
            {
                text: '提示',
                link: '/front/Tailwindcss/0_intellisence'
            },
            {
                text: 'Cva 合并',
                link: '/front/Tailwindcss/1_cva'
            },
            {
                text: 'Tv 合并',
                link: '/front/Tailwindcss/2_variants'
            }
        ]
    }
] satisfies DefaultTheme.SidebarItem[]
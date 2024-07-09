import {DefaultTheme} from "vitepress";


export const directusSidebar:DefaultTheme.SidebarItem[] = [
    {
        text: 'Directus',
        items: [
            { text: '开始', link: '/front/directus/0_start' },
            { text: '数据表', link: '/front/directus/1_database' },
            { text: '单例表', link: '/front/directus/2_singleton' },
            { text: '托管', link: '/front/directus/3_hosting' },
        ]
    },
]

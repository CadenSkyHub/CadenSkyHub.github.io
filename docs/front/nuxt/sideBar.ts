import {DefaultTheme} from "vitepress";

const nuxtSideBar:DefaultTheme.SidebarItem[] = [
    {
        text:'Nuxt',
        items:[
            {text:'开始', link: '/front/nuxt/0_start'},
            {text:'错误', link: '/front/nuxt/1_error'},
            {text:'配置', link: '/front/nuxt/2_config'},
            {text:'路由', link: '/front/nuxt/3_router'},
            {text:'布局', link: '/front/nuxt/3_layouts'},
            {text:'数据获取', link: '/front/nuxt/4_get'},
            {text:'服务端', link: '/front/nuxt/5_server'},
            {text:'redis', link: '/front/nuxt/6_redis'},
            {text:'SEO', link: '/front/nuxt/7_seo'},
        ]
    }
]


export default nuxtSideBar
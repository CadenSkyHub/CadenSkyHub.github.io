import { DefaultTheme } from "vitepress";

export const vitePressSideBar: DefaultTheme.SidebarItem[] = [
    {
        text: '开始',
        items: [
            { text: '安装', link: '/vitepress/1_begin/1_begin' },
            { text: '初始配置', link: '/vitepress/1_begin/2_config' },
            { text: '部署', link: '/vitepress/1_begin/3_deploy' },
        ],
    },
    {
        text: '页面',
        items: [
            { text: '导航栏', link: '/vitepress/2_page/1_nav_bar' },
            { text: '侧边栏', link: '/vitepress/2_page/2_side_bar' },
            { text: '编辑链接', link: '/vitepress/2_page/3_edit_link' },
            { text: '首页', link: '/vitepress/2_page/4_index_page' },
            { text: '页脚', link: '/vitepress/2_page/5_footer' },
            { text: '搜索', link: '/vitepress/2_page/6_search' },
            { text: '社交链接', link: '/vitepress/2_page/7_social_links' },
        ],
    },
    {
        text: '主题配置',
        items: [
            { text: '主题配置', link: '/vitepress/3_config/1_theme_config' },
            { text: '自定义CSS', link: '/vitepress/3_config/2_custom_css' },
        ],
    },
    {
        text: '编写',
        items: [
            { text: '徽标', link: '/vitepress/4_edit/1_badge' },
            { text: '自定义容器', link: '/vitepress/4_edit/2_containers' },
            { text: '代码块', link: '/vitepress/4_edit/3_code_light' },
            { text: '代码组', link: '/vitepress/4_edit/4_code_group' },
            { text: '代码错误与警告', link: '/vitepress/4_edit/5_code_errs' },
            { text: '代码块颜色差异', link: '/vitepress/4_edit/6_code_diffs' },
            { text: '代码块聚焦', link: '/vitepress/4_edit/7_code_focus' },
            { text: '代码开启行号', link: '/vitepress/4_edit/8_code_number' },
        ],
    },
]

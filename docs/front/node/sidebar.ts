import { DefaultTheme } from "vitepress";

export const nodeSideBar: DefaultTheme.SidebarItem[] = [
    {
        text: 'Node',
        items: [
            { text: 'npm', link: '/front/node/1_base/1_npm' },
            { text: 'path', link: '/front/node/1_base/2_path' },
            { text: 'fs', link: '/front/node/1_base/3_fs' },
        ]
    },
    {
        text: 'Express',
        items: [
            { text: '开始', link: '/front/node/2_express/1_begin' },
            { text: '请求', link: '/front/node/2_express/2_request' },
            { text: '响应', link: '/front/node/2_express/3_response' },
            { text: '路由', link: '/front/node/2_express/4_router' },
            { text: '文件', link: '/front/node/2_express/5_file' }
        ]
    },
    {
        text: 'Koa',
        items: [
            { text: '开始', link: '/front/node/4_koa/1_begin' },
            { text: '路由', link: '/front/node/4_koa/2_router' },
            { text: '请求', link: '/front/node/4_koa/3_request' },
            { text: '响应', link: '/front/node/4_koa/4_response' },
            { text: '错误', link: '/front/node/4_koa/5_errors' },
            { text: '文件', link: '/front/node/4_koa/6_file' },
            { text: '中间件', link: '/front/node/4_koa/7_middleware' },
        ]
    },
    {
        text: '实用工具',
        items: [
            { text: 'JWT', link: '/front/node/3_utility/1_jwt' },
            { text: 'Dotenv', link: '/front/node/3_utility/2_dotenv' },
            { text: 'Zod', link: '/front/node/3_utility/3_zod' },
        ]
    },
    {
        text: 'PM2',
        items: [
            { text: '开始', link: '/front/node/5_pm2/1_start' },
            { text: '状态', link: '/front/node/5_pm2/2_status' },
            { text: '重启策略', link: '/front/node/5_pm2/3_restart' },
            { text: '持久应用', link: '/front/node/5_pm2/4_rersistent' },
        ]
    }
]
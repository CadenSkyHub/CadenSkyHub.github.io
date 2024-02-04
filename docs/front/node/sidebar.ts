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
            { text: '文件', link: '/front/node/2_express/5_file' },
            { text: 'JWT', link: '/front/node/2_express/6_jwt' },
        ]
    },
    {
        text: 'new',
        items: [
            { text: '暂时预览', link: '/front/node/node' }
        ]
    }
]
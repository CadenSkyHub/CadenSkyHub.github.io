import { DefaultTheme } from 'vitepress'


export const toolSideBar: DefaultTheme.SidebarItem[] = [
    {
        text: "环境",
        items: [
            { text: 'FNM', link: "/tools/fnm/Fnm" },
            { text: 'WSL', link: "/tools/wsl/WSL" },
            { text: 'MiniConda', link: "/tools/MiniConda/MiniConda" },
        ],
        collapsed: true
    },
    {
        text: "Git",
        items: [
            { text: '基本使用', link: "/tools/git/1_basis" },
            { text: '远程仓库', link: "/tools/git/2_remote" },
            { text: '其他问题', link: "/tools/git/3_more" },
        ],
        collapsed: true
    },
    {
        text: "Docker",
        items: [
            { text: '开始', link: "/tools/docker/1_docker" },
            { text: '命令', link: "/tools/docker/2_commands" },
            { text: 'dockerfile', link: "/tools/docker/3_dockerfile" },
            { text: '镜像', link: "/tools/docker/4_images" },
        ],
        collapsed: true
    },
]
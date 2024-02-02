import { DefaultTheme } from "vitepress";

export const nodeSideBar:DefaultTheme.SidebarItem[] = [
    {
        text:'Node',
        items:[
            {text:'npm', link:'/front/node/1_base/1_npm'},
            {text:'path', link:'/front/node/1_base/2_path'},
            {text:'fs', link:'/front/node/1_base/3_fs'},
        ]
    },
    {
        text:'new',
        items:[
            {text:'暂时预览', link:'/front/node/node'}
        ]
    }
]
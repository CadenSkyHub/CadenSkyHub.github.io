import {DefaultTheme} from "vitepress";


const pythonSideBar: DefaultTheme.SidebarItem[] = [
    {
        text: '官方文档索引',
        items: [
            {text: '官方文档索引', link: '/front/Python/index'}
        ]
    },
    {
        text:'内置模块/部分笔记',
        items:[
            {text:'datetime', link: '/front/Python/1.datetime'},
            {text:'time', link: '/front/Python/2.time'},
            {text:'math', link: '/front/Python/3.math'},
            {text:'os', link: '/front/Python/4.os'},
            {text:'file', link: '/front/Python/5.file'},
            {text:'error', link: '/front/Python/6.error'},
            {text:'json', link: '/front/Python/7.json'},
            {text:'装饰器', link: '/front/Python/10.装饰器'},
        ]
    }
]


export default pythonSideBar
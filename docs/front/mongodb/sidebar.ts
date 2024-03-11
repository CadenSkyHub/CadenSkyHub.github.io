import { DefaultTheme } from "vitepress";

export const mongodbSideBar:DefaultTheme.SidebarItem[] = [
    {
        text:'Mongodb',
        collapsed:true,
        items:[
            {text:'安装', link:'/front/mongodb/1_install'},
            {text:'用户管理', link:'/front/mongodb/2_user_manage'},
            {text:'数据库管理', link:'/front/mongodb/3_database_manage'},
            {text:'集合管理', link:'/front/mongodb/4_collections_manage'},
            {text:'新增', link:'/front/mongodb/5_insert_document'},
            {text:'删除', link:'/front/mongodb/6_delete_document'},
            {text:'更新', link:'/front/mongodb/7_update_document'},
            {text:'查询', link:'/front/mongodb/8_find_document'},
            {text:'操作符', link:'/front/mongodb/9_operate_symbol'},
        ]
    },
    {
        text:'Mongodb Node'
    }
]
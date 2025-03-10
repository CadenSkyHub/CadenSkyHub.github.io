import {DefaultTheme} from "vitepress";

export const databaseSideBar: DefaultTheme.SidebarItem[] = [
    {
        text: 'Mongodb',
        items: [
            {text: '安装', link: '/front/database/Mongodb/1_install'},
            {text: '用户管理', link: '/front/database/Mongodb/2_user_manage'},
            {text: '数据库管理', link: '/front/database/Mongodb/3_database_manage'},
            {text: '集合管理', link: '/front/database/Mongodb/4_collections_manage'},
            {text: '新增', link: '/front/database/Mongodb/5_insert_document'},
            {text: '删除', link: '/front/database/Mongodb/6_delete_document'},
            {text: '更新', link: '/front/database/Mongodb/7_update_document'},
            {text: '查询', link: '/front/database/Mongodb/8_find_document'},
            {text: '操作符', link: '/front/database/Mongodb/9_operate_symbol'},
            {text: '嵌套文档', link: '/front/database/Mongodb/10_find_object'},
            {text: '嵌套数组', link: '/front/database/Mongodb/11_find_array'},
            {text: '聚合管道', link: '/front/database/Mongodb/12_aggregation'},
            {text: '聚合函数', link: '/front/database/Mongodb/13_aggregate_func'},
        ]
    },
    {
        text: 'Redis',
        items: [
            {text: '开始', link: '/front/database/redis/1_begin'},
            {text: '通用命令', link: '/front/database/redis/2_general'},
            {text: '字符串', link: '/front/database/redis/3_string'},
            {text: '哈希', link: '/front/database/redis/4_hash'},
            {text: '列表', link: '/front/database/redis/5_list'},
            {text: '集合', link: '/front/database/redis/6_set'},
            {text: '有序集合', link: '/front/database/redis/7_sortedSet'},
            {text: 'node-redis', link: '/front/database/redis/10_node-redis'},
        ]
    },
    {
        text:'Postgresql',
        link:'/front/database/postgres/postgresql'
    }
]
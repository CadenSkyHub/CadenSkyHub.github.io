import { DefaultTheme } from "vitepress";

export const javascriptSideBar: DefaultTheme.SidebarItem[] = [
    {
        text: '开始',
        items: [
            { text: '变量常量标识符', link: '/front/javascript/1_begin/1_var_const_ident' },
            { text: '数据类型', link: '/front/javascript/1_begin/2_data_type' },
            { text: '运算符', link: '/front/javascript/1_begin/3_operator' },
            { text: '分支语句', link: '/front/javascript/1_begin/4_branch' },
            { text: '循环语句', link: '/front/javascript/1_begin/5_loops' },
            { text: '对象', link: '/front/javascript/1_begin/6_object' },
            { text: '函数', link: '/front/javascript/1_begin/7_function' },
            { text: '严格模式', link: '/front/javascript/1_begin/8_strict_mode' },
            { text: '数组', link: '/front/javascript/1_begin/9_array' },
        ]
    },
    {
        text: '进阶',
        items: [
            { text: '类/面向对象', link: '/front/javascript/2_advanced/1_class' },
            { text: '原型链', link: '/front/javascript/2_advanced/2_prototype' },
            { text: '解构赋值', link: '/front/javascript/2_advanced/3_deconstruction' },
            { text: '序列化', link: '/front/javascript/2_advanced/4_serialization' },
            { text: 'Promise', link: '/front/javascript/2_advanced/5_promise' },
            { text: 'Async', link: '/front/javascript/2_advanced/6_async' },
            { text: 'ES模块化', link: '/front/javascript/2_advanced/7_module' },
            { text: 'commonJS模块化', link: '/front/javascript/2_advanced/8_common_module' },
        ],
        collapsed: true
    },
    {
        text: '内置方法',
        items: [
            { text: 'Math', link: '/front/javascript/3_methods/1_math' },
            { text: 'Date', link: '/front/javascript/3_methods/2_date' },
        ],
        collapsed: true
    },
    {
        text: 'DOM',
        items: [
            { text: '获取 DOM 对象', link: '/front/javascript/4_dom/1_get_element' },
            { text: '操作元素内容', link: '/front/javascript/4_dom/2_element_substance' },
            { text: '操作元素属性', link: '/front/javascript/4_dom/3_element_attribute' },
            { text: '定时器', link: '/front/javascript/4_dom/4_timer' },
            { text: '事件监听', link: '/front/javascript/4_dom/5_event_listener' },
            { text: '节点操作', link: '/front/javascript/4_dom/6_dom_node' },
        ],
        collapsed: true
    },
    {
        text: 'BOM',
        items: [
            { text: 'Location', link: '/front/javascript/5_bom/1_location' },
            { text: 'Navigator', link: '/front/javascript/5_bom/2_navigator_history' },
            { text: 'LocalStorage', link: '/front/javascript/5_bom/3_local_storage' },
        ],
        collapsed: true
    }
]
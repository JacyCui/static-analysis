module.exports = {
    title: '静态分析', // 网站标题
    description: '基于南京大学软件分析课程的静态分析基础教程', // 网站描述

    // 插入html头
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],

    // 插件
    plugins: [
        ['@maginapp/vuepress-plugin-katex', { // katex公式
          delimiters: 'dollars'
        }],

        ['vuepress-plugin-container', {
            type: 'definition',
            before: info => `<div class="definition"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['vuepress-plugin-container', {
            type: 'conclusion',
            before: info => `<div class="conclusion"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['@vuepress/back-to-top']
    ],
    
    markdown: { // markdown渲染设置
        lineNumbers: true
    },
    locales: {  // 网站语言设置
        '/': {
            lang: 'zh-CN',
            // title: 'VuePress',
            // description: 'Vue-powered Static Site Generator'
        }
    },
    themeConfig: { // 主题设置
        // 关于导航栏
        logo: '/favicon.png', // 导航栏logo
        navbar: true, // 启用导航栏
        nav: [ // 导航栏内容设置
            {
                text: '目录',
                items: [
                    {text: '1 静态分析概述', link: '/01-intro/'},
                    {text: '2 程序的中间表示', link: '/02-ir/'},
                    {text: '3 数据流分析-应用', link: '/03-dfa-ap/'},
                    {text: '4 数据流分析-基础', link: '/04-dfa-fd/'},
                    {text: '5 过程间分析', link: '/05-inter/'},
                    {text: '6 指针分析-引入', link: '/06-pta-intro/'},
                    {text: '7 指针分析-基础', link: '/07-pta-fd/'},
                ]
            },
            { text: '个人博客', link: 'https://blog.cuijiacai.com' },
            // { text: 'Demo', link: '/demo/' },
            // { text: 'lalala', link: '/lalala/' },
            // { text: 'External', link: 'https://google.com' },
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //       { text: 'Chinese', link: '/language/chinese/' },
            //       { text: 'Japanese', link: '/language/japanese/' }
            //     ]
            // }
        ],
        repo: 'JacyCui/static-analysis', // 文档项目的github仓库

        // 关于侧边栏
        displayAllHeaders: false, // 显示所有页面的标题链接，否则只显示当前页面的
        activeHeaderLinks: false, // 活动的标题链接
        sidebarDepth: 3, // 
        sidebar: [
            '/01-intro/',
            '/02-ir/',
            '/03-dfa-ap/',
            '/04-dfa-fd/',
            '/05-inter/',
            '/06-pta-intro/',
            '/07-pta-fd/'
            // ['/demo', 'Explicit link text'], // 显示地指定文字
        ],

        // 关于页脚
        nextLinks: true, // 下一篇
        prevLinks: true, // 上一篇
        lastUpdated: '最后更新', // string | boolean 最后更新时间
        repoLabel: '查看源码',
        // docsRepo: 'vuejs/vuepress', // 文档仓库，默认为项目仓库
        docsDir: 'docs', // 文档目录
        docsBranch: 'main', // 文档分支
        editLinks: true,
        editLinkText: '帮助我改善此页面！',

        smoothScroll: true, // 页面滚动 
    }
}


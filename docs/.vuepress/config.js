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

        ['vuepress-plugin-container', {
            type: 'algorithm',
            before: info => `<div class="algorithm"><p class="title">${info}</p>`,
            after: '</div>',
        }],

        ['@vuepress/back-to-top'],

        ['vuepress-plugin-mygitalk', {
            // 是否启用(关闭请设置为false)(default: true)
            enable: true,
            // 是否开启首页评论(default: true)
            home: false,
            // Gitalk配置
            gitalk: {
                // GitHub Application Client ID.
                clientID: 'd82b318c0c7bcc30fc72',
                // GitHub Application Client Secret.
                clientSecret: 'c1d713026e3dc925bf0afa184fc2339ce730c3ca',
                // GitHub repository. 存储评论的 repo
                repo: 'static-analysis',
                // GitHub repository 所有者，可以是个人或者组织。
                owner: 'JacyCui',
                // 设置语言(default: zh-CN)
                language: 'zh-CN',
            }
        }]
    ],
    
    markdown: { // markdown渲染设置
        lineNumbers: true
    },
    locales: {  // 网站语言设置
        '/': {
            lang: 'zh-CN'
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
                    {
                        text: '第一部分：程序的表示',
                        items: [
                            {text: '1 静态分析概述', link: '/01-intro/'},
                            {text: '2 程序的中间表示', link: '/02-ir/'}
                        ]
                    },
                    {
                        text: '第二部分：数据流分析及其应用',
                        items: [
                            {text: '3 数据流分析-应用', link: '/03-dfa-ap/'},
                            {text: '4 数据流分析-基础', link: '/04-dfa-fd/'},
                            {text: '5 过程间分析', link: '/05-inter/'}
                        ]
                    },
                    {
                        text: '第三部分：指针分析及其应用',
                        items: [
                            {text: '6 指针分析-引入', link: '/06-pta-intro/'},
                            {text: '7 指针分析-基础', link: '/07-pta-fd/'},
                            {text: '8 指针分析-上下文敏感', link: '/08-pta-cs/'},
                            {text: '9 静态分析与安全', link: '/09-security/'},
                            {text: '10 基于Datalog的程序分析', link: '/10-datalog/'}
                        ]
                    },
                    {
                        text: '第四部分：技术拓展',
                        items: [
                            {text: '11 CFL可达与IFDS', link: '/11-ifds/'},
                            {text: '12 完整性与近似完整性', link: '/12-soundiness/'}
                        ]
                    }                    
                ]
            },
            { text: '配套实验', link: 'https://tai-e.pascal-lab.net/'}
        ],
        repo: 'JacyCui/static-analysis', // 文档项目的github仓库

        // 关于侧边栏
        displayAllHeaders: false, // 显示所有页面的标题链接，否则只显示当前页面的
        activeHeaderLinks: false, // 活动的标题链接
        sidebarDepth: 3, // 
        sidebar: [
            '/preface/',
            {
                title: '第一部分：程序的表示',   
                // path: '/01-intro/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/01-intro/',
                    '/02-ir/'
                ]
            },
            {
                title: '第二部分：数据流分析及其应用',   
                // path: '/03-dfa-ap/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/03-dfa-ap/',
                    '/04-dfa-fd/',
                    '/05-inter/'
                ]
            },
            {
                title: '第三部分：指针分析及其应用',   
                // path: '/06-pta-intro/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/06-pta-intro/',
                    '/07-pta-fd/',
                    '/08-pta-cs/',
                    '/09-security/',
                    '/10-datalog/'
                ]
            },
            {
                title: '第四部分：技术拓展',   
                // path: '/11-ifds/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/11-ifds/',
                    '/12-soundiness/'
                ]
            }
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

        smoothScroll: true // 页面滚动 
    }
}


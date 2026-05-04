import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FuZhouPlan Wiki",
  base: '/FuZhouPlan_Wiki/',
  description: "FuZhouPlan_Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '设定', link: '/settings/' ,activeMatch: '/settings/'},
      { text: '游戏性内容', link: '/gaming/index' }
    ],

    sidebar: {
      '/settings/': [
        {
          items: [
            { text: '事件起因', link: '/settings/beginning'},
            { 
              text: '组织/势力', 
              items: [
                { text: '全域框架执法公司', link: '/settings/organization/TFE' },
              ]
            },
          ]
        }
      ],
      'gaming': [
        {
          text: '游戏性内容',
          link: '/gaming/',
          items: [

          ]
        }
      ]
    },

socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/cenmix/FuZhouPlan' 
      },
    ]
  }
})

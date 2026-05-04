import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FuZhouPlan Wiki",
  description: "FuZhouPlan_Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '设定', link: '/settings/' },
      { text: '游戏性内容', link: '/gaming/index' }
    ],

    sidebar: {
      '/settings/': [
        {
          text: '设定',
          link: '/settings/',
          items: [
            { text: '事件起因', link: '/settings/beginning'}
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

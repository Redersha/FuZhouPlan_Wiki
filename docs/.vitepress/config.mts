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
      { text: '游戏性内容', link: '/gaming/blocks/blue_berry_bush' ,activeMatch: '/gaming/'},
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换至浅色",
    darkModeSwitchTitle: "切换至深色",

    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",

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
      '/gaming/': [
        {
          text: '游戏性内容',
          items: [
            {
              text: '方块',
              items: [
                { text: '蓝浆果丛', link: '/gaming/blocks/blue_berry_bush' },
                { text: '发光蓝染料方块', link: '/gaming/blocks/glowing_blue_dye' },
                { text: '绿浆果丛', link: '/gaming/blocks/green_berry_bush' },
              ]
            },
            {
              text: '物品', 
              items: [
                { text: '氨水瓶', link: '/gaming/items/ammonia_bottle' },
                { text: '蓝浆果', link: '/gaming/items/blue_berry' },
                { text: '蒸馏水', link: '/gaming/items/distilled_water' },
                { text: '乙二胺', link: '/gaming/items/ethylenediamine' },
                { text: '发光蓝染料', link: '/gaming/items/glowing_blue_dye' },
                { text: '发光蓝染料桶', link: '/gaming/items/glowing_blue_dye_bucket' },
                { text: '绿浆果', link: '/gaming/items/green_berry' },
                { text: '铁罐', link: '/gaming/items/iron_can' },
                { text: '生物麻醉剂', link: '/gaming/items/item.fuzhouplan.bio_anesthetic' },
                { text: '石灰粉', link: '/gaming/items/lime_powder' },
                { text: '无核酸水', link: '/gaming/items/nuclease_free_water' },
                { text: '针管', link: '/gaming/items/syringe' },
                { text: 'Tris 糊糊', link: '/gaming/items/tris_paste' },
                { text: '醋瓶', link: '/gaming/items/vinegar_bottle' },
              ]
            }
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

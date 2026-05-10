import { defineConfig } from 'vitepress'
import { mermaidMarkdown } from './theme/plugins/mermaidMarkdown'

export default defineConfig({
  title: "FuZhouPlan Wiki",
  base: '/FuZhouPlan_Wiki/',
  description: "FuZhouPlan_Wiki",
  markdown: {
    config: (md) => {
      mermaidMarkdown(md)
    }
  },
  themeConfig: {
    footer: {
      // 信息栏（支持 HTML）
      message: '本文档采用 MIT License 许可协议。',
      // 版权栏（支持 HTML）
      copyright: 'Copyright © 2026-至今 <strong>Redersha</strong>'
    },
    outline: {
      level: [2, 4], // 显示 h2 到 h4 标题
      label: '本页目录' // 可选：自定义标题文字
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '设定', link: '/settings/', activeMatch: '/settings/' },
      { text: '游戏性内容', link: '/gaming/', activeMatch: '/gaming/' },
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
    
    // 修改侧边栏配置，添加 collapsed 属性
    sidebar: {
      '/settings/': [
        {
          text: '设定',
          items: [
            { 
              text: '组织/势力',
              collapsed: true,  // 设为 true 表示默认折叠
              items: [
                { text: '全域框架执法公司', link: '/settings/organization/TFE' },
              ]
            },
            { text: '社会背景',
              collapsed: true,
              items: [
                { text: '基于蒸汽生活的人们', link: '/settings/societies/steam_based_life_people' },
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
              collapsed: true,  // 设为 true 表示默认折叠
              items: [
                { 
                  text: '功能方块',
                  collapsed: true,
                  items: [
                    {
                      text: '工业',
                      collapsed: true,
                      items: [
                        { text: '烘干机', link: '/gaming/blocks/functional_blocks/industry/dryer' },
                        { text: '发酵桶', link: '/gaming/blocks/functional_blocks/industry/fermentation_barrel' },
                        { text: '无限发电机', link: '/gaming/blocks/functional_blocks/industry/infinite_generator' },
                        { text: '分子蒸馏塔', link: '/gaming/blocks/functional_blocks/industry/molecular_distillation_tower' },
                        { text: '精密搅拌器', link: '/gaming/blocks/functional_blocks/industry/precision_stirrer' },
                        { text: '解析机', link: '/gaming/blocks/functional_blocks/industry/resolver' },
                      ]
                    },
                  ]
                },
              ]
            },
            { 
              text: '物品',
              collapsed: true,  // 设为 true 表示默认折叠
              items: [
                { text: '氨水瓶', link: '/gaming/items/ammonia_bottle' },
                { text: '生物麻醉剂', link: '/gaming/items/bio_anesthetic' },
                { text: '蓝浆果', link: '/gaming/items/blue_berry' },
                { text: '蒸馏水', link: '/gaming/items/distilled_water' },
                { text: '乙二胺', link: '/gaming/items/ethylenediamine' },
                { text: '发光蓝染料', link: '/gaming/items/glowing_blue_dye' },
                { text: '发光蓝染料桶', link: '/gaming/items/glowing_blue_dye_bucket' },
                { text: '绿浆果', link: '/gaming/items/green_berry' },
                { text: '铁罐', link: '/gaming/items/iron_can' },
                { text: '石灰粉', link: '/gaming/items/lime_powder' },
                { text: '无核酸水', link: '/gaming/items/nuclease_free_water' },
                { text: '针管', link: '/gaming/items/syringe' },
                { text: 'Tris 糊糊', link: '/gaming/items/tris_paste' },
                { text: '醋瓶', link: '/gaming/items/vinegar_bottle' },
              ]
            },
            { 
              text: '工业产线',
              collapsed: true,  // 设为 true 表示默认折叠
              items: [
                { text: '光刻产线 - 晶圆与芯片', link: 'gaming/production_lines/photolithography'}
              ]
            },
          ]
        }
      ],
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cenmix/FuZhouPlan' },  // 添加了 GitHub 链接
    ],
  }
})

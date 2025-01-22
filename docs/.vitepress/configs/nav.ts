import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '前端导航', link: '/nav/' },
  { 
    text: '个人项目',
    items: [
      { text: 'vue-admin-template', link: 'https://github.com/zzyss-marker/vue-admin-template' },
      { text: 'vue3-components', link: 'https://github.com/zzyss-marker/vue3-components' }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/zzyss-marker' }
]

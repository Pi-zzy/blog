import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '前端导航', link: '/nav/' },
  { 
    text: '学习笔记',
    items: [
      { text: 'Vue 系列', link: '/notes/vue/' },
      { text: 'TypeScript 系列', link: '/notes/typescript/' },
      { text: '性能优化', link: '/notes/performance/' },
      { text: '工程化实践', link: '/notes/engineering/' }
    ]
  }
]

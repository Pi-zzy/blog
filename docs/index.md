---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Marker's
  text: 前端导航
  tagline: 分享前端资源与个人项目
  image:
    src: /logo.png
    alt: Marker
  actions:
    - text: 个人主页
      link: https://github.com/zzyss-marker
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: 开源项目
      link: https://github.com/zzyss-marker?tab=repositories
      theme: alt

features:
  - icon: 📚
    title: 前端资源
    details: 精选实用的前端开发资源<br />包含各类框架文档、工具与教程
    
  - icon: 🛠️
    title: 开源项目
    details: 开源的个人项目展示<br />包含实用工具、组件库等

  - icon: 🎨
    title: 设计资源
    details: 优质的设计资源与灵感<br />帮助打造精美的用户界面
---
<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>

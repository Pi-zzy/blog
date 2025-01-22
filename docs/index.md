---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Pixiuの
  text: 博客
  tagline: 基于 VitePress 的个人前端导航页面模板
  image:
    src: /logo.png
    alt: Z&Y
  actions:
    - text: 茂茂物语
      link: https://notes.fe-mm.com
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: mmPlayer
      link: https://netease-music.fe-mm.com
    - text: 测试页
      link: /test
      theme: alt
features:
  - icon: 🐱

    title: 猫咪日记

    details: 记录与猫咪相处的点点滴滴<br />分享养猫经验和有趣故事

  - icon: 📚

    title: 阅读笔记

    details: 书籍阅读心得<br />分享阅读过程中的思考与感悟

  - icon: 🌏

    title: 旅行足迹

    details: 记录旅行中的见闻<br />分享不同地方的文化与风景
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

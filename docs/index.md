---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 貔貅的
  text: 前端小站
  tagline: 记录学习与成长的点点滴滴
  image:
    src: /logo.png
    alt: Pixiu
  actions:
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: 学习笔记
      link: /notes/
      theme: alt

features:
  - icon: 📝
    title: 学习笔记
    details: 记录前端学习过程中的心得体会<br />分享技术积累与实践经验
    
  - icon: 🧭
    title: 资源导航
    details: 精选实用的前端开发资源<br />包含各类框架文档与工具

  - icon: 📚
    title: 知识积累
    details: 体系化的知识整理<br />构建自己的前端知识库
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

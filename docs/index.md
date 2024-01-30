---
layout: home

hero:
  name: < ~/ > & MyNote
  text: 我的学习笔记站点.
  tagline: 忘 了 初 心，也 能 始 终 吧...
  image:
    src: /logo.png
    alt: MyNote
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/CadenSkyHub
    - theme: alt
      text: VitePress
      link: /vitepress/1_begin/1_begin

features:
  - icon: 🙃
    title: 生活，五味杂陈
    details: 生活五味杂陈，酸甜苦辣咸，感受丰富多彩，经历锻炼成长，珍惜每一刻，领悟人生真谛...
  - icon: 😉
    title: 感情，还算满意
    details: 情深意浓，相互陪伴，共同成长，温馨幸福，珍惜缘分，未来可期...
  - icon: 🤔
    title: 人生，千奇百怪
    details: 充满挑战与惊喜，跌宕起伏，体验多彩，奋发向前，创造精彩...
  - icon: 😶
    title: 苦难，不可歌颂
    details: 苦难，不可歌颂，但教人成长。磨砺坚韧，铸就坚强，勇往直前，克服困境...
  - icon: 🙂
    title: 姿态，永远摆正
    details: 姿态，永远摆正，不论风雨晴天。自信从容，积极向前，做最好的自己，永不妥协...
  - icon: 🤭
    title: 心态，永远年轻
    details: 心态，永远年轻，保持好奇，充满激情，勇敢追梦，拥抱未来，活出生命的活力...
---


<script setup>
  import { onMounted } from 'vue'
  onMounted(()=>{
    const tagLine = document.querySelector('.tagline')
    setInterval(()=>{
        const date = new Date()
        tagLine.innerText = date.toLocaleString().replaceAll('/', '-')
    },1000)
  })
</script>
<!-- SEO: Hide this image anchor from output -->

<p align="center">
  <img src="./docs/cover.png" alt="二十四时 · 龙鳞长卷" width="100%">
</p>

<h1 align="center">
  二十四时 · 龙鳞长卷
  <br>
  <sub>The Infinite Scroll of Chinese Seasonal Time</sub>
</h1>

<p align="center">
  <em>An Interactive Cultural Narrative System that transforms the 24 Solar Terms into a spatial scroll experience.</em>
</p>

<p align="center">
  <a href="https://7u33ds5fo7clw.ok.kimi.link" target="_blank"><strong>🔮 在线体验 Live Demo</strong></a>
  <br><br>
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite">
  <img alt="GSAP" src="https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?logo=greensock">
  <img alt="Tailwind" src="https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss">
</p>

------

## 🧭 Overview

> **A spatialized web interface that transforms the Chinese 24 Solar Terms into a continuous, scrollable manuscript of time, inspired by traditional Dragon Scale Binding.**

传统节气被"信息化展示"，但缺少**体验性**。

本项目将二十四节气的线性知识转译为**空间化的身体交互体验**：用户通过滚动穿越一整年的时光，如同展开一卷会呼吸的古书——每一片龙鳞装帧的书页都承载着一个节气的物候、色彩与诗意。

------

## 📌 Problem Statement

Traditional cultural knowledge systems are often presented as static, fragmented, and non-interactive digital content, which limits emotional engagement and experiential understanding.

> 传统文化被"信息化展示"，但缺少"体验性"。
> 节气是时间的节律，却被扁平化为一组静止的日期和词条。

------

## 🎯 Design Goal

> **To reconstruct seasonal time as an embodied experience through spatial interaction, motion, and generative visual systems.**

将线性阅读转化为**具身体验（Embodied Experience）**，通过空间交互、动态视觉与生成式像素流，让用户**穿越时间**而非仅仅**阅读时间**。

------

## 🐉 Concept System — 三层概念结构

### ① Structural Layer — 结构层：龙鳞装

借鉴唐代 **"龙鳞装"（Dragon Scale Binding）** 书籍装帧的物理形态——展开时如游龙，卷起时如旋风。每张节气卡片以 **3D 层叠错落** 的方式排布，形成鳞次栉比的视觉纵深。

| 设计元素 | 实现方式                                       |
| -------- | ---------------------------------------------- |
| 无限长卷 | GSAP ScrollTrigger 横向滚动画布                |
| 鳞片错落 | `preserve-3d` + `rotateY` + `rotateX` 层叠效果 |
| 物理反馈 | Scroll 速度映射卡片缩放与模糊                  |
| 卷轴张力 | 卡片间距从宽到窄的呼吸节奏                     |

### ② Temporal Layer — 时间层：四时流变

以 **24 个节气** 为时间锚点，串联从立春到大寒的完整四季轮回。

| 季节 | 主色调        | 背景意象 |
| ---- | ------------- | -------- |
| 春   | 桃夭 / 黄白游 | 烟雨桃花 |
| 夏   | 赩炽 / 碧落   | 映日荷花 |
| 秋   | 窃蓝 / 秋香   | 层林尽染 |
| 冬   | 暮山紫 / 月白 | 寒梅傲雪 |

### ③ Sensory Layer — 感知层：像素呼吸

全屏水墨背景随季节流转实时切换，Canvas 噪点纹理覆盖宣纸质感，CSS 粒子漂浮营造季节氛围。

------

## 🎮 Interaction Design

```
├── 纵向滚动 → 驱动横向长卷展开
├── 卡片层叠 → 3D 龙鳞错位 + 渐入渐出
├── 悬停反馈 → 轻微放大 + 色彩光晕
├── 点击展开 → 全屏沉浸详情页
├── 速度响应 → 快速滚动时卡片倾斜 + 动态模糊
└── 呼吸动画 → 停留时粒子缓慢漂浮
```

------

## 🎨 Visual Language

> The visual system merges traditional Chinese seasonal aesthetics with generative computational graphics.

| 系统         | 实现                                                         |
| ------------ | ------------------------------------------------------------ |
| **传统色谱** | 24 节气 × 4 色 = 96 种中国色（源自《中国传统色》）           |
| **水墨岩彩** | AI 生成四季主视觉 + 矿物颜料质感纹理                         |
| **宣纸噪点** | Canvas 实时噪点覆盖层，模拟古籍翻阅                          |
| **像素流**   | 节气切换时 RGB 色差分离 + 动态晕染                           |
| **字体排印** | 霞鹜文楷（正文）+ 马善政毛笔楷（标题）+ 思源宋体（装饰）     |
| **深度层级** | 远景山水（0.2x）/ 中景意象（0.5x）/ 前景卡片（1x）/ 超前景粒子（1.5x） |

------

## 🔥 Key Innovation

> **This project redefines cultural information as spatial interaction, transforming linear reading into embodied temporal navigation.**

Instead of reading time, users **physically traverse time** through scroll-based interaction.

不是"看节气"，而是**"穿越时间"**。

------

## 🧠 24 节气情绪句（Emotion Layer）

每个节气配一句现代情绪文案，作为传播锚点与情感记忆：

| 节气 | 情绪句                   |
| ---- | ------------------------ |
| 立春 | 万物刚刚决定开始。       |
| 雨水 | 世界开始变得柔软。       |
| 惊蛰 | 一声雷，万物醒。         |
| 春分 | 白天与黑夜，达成和解。   |
| 清明 | 思念和春天，一起落下。   |
| 谷雨 | 这是春天最后的温柔。     |
| 立夏 | 万物开始用力生长。       |
| 小满 | 刚刚好，还没溢出来。     |
| 芒种 | 忙，是这个季节的名字。   |
| 夏至 | 光走到了最远的地方。     |
| 小暑 | 热，刚刚开始。           |
| 大暑 | 世界只剩下呼吸。         |
| 立秋 | 风开始有形状。           |
| 处暑 | 热悄悄退场。             |
| 白露 | 空气开始变得透明。       |
| 秋分 | 一半是收获，一半是告别。 |
| 寒露 | 冷意开始落地。           |
| 霜降 | 时间开始有重量。         |
| 立冬 | 世界慢慢收起声音。       |
| 小雪 | 轻轻地，世界白了一点。   |
| 大雪 | 一切被覆盖，也被保护。   |
| 冬至 | 黑夜走到尽头。           |
| 小寒 | 冷到最清醒。             |
| 大寒 | 一切归于安静，等待重启。 |

------

## 🧪 Tech Stack

| 层级     | 技术                                                  |
| -------- | ----------------------------------------------------- |
| 框架     | React 18 + TypeScript                                 |
| 构建     | Vite 5                                                |
| 样式     | Tailwind CSS 3                                        |
| 动效引擎 | GSAP + ScrollTrigger                                  |
| 平滑滚动 | 原生滚动劫持 → 横向映射                               |
| 3D 变换  | CSS `transform-style: preserve-3d`                    |
| 字体     | `@chinese-fonts/lxgwwenkai` / `@chinese-fonts/ysyrxk` |
| 噪点层   | HTML5 Canvas 实时噪点纹理                             |
| 部署     | 静态站点（CDN）                                       |

------

## 🚀 Quick Start

```bash
# 克隆仓库
git clone https://github.com/yourname/dragon-scale-solar-terms.git
cd dragon-scale-solar-terms

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

------

## 📐 Project Structure

```
src/
├── components/
│   ├── GrainOverlay.tsx       # Canvas 宣纸噪点覆盖层
│   └── SolarTermDetail.tsx    # 节气详情弹窗（已内联）
├── sections/
│   ├── IntroSection.tsx       # 序章：节气歌 + 四季入口
│   └── ScrollSection.tsx     # 主卷轴：24节气横向滚动
├── data/
│   └── solarTerms.ts         # 24节气完整数据（色彩/诗句/物候/情绪句）
├── hooks/
│   └── useScrollProgress.ts  # 滚动进度计算
├── App.tsx                   # 主入口：字体加载 + 滚动编排
└── index.css                 # 全局样式 + 中文字体 + 动画关键帧

public/
└── images/
    ├── spring-hero.jpg       # 春 · 烟雨桃花
    ├── summer-hero.jpg     # 夏 · 映日荷花
    ├── autumn-hero.jpg     # 秋 · 层林尽染
    └── winter-hero.jpg     # 冬 · 寒梅傲雪
```

------

## 📎 Reference & Inspiration

| 来源                 | 贡献                         |
| -------------------- | ---------------------------- |
| **Flipbook.page**    | 无限像素流交互范式           |
| **唐代龙鳞装**       | 书籍装帧层叠结构灵感         |
| **《中国传统色》**   | 384 种传统色谱考据           |
| **节气歌 / 全唐诗**  | 24 首节气对应诗句            |
| **ChatGPT 方案优化** | 情绪句体系 + A+ 项目叙事结构 |

------

## 📝 License

[MIT](./LICENSE)

------

<p align="center">
  <sub>四时流转，周而复始。</sub>
  <br>
  <sub>春 · 夏 · 秋 · 冬 — 一年好景君须记</sub>
</p>


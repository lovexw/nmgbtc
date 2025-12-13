# 蒙链 (Mengchain) - 内蒙古区块链社群官网

![蒙链](https://img.shields.io/badge/蒙链-Mengchain-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 项目简介

蒙链（Mengchain）是立足于内蒙古自治区的区块链技术社群。本官网致力于作为对外展示窗口，分享区块链技术知识，推动零知识证明、食品安全溯源等技术在内蒙古的应用与发展。

## 网站特点

- ✨ **简洁设计**: 专注于信息展示与技术分享
- 📱 **响应式布局**: 适配移动端与桌面端
- 🚀 **高性能**: 纯静态页面，快速加载
- 🛡️ **隐私友好**: 无需注册登录，本地化表单处理（邮件客户端）

## 网站结构

```
蒙链官网/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── script.js       # 交互脚本
└── README.md           # 项目说明
```

## 页面板块

1. **首页** - 社群愿景与核心口号
2. **关于我们** - 社群简介与主要关注方向
3. **社区动态** - 精选技术文章（区块链演进、零知识证明、食品安全溯源）
4. **联系我们** - 简单直接的邮件联系方式

## 部署

本项目为纯静态网站，可部署于任何静态托管服务。

### Cloudflare Pages

1. 连接 Git 仓库
2. 构建命令：无
3. 输出目录：`/` (根目录)

## 维护指南

### 更新文章

在 `index.html` 的 `#articles` 区域添加新的 `article` 卡片：

```html
<article class="value-card">
    <div class="value-icon"><i class="fas fa-newspaper"></i></div>
    <h3>文章标题</h3>
    <p class="article-date"><i class="far fa-calendar-alt"></i> 2024年X月X日</p>
    <p>文章摘要...</p>
</article>
```

### 修改联系邮箱

在 `index.html` 和 `js/script.js` 中搜索 `xw@nmgbtc.com` 并替换为新的邮箱地址。

## 协议

MIT License

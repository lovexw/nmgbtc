# 📁 项目文件说明

本文档详细说明每个文件的作用和用途。

## 📄 核心文件

### index.html
**作用**: 网站主页面  
**大小**: 643 行  
**说明**: 包含所有网站内容和结构，采用单页面应用设计，包含7个主要板块。

### css/style.css
**作用**: 全局样式表  
**大小**: 1105 行  
**说明**: 包含所有样式、布局、响应式设计和动画效果。使用 CSS Grid、Flexbox 和 CSS 变量。

### js/script.js
**作用**: 交互脚本  
**大小**: 396 行  
**说明**: 实现导航、动画、表单、计数器等所有交互功能。使用原生 JavaScript ES6+。

## 📋 配置文件

### manifest.json
**作用**: PWA 配置文件  
**说明**: 定义应用名称、图标、主题色等，支持将网站添加到主屏幕。

### package.json
**作用**: 项目配置文件  
**说明**: 包含项目元数据、脚本命令、关键词等信息。

### .gitignore
**作用**: Git 忽略规则  
**说明**: 定义不需要提交到版本控制的文件和目录。

### _headers
**作用**: HTTP 头部配置（Cloudflare Pages）  
**说明**: 配置安全头部、缓存策略等。

## 🔍 SEO 文件

### sitemap.xml
**作用**: 网站地图  
**说明**: 帮助搜索引擎索引网站页面，列出所有重要 URL。

### robots.txt
**作用**: 搜索引擎爬虫配置  
**说明**: 告诉搜索引擎哪些页面可以抓取。

## 📖 文档文件

### README.md
**作用**: 项目说明文档  
**内容**: 
- 项目简介
- 功能特性
- 技术栈
- 快速开始
- 部署方法

### QUICKSTART.md
**作用**: 快速开始指南  
**内容**:
- 本地预览方法
- Cloudflare Pages 部署步骤
- 内容自定义指南
- 常见问题解答

### DEPLOY.md
**作用**: 详细部署指南  
**内容**:
- Cloudflare Pages 部署
- GitHub Pages 部署
- Vercel 部署
- Netlify 部署
- 自定义域名配置

### TECHNICAL.md
**作用**: 技术文档  
**内容**:
- 技术架构
- 代码规范
- 性能优化
- 浏览器兼容性
- 故障排除

### CONTRIBUTING.md
**作用**: 贡献指南  
**内容**:
- 如何报告问题
- 如何提交代码
- 代码规范
- 提交规范
- 审核流程

### CHANGELOG.md
**作用**: 更新日志  
**内容**:
- 版本历史
- 功能更新
- Bug 修复
- 未来规划

### PROJECT_SUMMARY.md
**作用**: 项目总结  
**内容**:
- 项目概述
- 核心特性
- 技术指标
- 交付内容
- 项目成果

### LICENSE
**作用**: 开源协议  
**类型**: MIT License  
**说明**: 允许自由使用、修改和分发。

## 📊 文件统计

```
总文件数: 17
HTML 文件: 1
CSS 文件: 1
JS 文件: 1
配置文件: 4
文档文件: 8
其他文件: 2

总代码行数: 2144+
- HTML: 643 行
- CSS: 1105 行
- JavaScript: 396 行
```

## 🗂️ 目录结构

```
mengchain-website/
├── 📄 核心文件
│   ├── index.html                 # 主页面
│   ├── css/
│   │   └── style.css             # 样式表
│   └── js/
│       └── script.js             # 脚本
│
├── ⚙️ 配置文件
│   ├── manifest.json             # PWA 配置
│   ├── package.json              # 项目配置
│   ├── .gitignore                # Git 忽略
│   └── _headers                  # HTTP 头部
│
├── 🔍 SEO 文件
│   ├── sitemap.xml               # 站点地图
│   └── robots.txt                # 爬虫规则
│
└── 📖 文档文件
    ├── README.md                 # 项目说明
    ├── QUICKSTART.md             # 快速开始
    ├── DEPLOY.md                 # 部署指南
    ├── TECHNICAL.md              # 技术文档
    ├── CONTRIBUTING.md           # 贡献指南
    ├── CHANGELOG.md              # 更新日志
    ├── PROJECT_SUMMARY.md        # 项目总结
    ├── FILES_OVERVIEW.md         # 文件说明（本文件）
    └── LICENSE                   # 开源协议
```

## 🎯 文件用途分类

### 🚀 部署必需文件
- ✅ index.html
- ✅ css/style.css
- ✅ js/script.js
- ✅ manifest.json
- ⚠️ sitemap.xml (SEO 优化推荐)
- ⚠️ robots.txt (SEO 优化推荐)
- ⚠️ _headers (Cloudflare Pages 优化推荐)

### 📚 文档文件（可选）
- README.md
- QUICKSTART.md
- DEPLOY.md
- TECHNICAL.md
- CONTRIBUTING.md
- CHANGELOG.md
- PROJECT_SUMMARY.md
- FILES_OVERVIEW.md
- LICENSE

### ⚙️ 开发辅助文件
- package.json
- .gitignore

## 🔄 文件依赖关系

```
index.html
├── 依赖 → css/style.css
├── 依赖 → js/script.js
├── 依赖 → manifest.json
└── 外部依赖 → Font Awesome CDN

css/style.css
└── 被依赖 ← index.html

js/script.js
└── 被依赖 ← index.html

manifest.json
└── 被依赖 ← index.html
```

## 📝 修改指南

### 修改网站内容
**文件**: index.html  
**建议**: 直接编辑 HTML 内容

### 修改样式设计
**文件**: css/style.css  
**建议**: 先修改 CSS 变量，再调整具体样式

### 添加交互功能
**文件**: js/script.js  
**建议**: 在文件末尾添加新功能模块

### 更新项目信息
**文件**: package.json, README.md  
**建议**: 同步更新版本号和说明

### 修改 SEO 信息
**文件**: index.html (meta 标签), sitemap.xml  
**建议**: 更新 meta 标签和站点地图

## 🗑️ 可删除文件

如果您想精简项目，以下文档文件可以删除（不影响网站功能）：

- QUICKSTART.md
- TECHNICAL.md
- CONTRIBUTING.md
- CHANGELOG.md
- PROJECT_SUMMARY.md
- FILES_OVERVIEW.md

**注意**: README.md 和 LICENSE 建议保留。

## 📦 最小部署包

如果只需要网站功能，最小部署包仅需：

```
mengchain-website/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

**大小**: < 100KB

## 🔐 重要文件备份

建议定期备份：

- ✅ index.html (所有内容)
- ✅ css/style.css (所有样式)
- ✅ js/script.js (所有功能)

## 📞 技术支持

如有关于文件的疑问：

- 📧 邮箱: tech@mengchain.org
- 💬 GitHub Issues

---

© 2024 蒙链 - 内蒙古区块链社群

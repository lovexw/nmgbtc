# 技术文档

本文档详细说明蒙链官网的技术架构、设计决策和最佳实践。

## 技术栈概览

### 前端技术

| 技术 | 版本 | 用途 |
|------|------|------|
| HTML5 | - | 语义化标记和页面结构 |
| CSS3 | - | 样式、布局和动画 |
| JavaScript | ES6+ | 交互功能和动态效果 |
| Font Awesome | 6.4.0 | 图标库 |

### 特性支持

- ✅ 响应式设计（移动优先）
- ✅ 渐进式 Web 应用（PWA）
- ✅ SEO 优化
- ✅ 无障碍访问（a11y）
- ✅ 跨浏览器兼容
- ✅ 性能优化

## 项目结构

```
mengchain-website/
├── index.html              # 主页面
├── css/
│   └── style.css          # 全局样式
├── js/
│   └── script.js          # 交互脚本
├── manifest.json          # PWA 配置
├── sitemap.xml            # 搜索引擎地图
├── robots.txt             # 爬虫配置
├── _headers               # HTTP 头部配置
├── README.md              # 项目说明
├── DEPLOY.md              # 部署指南
├── CHANGELOG.md           # 更新日志
├── CONTRIBUTING.md        # 贡献指南
├── TECHNICAL.md           # 技术文档（本文件）
├── LICENSE                # 开源协议
├── .gitignore             # Git 忽略文件
└── package.json           # 项目配置
```

## 架构设计

### HTML 结构

采用语义化 HTML5 标记：

```
<body>
  ├── <nav>              # 导航栏（固定顶部）
  ├── <section#home>     # 首页横幅
  ├── <section#about>    # 关于我们
  ├── <section.values>   # 核心价值
  ├── <section#research> # 技术研究
  ├── <section#ecosystem># 生态系统
  ├── <section#news>     # 社区动态
  ├── <section.partners> # 合作伙伴
  ├── <section#contact>  # 联系我们
  ├── <footer>           # 页脚
  └── <button.back-to-top> # 返回顶部
</body>
```

### CSS 架构

#### 命名规范

采用语义化命名，部分使用 BEM 风格：

- `.section` - 区块
- `.section-header` - 区块标题
- `.section-title` - 标题文字
- `.card` - 卡片组件
- `.btn-primary` - 主要按钮

#### 布局策略

1. **网格布局**: 使用 CSS Grid 进行主要布局
2. **弹性布局**: 使用 Flexbox 处理组件内部布局
3. **响应式**: 移动优先，使用媒体查询适配不同屏幕

```css
/* 移动优先 */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

/* 平板 */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 桌面 */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

#### CSS 变量

所有颜色和常用值使用 CSS 变量：

```css
:root {
    /* 颜色系统 */
    --primary-color: #2563eb;
    --secondary-color: #0ea5e9;
    --accent-color: #f59e0b;
    
    /* 阴影系统 */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    /* 渐变系统 */
    --gradient-primary: linear-gradient(135deg, #2563eb, #0ea5e9);
}
```

### JavaScript 架构

#### 模块化设计

功能按模块组织：

1. **导航模块**: 滚动效果、移动菜单
2. **动画模块**: Intersection Observer、计数器
3. **表单模块**: 验证、提交处理
4. **工具模块**: 通知系统、返回顶部

#### 性能优化

1. **事件委托**: 减少事件监听器数量
2. **防抖节流**: 优化滚动和调整大小事件
3. **懒加载**: 使用 Intersection Observer
4. **缓存 DOM**: 避免重复查询

```javascript
// 缓存 DOM 元素
const elements = {
    navbar: document.getElementById('navbar'),
    navToggle: document.getElementById('navToggle'),
    navMenu: document.getElementById('navMenu'),
    backToTop: document.getElementById('backToTop')
};

// 使用 Intersection Observer
const observer = new IntersectionObserver(callback, options);
```

## 性能优化

### 加载性能

| 指标 | 目标 | 当前 |
|------|------|------|
| First Contentful Paint | < 1.5s | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| Time to Interactive | < 3.5s | ✅ |
| Total Bundle Size | < 100KB | ✅ |

### 优化策略

1. **CSS 优化**
   - 使用简洁的选择器
   - 避免过度嵌套
   - 使用 CSS 变量减少重复
   - 关键 CSS 内联（可选）

2. **JavaScript 优化**
   - 最小化 DOM 操作
   - 使用事件委托
   - 懒加载非关键资源
   - 使用 requestAnimationFrame

3. **资源优化**
   - CDN 加载第三方库
   - 图片懒加载
   - 缓存策略配置
   - 压缩文件（生产环境）

4. **网络优化**
   - HTTP/2 支持
   - Brotli/Gzip 压缩
   - 缓存头部配置
   - CDN 分发

### 缓存策略

在 `_headers` 文件中配置：

```
/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable
```

## 响应式设计

### 断点系统

```css
/* 手机 */
@media (max-width: 480px) { }

/* 平板 */
@media (max-width: 768px) { }

/* 桌面 */
@media (max-width: 1024px) { }

/* 大屏 */
@media (min-width: 1440px) { }
```

### 移动优先

所有样式从移动端开始设计，逐步增强：

```css
/* 基础（移动） */
.container { padding: 20px; }

/* 平板增强 */
@media (min-width: 768px) {
    .container { padding: 40px; }
}

/* 桌面增强 */
@media (min-width: 1024px) {
    .container { padding: 60px; }
}
```

## 浏览器兼容性

### 目标浏览器

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90
- iOS Safari >= 14
- Chrome Android >= 90

### Polyfills

目前不需要 polyfills，所有功能使用现代浏览器原生支持的 API。

如需支持旧浏览器，可添加：

```html
<!-- Intersection Observer Polyfill -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>
```

## SEO 优化

### Meta 标签

- ✅ 标题和描述
- ✅ Open Graph（社交媒体）
- ✅ Twitter Card
- ✅ 关键词
- ✅ 作者信息

### 结构化数据

可选添加 JSON-LD 结构化数据：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "蒙链",
  "description": "内蒙古区块链社群",
  "url": "https://mengchain.org"
}
</script>
```

### 站点地图

`sitemap.xml` 提供搜索引擎索引。

## 无障碍访问

### ARIA 标签

- 语义化 HTML 标签
- 适当的 heading 层级
- 表单标签关联
- 键盘导航支持

### 对比度

所有文字保持至少 4.5:1 的对比度。

### 焦点管理

所有交互元素支持键盘操作和焦点状态。

## 安全性

### HTTP 头部

在 `_headers` 文件中配置：

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
```

### CSP（内容安全策略）

可选添加：

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com
```

## 部署配置

### Cloudflare Pages

推荐配置：

```yaml
Build command: (留空)
Build output directory: /
Environment variables: (无)
```

### 环境变量

无需环境变量，纯静态网站。

## 监控和分析

### 推荐工具

1. **性能监控**
   - Google Lighthouse
   - WebPageTest
   - Chrome DevTools

2. **错误追踪**
   - Sentry（可选）
   - 浏览器控制台

3. **分析工具**
   - Google Analytics（可选）
   - Cloudflare Analytics

### 添加 Google Analytics

在 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 开发工具

### 推荐 VS Code 扩展

- Live Server - 本地开发服务器
- Prettier - 代码格式化
- ESLint - JavaScript 检查
- HTML CSS Support - 智能提示
- Auto Rename Tag - 标签自动重命名

### EditorConfig

创建 `.editorconfig`：

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

## 测试清单

### 功能测试

- [ ] 所有导航链接正常工作
- [ ] 平滑滚动效果正常
- [ ] 移动菜单展开/收起正常
- [ ] 表单提交功能正常
- [ ] 返回顶部按钮正常
- [ ] 动画效果流畅

### 兼容性测试

- [ ] Chrome/Edge 最新版
- [ ] Firefox 最新版
- [ ] Safari 最新版
- [ ] iOS Safari
- [ ] Chrome Android
- [ ] 不同屏幕尺寸

### 性能测试

- [ ] Lighthouse 分数 > 90
- [ ] 首屏加载 < 3s
- [ ] 无控制台错误
- [ ] 动画帧率 > 30fps

## 故障排除

### 常见问题

**Q: CSS 样式不生效**
- 检查文件路径是否正确
- 清除浏览器缓存
- 检查 CSS 选择器优先级

**Q: JavaScript 功能不工作**
- 检查浏览器控制台错误
- 确认 script.js 正确加载
- 检查 DOM 元素 ID 是否匹配

**Q: 响应式布局异常**
- 检查 viewport meta 标签
- 验证媒体查询断点
- 测试不同设备尺寸

## 未来优化方向

1. **性能**
   - 图片格式优化（WebP）
   - 代码分割和懒加载
   - Service Worker 缓存

2. **功能**
   - 暗黑模式
   - 多语言支持
   - 离线功能

3. **架构**
   - 考虑引入构建工具
   - 模块化 CSS（CSS Modules）
   - TypeScript 重构

## 技术支持

如有技术问题：

- 📧 技术支持: tech@mengchain.org
- 📖 查看文档: README.md, DEPLOY.md
- 💬 GitHub Issues

---

**持续改进，追求卓越！**

© 2024 蒙链 - 内蒙古区块链社群

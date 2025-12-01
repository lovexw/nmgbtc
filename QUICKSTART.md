# 🚀 快速开始指南

欢迎使用蒙链官网！本指南将帮助您在5分钟内完成网站的本地预览和部署。

## 📋 目录

- [本地预览](#本地预览)
- [部署到 Cloudflare Pages](#部署到-cloudflare-pages)
- [自定义内容](#自定义内容)
- [常见问题](#常见问题)

---

## 🖥️ 本地预览

### 方法1: 使用 Python（推荐）

```bash
# 进入项目目录
cd /path/to/mengchain-website

# 启动服务器
python3 -m http.server 8000

# 打开浏览器访问
# http://localhost:8000
```

### 方法2: 使用 Node.js

```bash
# 安装 http-server（仅需一次）
npm install -g http-server

# 启动服务器
http-server

# 默认访问 http://localhost:8080
```

### 方法3: 使用 PHP

```bash
php -S localhost:8000
```

### 方法4: 使用 VS Code Live Server

1. 安装 "Live Server" 扩展
2. 右键 `index.html`
3. 选择 "Open with Live Server"

---

## ☁️ 部署到 Cloudflare Pages

### 步骤1: 准备 Git 仓库

```bash
# 初始化 Git（如未初始化）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 推送到 GitHub/GitLab
git remote add origin <你的仓库URL>
git push -u origin main
```

### 步骤2: 连接 Cloudflare

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击 **Workers & Pages**
3. 点击 **Create application**
4. 选择 **Pages** 标签
5. 点击 **Connect to Git**

### 步骤3: 配置项目

- **选择仓库**: 选择你的蒙链仓库
- **项目名称**: `mengchain`（或自定义）
- **生产分支**: `main`
- **构建命令**: 留空
- **构建输出目录**: `/`

### 步骤4: 部署

1. 点击 **Save and Deploy**
2. 等待1-2分钟完成部署
3. 访问生成的 `*.pages.dev` 域名

### 步骤5: 绑定自定义域名（可选）

1. 在项目中点击 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入域名（如 `mengchain.org`）
4. 按照提示配置 DNS
5. 等待 SSL 证书生成

🎉 **完成！网站现已上线！**

---

## ✏️ 自定义内容

### 修改网站标题和描述

编辑 `index.html`，找到 `<head>` 部分：

```html
<title>蒙链 - 内蒙古区块链社群</title>
<meta name="description" content="你的描述">
```

### 修改颜色主题

编辑 `css/style.css`，修改顶部的 CSS 变量：

```css
:root {
    --primary-color: #2563eb;    /* 主色 */
    --secondary-color: #0ea5e9;  /* 辅色 */
    --accent-color: #f59e0b;     /* 强调色 */
}
```

### 更新联系方式

在 `index.html` 中搜索 `#contact` 部分：

```html
<section id="contact" class="contact">
    <!-- 修改这里的联系信息 -->
</section>
```

### 添加新闻/动态

在 `index.html` 中找到 `.news-grid` 部分，复制一个 `.news-card` 并修改：

```html
<div class="news-card">
    <div class="news-date">2024年XX月XX日</div>
    <h3>新闻标题</h3>
    <p>新闻描述...</p>
    <a href="#" class="news-link">阅读更多</a>
</div>
```

### 修改统计数据

在 `index.html` 中找到 `.stat-card`，修改 `data-target` 属性：

```html
<div class="stat-number" data-target="5000">0</div>
```

---

## ❓ 常见问题

### Q: 如何修改网站内容？

**A**: 所有内容都在 `index.html` 文件中，直接编辑即可。

### Q: 如何改变样式？

**A**: 编辑 `css/style.css` 文件。建议先修改 CSS 变量。

### Q: 如何添加新页面？

**A**: 创建新的 HTML 文件，并在导航栏添加链接。

### Q: 表单提交到哪里？

**A**: 当前为演示功能。需要配置表单服务如：
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- 自己的后端 API

### Q: 如何添加图片？

**A**: 
1. 创建 `images` 文件夹
2. 放入图片文件
3. 在 HTML 中引用：`<img src="images/your-image.jpg">`

### Q: 网站加载慢怎么办？

**A**: 
- 使用 CDN 部署（Cloudflare Pages）
- 压缩图片
- 启用浏览器缓存

### Q: 如何更新已部署的网站？

**A**: 
```bash
# 修改文件后
git add .
git commit -m "更新内容"
git push

# Cloudflare 会自动重新部署
```

### Q: 支持哪些浏览器？

**A**: Chrome, Firefox, Safari, Edge 最新版本，以及主流移动浏览器。

---

## 📚 更多资源

- **完整文档**: 查看 [README.md](README.md)
- **部署详情**: 查看 [DEPLOY.md](DEPLOY.md)
- **技术细节**: 查看 [TECHNICAL.md](TECHNICAL.md)
- **贡献代码**: 查看 [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 🆘 需要帮助？

- 📧 **邮箱**: tech@mengchain.org
- 💬 **GitHub Issues**: 提交问题
- 📖 **文档**: 查看项目文档

---

## ✅ 检查清单

部署前确认：

- [ ] 修改了联系方式
- [ ] 更新了域名信息
- [ ] 检查了所有内容
- [ ] 在浏览器中预览
- [ ] 测试了移动端显示
- [ ] 推送到 Git 仓库
- [ ] 配置了 Cloudflare Pages

---

**祝您使用愉快！** 🎉

如有问题，随时联系我们。

© 2024 蒙链 - 内蒙古区块链社群

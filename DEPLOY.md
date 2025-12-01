# 蒙链官网部署指南

本文档详细介绍如何将蒙链官网部署到 Cloudflare Pages 和其他静态托管平台。

## 目录

- [Cloudflare Pages 部署](#cloudflare-pages-部署)
- [GitHub Pages 部署](#github-pages-部署)
- [Vercel 部署](#vercel-部署)
- [Netlify 部署](#netlify-部署)
- [自定义域名配置](#自定义域名配置)

---

## Cloudflare Pages 部署

### 方法一：通过 Git 仓库部署（推荐）

1. **准备 Git 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 蒙链官网"
   git remote add origin <你的仓库地址>
   git push -u origin main
   ```

2. **登录 Cloudflare**
   - 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 登录你的账号

3. **创建 Pages 项目**
   - 点击左侧菜单 "Workers & Pages"
   - 点击 "Create application"
   - 选择 "Pages" 标签
   - 点击 "Connect to Git"

4. **连接仓库**
   - 选择 GitHub 或 GitLab
   - 授权 Cloudflare 访问你的仓库
   - 选择蒙链官网的仓库

5. **配置构建设置**
   - **项目名称**: mengchain（或自定义）
   - **生产分支**: main
   - **构建命令**: 留空（静态网站无需构建）
   - **构建输出目录**: `/`（根目录）
   - **环境变量**: 无需配置

6. **部署**
   - 点击 "Save and Deploy"
   - 等待部署完成（通常1-2分钟）
   - 访问提供的 `*.pages.dev` 域名查看网站

### 方法二：直接上传文件

1. **登录 Cloudflare Dashboard**
   - 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)

2. **创建 Pages 项目**
   - Workers & Pages → Create application → Pages
   - 选择 "Upload assets"

3. **上传文件**
   - 将整个项目文件夹打包成 ZIP（或直接拖拽文件夹）
   - 上传到 Cloudflare
   - 项目名称: mengchain

4. **完成部署**
   - 点击 "Deploy site"
   - 访问生成的 URL

### Cloudflare Pages 优势

- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS
- ✅ 无限带宽
- ✅ Git 集成，自动部署
- ✅ 免费自定义域名
- ✅ 高可用性和性能

---

## GitHub Pages 部署

1. **创建 GitHub 仓库**
   - 仓库名: `mengchain-website`（或任意名称）
   - 设置为 Public

2. **推送代码**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<用户名>/<仓库名>.git
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库设置 (Settings)
   - 点击左侧 "Pages"
   - Source: Deploy from a branch
   - Branch: main, 文件夹: / (root)
   - 点击 Save

4. **访问网站**
   - 网址: `https://<用户名>.github.io/<仓库名>/`
   - 等待几分钟后访问

---

## Vercel 部署

### 方法一：通过 CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录并部署**
   ```bash
   cd /home/engine/project
   vercel
   ```

3. **按提示操作**
   - Set up and deploy: Y
   - Which scope: 选择你的账号
   - Link to existing project: N
   - Project name: mengchain
   - In which directory: ./
   - Override settings: N

### 方法二：通过 Git

1. 推送代码到 GitHub/GitLab
2. 访问 [Vercel Dashboard](https://vercel.com/)
3. 点击 "New Project"
4. 导入 Git 仓库
5. 配置：
   - Framework Preset: Other
   - Build Command: 留空
   - Output Directory: ./
6. 点击 Deploy

---

## Netlify 部署

### 方法一：拖拽部署

1. 访问 [Netlify Drop](https://app.netlify.com/drop)
2. 直接拖拽项目文件夹到页面
3. 等待部署完成
4. 访问生成的 URL

### 方法二：通过 Git

1. 登录 [Netlify](https://app.netlify.com/)
2. 点击 "Add new site" → "Import an existing project"
3. 连接 Git 仓库
4. 配置构建设置：
   - Build command: 留空
   - Publish directory: ./
5. 点击 "Deploy site"

---

## 自定义域名配置

### Cloudflare Pages

1. **添加域名**
   - Pages 项目 → Custom domains
   - 点击 "Set up a custom domain"
   - 输入域名（如 mengchain.org）

2. **配置 DNS**
   - 如果域名在 Cloudflare：自动配置
   - 如果域名在其他服务商：
     - 添加 CNAME 记录
     - Name: @ 或 www
     - Target: <项目名>.pages.dev

3. **启用 HTTPS**
   - 自动配置 SSL 证书
   - 通常 5-10 分钟生效

### GitHub Pages

1. **添加 CNAME 文件**
   ```bash
   echo "mengchain.org" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **配置 DNS**
   - A 记录指向 GitHub Pages IP：
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - 或 CNAME 记录: `<用户名>.github.io`

3. **在仓库设置中验证域名**
   - Settings → Pages → Custom domain
   - 输入域名并验证

### Vercel

1. **添加域名**
   - 项目设置 → Domains
   - 添加域名

2. **配置 DNS**
   - 按照 Vercel 提供的说明配置 DNS
   - 通常是添加 CNAME 记录

### Netlify

1. **添加域名**
   - Site settings → Domain management
   - Add custom domain

2. **配置 DNS**
   - 使用 Netlify DNS 或配置外部 DNS
   - 添加 CNAME 记录指向 Netlify

---

## 部署后检查清单

- [ ] 网站能够正常访问
- [ ] 所有页面和链接正常工作
- [ ] 响应式设计在移动设备上正常显示
- [ ] 表单提交功能正常
- [ ] 导航和滚动效果流畅
- [ ] HTTPS 已启用
- [ ] 自定义域名已配置（如需要）
- [ ] SEO 元标签正确设置
- [ ] 网站在各浏览器中正常显示

---

## 持续部署

### 自动部署设置

当你通过 Git 部署时，每次推送代码都会自动触发部署：

```bash
# 修改代码后
git add .
git commit -m "更新内容"
git push

# 平台会自动检测并部署新版本
```

### 回滚到之前版本

**Cloudflare Pages:**
- Pages 项目 → Deployments
- 找到之前的部署版本
- 点击 "Rollback to this deployment"

**Vercel:**
- 项目 → Deployments
- 选择之前的部署
- 点击 "Promote to Production"

---

## 性能优化建议

1. **启用 Brotli 压缩**（Cloudflare 自动启用）
2. **配置缓存头部**（已在 `_headers` 文件中配置）
3. **使用 CDN**（所有平台都自动提供）
4. **图片优化**（如添加图片，建议压缩后再上传）
5. **启用 HTTP/2**（平台自动支持）

---

## 常见问题

### Q: 部署后网站显示 404
A: 检查构建输出目录是否正确设置为 `/` 或 `./`

### Q: CSS/JS 文件无法加载
A: 确保文件路径正确，使用相对路径

### Q: 表单提交不工作
A: 静态网站需要配置表单处理服务，如 Formspree、Netlify Forms 等

### Q: 自定义域名无法访问
A: 检查 DNS 配置是否正确，通常需要等待 DNS 传播（最多 48 小时）

---

## 技术支持

如有部署问题，请联系：
- 📧 邮箱: tech@mengchain.org
- 💬 GitHub Issues: [提交问题](https://github.com/your-repo/issues)

---

**祝部署顺利！🎉**

© 2024 蒙链 - 内蒙古区块链社群

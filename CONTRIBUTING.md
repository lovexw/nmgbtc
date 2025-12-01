# 贡献指南

感谢您对蒙链官网项目的关注！我们欢迎任何形式的贡献，包括但不限于：

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🎨 优化设计
- 💻 提交代码

## 行为准则

本项目遵循开源社区的基本行为准则：

- 尊重他人，友善交流
- 接受建设性的批评
- 关注社区利益
- 展现同理心

## 如何贡献

### 报告问题

如果您发现了 Bug 或有改进建议：

1. 先在 [Issues](../../issues) 中搜索，避免重复
2. 创建新 Issue，清晰描述问题
3. 提供详细信息：
   - 问题描述
   - 重现步骤
   - 预期行为
   - 实际行为
   - 截图（如适用）
   - 浏览器和设备信息

### 提交代码

#### 1. Fork 项目

点击页面右上角的 "Fork" 按钮

#### 2. 克隆仓库

```bash
git clone https://github.com/your-username/mengchain-website.git
cd mengchain-website
```

#### 3. 创建分支

```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/your-bug-fix
```

分支命名规范：
- `feature/` - 新功能
- `fix/` - Bug 修复
- `docs/` - 文档更新
- `style/` - 样式调整
- `refactor/` - 代码重构
- `perf/` - 性能优化

#### 4. 进行修改

- 遵循现有代码风格
- 保持代码简洁清晰
- 添加必要的注释
- 测试您的更改

#### 5. 提交更改

```bash
git add .
git commit -m "类型: 简短描述

详细描述（可选）
"
```

提交信息格式：
```
<类型>: <简短描述>

<详细描述>

<相关 Issue>
```

类型说明：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 样式调整
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具相关

示例：
```
feat: 添加暗黑模式切换功能

- 新增暗黑模式样式表
- 添加主题切换按钮
- 保存用户主题偏好到 localStorage

Closes #123
```

#### 6. 推送到 GitHub

```bash
git push origin feature/your-feature-name
```

#### 7. 创建 Pull Request

1. 访问您 fork 的仓库页面
2. 点击 "Pull Request" 按钮
3. 填写 PR 信息：
   - 清晰的标题
   - 详细的描述
   - 相关的 Issue 编号
   - 截图或演示（如适用）

## 代码规范

### HTML

- 使用语义化标签
- 保持适当的缩进（2或4个空格）
- 添加必要的 ARIA 属性以提升可访问性
- 确保所有标签正确闭合

```html
<!-- 好的示例 -->
<section class="feature">
    <h2>标题</h2>
    <p>内容描述</p>
</section>

<!-- 避免 -->
<div class="feature">
    <div class="title">标题</div>
    <div class="content">内容描述</div>
</div>
```

### CSS

- 使用有意义的类名
- 遵循 BEM 命名规范（可选）
- 使用 CSS 变量定义颜色和常用值
- 保持选择器简洁
- 添加浏览器兼容性前缀（如需要）

```css
/* 好的示例 */
.feature-card {
    padding: var(--spacing-md);
    background: var(--color-primary);
}

.feature-card__title {
    font-size: 1.5rem;
    color: var(--color-text);
}

/* 避免过度嵌套 */
.section .container .card .content .title {
    /* 太深的嵌套 */
}
```

### JavaScript

- 使用现代 ES6+ 语法
- 添加必要的注释
- 使用有意义的变量名
- 避免全局变量
- 处理错误情况

```javascript
// 好的示例
function showNotification(message, type = 'info') {
    // 移除已存在的通知
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // 创建新通知
    const notification = createNotificationElement(message, type);
    document.body.appendChild(notification);
}

// 使用常量
const NOTIFICATION_DURATION = 4000;
const NOTIFICATION_TYPES = {
    INFO: 'info',
    SUCCESS: 'success',
    ERROR: 'error'
};
```

## 测试

在提交 PR 之前，请确保：

- ✅ 在主流浏览器中测试（Chrome、Firefox、Safari、Edge）
- ✅ 在移动设备上测试响应式布局
- ✅ 检查所有链接是否有效
- ✅ 验证表单功能正常
- ✅ 确保没有控制台错误
- ✅ 检查页面加载性能

## 文档

如果您的更改涉及：

- 新功能：更新 README.md 和相关文档
- API 变更：更新文档和示例
- 配置变更：更新部署指南
- 重大变更：更新 CHANGELOG.md

## 设计资源

如需设计资源或品牌指南，请联系：
- 📧 design@mengchain.org

## 本地开发

### 环境要求

- 现代浏览器
- 简单的 HTTP 服务器

### 运行项目

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx http-server

# 使用 PHP
php -S localhost:8000
```

访问 `http://localhost:8000`

### 开发工具推荐

- **编辑器**: VS Code, Sublime Text, WebStorm
- **浏览器**: Chrome DevTools, Firefox Developer Tools
- **设计**: Figma, Adobe XD
- **版本控制**: Git, GitHub Desktop

## 审核流程

1. 提交 Pull Request
2. 自动化检查（如配置）
3. 代码审查
4. 讨论和修改
5. 批准合并

## 发布流程

维护者负责：

1. 审查和合并 PR
2. 更新版本号
3. 更新 CHANGELOG
4. 创建 Release
5. 部署到生产环境

## 获得帮助

如有任何问题：

- 📧 邮件: tech@mengchain.org
- 💬 GitHub Discussions
- 📖 查看现有文档
- 🔍 搜索已关闭的 Issues

## 致谢

感谢所有贡献者的付出！您的每一个贡献都让蒙链变得更好。

### 贡献者名单

查看 [贡献者页面](../../graphs/contributors) 了解所有贡献者。

---

**再次感谢您的贡献！** 🎉

© 2024 蒙链 - 内蒙古区块链社群

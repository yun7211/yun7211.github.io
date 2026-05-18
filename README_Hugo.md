# Personal Blog with Hugo + Markdown + GitHub

> Hugo + Markdown + GitHub 个人博客建设清单 — 技术文章、学习笔记、作品集、主页。

---

## 0. 推荐结论

```txt
Hugo + Markdown + GitHub
部署：GitHub Pages + GitHub Actions
写作：本地 Markdown + Git 提交 + 自动部署
```

适用人群：想长期维护博客，用 Markdown 写作，托管在 GitHub，追求速度快、成本低、易备份。

---

## 1. 为什么选择 Hugo？

- 构建快，不依赖数据库，部署简单，维护成本低
- 主题生态成熟，适合 Markdown 写作和 GitHub Pages
- 安全风险低，文章源文件可直接备份、迁移、版本管理

适合：个人博客、技术博客、学习笔记、作品展示。

---

## 2. 技术栈总览

```txt
静态网站生成器：Hugo
文章格式：Markdown
代码托管：GitHub
部署平台：GitHub Pages
自动化部署：GitHub Actions
主题管理：Hugo Themes / Git Submodule
```

可选：自定义域名、评论 (Giscus/Utterances)、统计 (Plausible/Umami)、搜索 (Pagefind/Fuse.js)

---

## 3. 建站前先想清楚

- 博客主要写什么？面向谁？
- 风格偏专业、极简、还是综合？
- 选 2-4 个主方向（技术、学习笔记、读书、项目、随笔）
- 博客名称：易记、适合长期使用、能注册域名和 GitHub 仓库名

---

## 4. 域名规划

GitHub Pages 默认域名：`https://yun7211.github.io/`

自定义域名选项：
```txt
https://yourname.com
https://blog.yourname.com
```

域名要求：简短、易拼写、无连字符、开启自动续费，并在 Hugo 配置 `baseURL`。

---

## 5. 本地环境准备

必备：Hugo Extended、Git、GitHub 账号、VS Code（推荐）

```bash
hugo version
git --version
```

推荐 VS Code 插件：Markdown All in One、YAML、GitLens、Prettier、Code Spell Checker

---

## 6. 创建 Hugo 项目

```bash
hugo new site my-blog
cd my-blog
git init
```

添加主题（推荐 Git Submodule）：
```bash
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
echo "theme = 'ananke'" >> hugo.toml
```

启动本地服务：
```bash
hugo server        # 正式文章
hugo server -D     # 包含草稿
```

访问 `http://localhost:1313/`

---

## 7. 推荐项目结构

```txt
my-blog/
├── archetypes/default.md       # 新文章模板
├── assets/images/              # Hugo 处理的资源
├── content/
│   ├── posts/                  # 博客文章
│   ├── about.md
│   └── projects.md
├── layouts/                    # 自定义模板
├── static/images/              # 静态资源
├── themes/                     # 主题
├── .github/workflows/hugo.yaml # 自动部署
├── hugo.toml
└── .gitignore
```

| 目录 | 作用 |
|---|---|
| `content/` | 文章和页面 |
| `static/` | 原样复制到网站根目录 |
| `assets/` | Hugo 处理的资源（图片、CSS、JS） |
| `public/` | 构建输出，勿手动修改 |
| `.github/workflows/` | GitHub Actions 配置 |

---

## 8. Hugo 基础配置 (hugo.toml)

```toml
baseURL = "https://yun7211.github.io/"
languageCode = "zh-cn"
title = "我的个人博客"
theme = "ananke"
defaultContentLanguage = "zh-cn"
hasCJKLanguage = true
enableRobotsTXT = true
enableEmoji = true
summaryLength = 120
paginate = 10
```

重点检查：`baseURL`、`languageCode`、`title`、`theme`、`hasCJKLanguage`、`enableRobotsTXT`

---

## 9. 主题选择

选主题关注：是否持续维护、支持中文、深色模式、代码高亮、文章目录、标签分类、移动端体验、页面速度。

方向建议：
- **技术博客**：阅读体验优先，代码高亮、目录、标签
- **个人主页**：首页视觉、About 页面、项目展示、社交链接
- **数字花园**：双向链接、标签体系、搜索、笔记关联

---

## 10. Markdown 写作规范

### 文件命名

推荐英文小写 + 短横线：`my-first-post.md`、`how-to-learn-git.md`

### Front Matter 示例

TOML 格式：
```toml
+++
title = "我的第一篇博客"
date = 2026-05-15T10:00:00+08:00
draft = true
description = "这是我的第一篇 Hugo 博客文章。"
tags = ["Hugo", "Markdown", "Blog"]
categories = ["博客建设"]
series = ["个人博客搭建"]
toc = true
+++
```

必填：`title`、`date`、`draft`、`description`、`tags`
选填：`categories`、`cover`、`toc`、`series`、`lastmod`、`slug`

### 正文规范

- 标题清晰，开头说明解决的问题
- 段落不过长，代码可运行，图片有 alt 文本
- 有前提、有结论、有总结、有下一步建议
- 保留个人观点，避免标题党

---

## 11. 分类、标签和系列

- **Categories**：大方向，3-8 个（技术、学习、读书、项目、随笔）
- **Tags**：细节关键词，可多于分类（Hugo、GitHub、Python、读书笔记）
- **Series**：多篇连续文章（"Hugo 博客搭建系列"）

原则：分类不过多、标签不重复、统一大小写和命名、定期清理。

---

## 12. 页面规划

必备：首页、文章列表/详情、About、标签页、分类页、归档、RSS、404

推荐：项目作品、友情链接、读书页、工具箱、简历页

首页内容：博客名称、一句话介绍、作者简介、最新/精选文章、主要分类、社交链接、RSS

---

## 13. 文章 URL 设计

推荐：`/posts/hugo-blog-setup/`（简短、可读、小写、短横线）

URL 一旦公开，勿频繁修改。避免日期路径、中文、特殊符号。

---

## 14. 图片与媒体资源

存放位置：
- 简单：`static/images/`，引用 `![说明](/images/example.png)`
- 进阶：`assets/images/`（Hugo 可处理压缩裁剪）

图片格式选择：

| 类型 | 格式 |
|---|---|
| 照片 | JPG / WebP |
| 截图 | PNG / WebP |
| 图标/Logo | SVG / PNG |

规范：英文命名、压缩图片、设置 alt 文本、检查移动端、避免超大图和版权图片。

---

## 15. 代码高亮与技术文章

````md
```bash
hugo server -D
```
````

技术文章要求：说明运行环境和版本、提供完整命令、区分操作系统、说明预期结果和报错处理、测试代码可运行、附参考链接。避免只贴代码不解释。

---

## 16. SEO 基础

站点级：设置标题/描述/语言、`baseURL`、`robots.txt`、sitemap、RSS、Open Graph 图片、favicon

文章级：标题清晰、描述准确、URL 简洁、小标题合理、图片有 alt、内链合理、更新时间明确

---

## 17. RSS 和订阅

启用 RSS，首页和页脚放链接。常见 RSS 地址：`/index.xml`、`/posts/index.xml`

---

## 18. 评论系统

| 方案 | 特点 |
|---|---|
| Giscus | 基于 GitHub Discussions，适合技术博客 |
| Utterances | 基于 GitHub Issues，简单轻量 |
| Disqus | 老牌系统，可能有广告 |

评估：是否真的需要评论？是否影响页面速度？是否依赖 GitHub 登录？

---

## 19. 搜索功能

文章少可不加，30 篇后再加。

| 方案 | 特点 |
|---|---|
| Pagefind | 静态搜索，推荐 |
| Lunr.js | 前端搜索 |
| Fuse.js | 轻量模糊搜索 |

---

## 20. 统计分析

| 工具 | 特点 |
|---|---|
| Plausible | 轻量、重隐私 |
| Umami | 开源、可自托管 |
| Google Analytics | 功能强但复杂 |

评估：是否真的需要？是否尊重隐私？是否符合当地法规？

---

## 21. 无障碍与阅读体验

- 字体清晰、字号足够、行高舒适、正文宽度合适
- 深色模式可读、链接颜色明显、代码块可读
- 图片有 alt、按钮有明确文字、标题层级正确
- 表格在手机上可横向滚动、图片适应屏幕

---

## 22. 性能优化

- 图片压缩、避免过多第三方脚本、懒加载图片
- 减少 Web 字体或使用系统字体
- 生产构建：`hugo --gc --minify`
- 检查 Lighthouse 分数和首屏加载速度

---

## 23. 安全与隐私

- 不提交私钥、`.env`、私人笔记、未公开照片
- 不暴露邮箱明文、不嵌入不可信第三方脚本
- 定期更新主题、检查 GitHub Actions 权限
- 使用统计/评论/第三方 CDN 时，考虑是否需要 Cookie 提示

---

## 24. Git 与版本管理

新手只用 `main` 分支。

提交信息风格：
```txt
feat: add first blog post
fix: update baseURL
docs: update README
chore: update theme
```

`.gitignore` 推荐：
```gitignore
/public/
/resources/_gen/
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
.env
.env.local
node_modules/
```

---

## 25. GitHub Pages 部署

流程：
1. 上传仓库到 GitHub（`main` 分支）
2. Settings → Pages → Source 选 `GitHub Actions`
3. 创建 `.github/workflows/hugo.yaml`
4. push → 检查 Actions → 打开页面验证

基础 workflow 示例：

```yaml
name: Build and deploy Hugo site

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.160.0
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0

      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5

      - name: Install Hugo
        run: |
          curl -L -o hugo.tar.gz "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
          mkdir hugo-bin
          tar -xzf hugo.tar.gz -C hugo-bin
          echo "$PWD/hugo-bin" >> "$GITHUB_PATH"

      - name: Verify Hugo
        run: hugo version

      - name: Build
        run: |
          hugo --gc --minify --baseURL "${{ steps.pages.outputs.base_url }}/"

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 26. 自定义域名

1. 购买域名 → GitHub 仓库 Settings → Pages → 填写 Custom domain
2. 根域名配 A 记录指向 GitHub Pages IP，子域名配 CNAME 指向 `username.github.io`
3. 勾选 Enforce HTTPS，确认 `baseURL` 同步更新

```toml
baseURL = "https://example.com/"          # 根域名
baseURL = "https://blog.example.com/"     # 子域名
baseURL = "https://username.github.io/my-blog/"  # 项目站点
```

---

## 27. 文章发布流程

**新建文章：**
```bash
hugo new content posts/my-first-post.md
```

**写作：** 编辑文件，`draft = true`，本地 `hugo server -D` 预览。

**发布：**
```bash
# 改 draft = false，然后：
hugo --gc --minify      # 构建检查
git add .
git commit -m "feat: publish my first post"
git push                 # GitHub Actions 自动部署
```

**发布前检查：** 标题准确、日期正确、`draft = false`、分类标签合理、图片显示、链接有效、代码正确、本地预览过、无隐私信息。

---

## 28. 内容质量

好文章标准：主题明确、有真实经验、有具体细节、有个人观点、有可复用价值、能被未来的自己看懂。

不建议：完全复制、无来源堆砌、未验证的教程、暴露隐私、过度标题党、纯 AI 生成无修订。

---

## 29. 写作流程

```
选题 → 列提纲 → 写初稿 → 本地预览 → 修改结构 → 补图和链接 → 校对 → 发布
```

选题来源：今天解决的问题、新学到的知识、值得记录的工具、项目复盘、读书笔记。

文章模板：
```toml
+++
title = "文章标题"
date = 2026-05-15T10:00:00+08:00
draft = true
description = "一句话说明文章内容。"
tags = ["标签1", "标签2"]
categories = ["分类"]
+++

## 背景

## 问题

## 过程

## 结果

## 总结
```

---

## 30. 多语言支持

新手不建议一开始做双语。先做中文，稳定后再加英文。如需要，需考虑 URL 区分、菜单翻译、SEO 翻译、RSS 分语言。

---

## 31. 版权与许可

- 文章：`CC BY-NC-SA 4.0` 或 `版权所有，转载请注明出处`
- 代码：`MIT License`
- 图片标注来源，外部资料加链接

---

## 32. 备份与迁移

Hugo + Markdown 天然易迁移。

备份：GitHub 仓库、本地仓库、图片资源、主题配置、文章源文件、重要草稿。

迁移前提：Markdown 标准、图片路径清晰、Front Matter 通用、不过度依赖主题短代码。

---

## 33. 维护计划

- **每次发布前**：本地预览、检查草稿状态、链接、图片、错别字、移动端、Git 提交、Actions 状态
- **每月**：检查失效链接、清理标签、更新主题、检查页面速度
- **每季度**：复盘内容方向、整理分类、检查域名续费、优化首页
- **每年**：更新定位、整理年度文章、检查全部页面、做完整备份

---

## 34. 上线前总检查

**功能：** 首页/文章/About/标签/分类/RSS/sitemap/404 可访问，移动端正常

**内容：** 至少 3 篇文章，About 不空，首页介绍清楚，无测试文章、无隐私信息、无版权图片

**技术：** `hugo --gc --minify` 成功，GitHub Actions 通过，CSS/图片正常加载，`baseURL` 正确，HTTPS 正常，页面速度可接受

**体验：** 字体舒适、深色模式可读、导航清晰、代码块可读、手机浏览正常

---

## 35. 常见问题排查

**线上样式丢失：** 检查 `baseURL`、CSS 路径、主题资源、GitHub Actions 是否包含 `submodules: recursive`

**文章不显示：** 检查 `draft = true`、日期是否未来、Front Matter 格式

**图片不显示：** 检查路径、文件名大小写、是否已提交、是否用中文/空格命名

**GitHub Actions 失败：** 检查 Hugo 版本、主题 submodule、workflow 缩进、Pages 设置

**自定义域名打不开：** 检查 DNS 生效、GitHub Pages 绑定、HTTPS、`baseURL`、CNAME 文件

---

## 36. 推荐路线图

**阶段 1 — 先上线：** 创建项目 → 选主题 → 写 About + 3 篇文章 → 上传 GitHub → 配置 Pages → 部署

**阶段 2 — 完善体验：** 调整字体 → 优化首页 → 文章目录 → 标签分类 → 代码高亮 → 移动端 → RSS

**阶段 3 — 增强功能：** 搜索 → 评论 → 统计 → sitemap → 自定义域名

**阶段 4 — 长期运营：** 固定节奏 → 选题库 → 系列文章 → 更新旧文 → 复盘数据

---

## 37. 最小可行版本

```bash
hugo new site my-blog
cd my-blog
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
echo "theme = 'ananke'" >> hugo.toml
hugo new content posts/my-first-post.md
hugo server -D
```

只需要：项目 + 主题 + 首页 + About + 3 篇文章 + GitHub + Pages。

---

## 38. 进阶增强

稳定后可考虑：自定义主题/首页/短代码、自动生成 Open Graph 图片、失效链接检查、图片压缩、搜索索引、CI 检查、拼写检查、Newsletter、Webmention、数字花园、文章关系图。

---

## 39. 常见问题排查

- **样式丢失**：`baseURL` 错误、主题 submodule 未拉取、CSS 路径写死
- **文章不显示**：`draft = true`、日期在未来、Front Matter 格式错误
- **图片不显示**：路径错误、大小写不一致、中文文件名
- **Actions 失败**：Hugo 版本不匹配、workflow 缩进错误、Pages 未选 GitHub Actions
- **域名打不开**：DNS 未生效、未绑定、`baseURL` 未更新

---

## 40. 参考资料

- Hugo 官方文档：https://gohugo.io/documentation/
- Hugo Quick Start：https://gohugo.io/getting-started/quick-start/
- Hugo GitHub Pages 部署：https://gohugo.io/host-and-deploy/host-on-github-pages/
- Hugo Themes：https://themes.gohugo.io/
- GitHub Pages 文档：https://docs.github.com/en/pages

---

## 41. 最终建议

```txt
Hugo + Markdown + GitHub + GitHub Pages
```

不要一开始追求太多功能。先完成：

```txt
能写文章 → 能本地预览 → 能自动部署 → 能稳定访问
```

稳定后再加：自定义域名、评论、搜索、统计、深色模式、RSS、SEO。

个人博客最重要的不是技术复杂度，而是长期持续写作和维护。

---

## License

MIT

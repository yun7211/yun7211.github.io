+++
title = "用 Hugo 搭建个人博客的第一步"
date = 2026-05-18T09:00:00+08:00
draft = false
description = "记录这个 Hugo 博客项目的技术路线、目录结构和第一版上线目标。"
tags = ["Hugo", "Markdown", "GitHub Pages"]
categories = ["博客建设"]
series = ["个人博客搭建"]
slug = "hugo-blog-setup"
toc = true
+++

## 背景

我希望博客能长期维护，文章源文件可以直接用 Git 管理，部署流程尽量简单，所以选择了 Hugo、Markdown 和 GitHub Pages。

这一套方案的核心好处是：文章就是普通 Markdown 文件，构建结果是静态页面，不依赖数据库，也方便以后迁移。

## 第一版目标

第一版不追求复杂功能，先完成几个基础能力：

- 可以本地预览文章
- 可以用 Markdown 写作
- 有首页、文章列表、关于页和项目页
- 推送到 GitHub 后能自动部署
- 站点结构清晰，后续容易扩展

## 项目结构

当前项目采用 Hugo 标准结构：

```txt
content/   # 页面和文章
layouts/   # 自定义模板
assets/    # Hugo 处理的 CSS
static/    # 原样复制的图片和图标
```

没有引入外部主题，主要是为了减少初始依赖。等站点稳定后，再决定是否接入主题或继续维护自定义模板。

## 发布流程

写文章时先使用草稿状态：

```bash
hugo new content posts/my-new-post.md
hugo server -D
```

确认内容、图片、链接和排版都没问题后，再把 `draft` 改为 `false`，提交并推送到 GitHub。

## 小结

个人博客最重要的不是功能复杂，而是能稳定写、稳定发布、稳定维护。先让系统跑起来，再逐步加入搜索、评论、统计和自定义域名。

+++
title = "GitHub Pages 部署前检查清单"
date = 2026-05-18T09:20:00+08:00
draft = false
description = "整理 Hugo 博客发布到 GitHub Pages 之前最容易遗漏的检查项。"
tags = ["GitHub Pages", "GitHub Actions", "部署"]
categories = ["博客建设"]
series = ["个人博客搭建"]
slug = "github-pages-deploy-checklist"
toc = true
+++

## 配置检查

部署前先确认 `hugo.toml` 中的站点地址、语言、标题和分页配置。`baseURL` 会影响线上资源路径，尤其是样式和图片。

如果使用 GitHub Pages 的用户站点，常见地址是：

```toml
baseURL = "https://username.github.io/"
```

如果使用项目站点，则通常需要带上仓库名。

## 内容检查

发布前至少检查这些内容：

- 首页能说明博客主题
- About 页面不是空白
- 至少有几篇正式文章
- 文章 `draft = false`
- 日期不是未来时间
- 图片路径大小写一致
- 没有提交私钥、邮箱明文或私人照片

## Actions 检查

GitHub 仓库的 Pages Source 需要选择 GitHub Actions。工作流构建时要安装 Hugo Extended，并上传 `public` 目录作为 Pages artifact。

常用构建命令是：

```bash
hugo --gc --minify
```

## 小结

部署问题通常不是 Hugo 本身复杂，而是路径、草稿状态、Actions 权限和 Pages 设置容易漏。上线前做一次清单检查，可以省掉很多排查时间。

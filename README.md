# Yun 的个人博客

这是一个基于 Hugo、Markdown、GitHub Pages 和 GitHub Actions 的个人博客项目，重点栏目包括嵌入式 Linux、C 语言、AI 和研究课题。

## 本地开发

先安装 Hugo Extended，然后运行：

```bash
hugo server -D
```

访问：

```txt
http://localhost:1313/
```

## 写文章

```bash
hugo new content posts/my-new-post.md
```

编辑文章 Front Matter，发布时将 `draft` 改为 `false`。

栏目文章可以放在对应目录：

```txt
content/embedded-linux/
content/c-language/
content/ai/
content/research/
```

当前栏目进一步拆成子栏目：

```txt
content/embedded-linux/boot-system/
content/embedded-linux/drivers-dts/
content/embedded-linux/debug-performance/
content/c-language/pointer-memory/
content/c-language/module-interface/
content/c-language/debug-quality/
content/ai/model-basics/
content/ai/prompt-agents/
content/ai/ai-engineering/
content/research/topic-literature/
content/research/experiment-reproduction/
content/research/writing-review/
```

可以使用对应 archetype 创建草稿：

```bash
hugo new --kind embedded-linux content/embedded-linux/boot-system/new-note.md
hugo new --kind c-language content/c-language/pointer-memory/new-note.md
hugo new --kind ai content/ai/prompt-agents/new-note.md
hugo new --kind research content/research/topic-literature/new-note.md
```

## 构建

```bash
hugo --gc --minify
```

构建输出位于 `public/`，不要手动修改该目录。

## 部署

仓库推送到 GitHub 后，在 Settings → Pages 中将 Source 设置为 GitHub Actions。之后推送 `main` 分支会自动构建并部署。

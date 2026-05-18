+++
title = "C 语言指针与所有权笔记"
date = 2026-05-18T10:30:00+08:00
draft = false
description = "用所有权、借用和生命周期三个概念梳理 C 语言指针问题。"
tags = ["C", "指针", "内存管理"]
categories = ["C 语言"]
series = ["C 语言工程实践"]
slug = "pointer-and-ownership"
aliases = ["/c-language/pointer-and-ownership/"]
toc = true
+++

## 指针问题的本质

C 语言不会替我们记录对象归谁所有、什么时候释放、还能不能访问。很多指针 bug 表面是野指针、重复释放或内存泄漏，背后都是所有权边界不清楚。

写 C 代码时，可以主动给指针加上三类语义：

- 拥有：负责释放资源
- 借用：只临时使用，不释放
- 输出：函数负责写入结果

## 拥有型指针

拥有型指针通常来自 `malloc`、资源打开函数或创建函数。谁拥有它，谁就负责释放。

命名上可以用 `create/free`、`open/close` 成对出现：

```c
struct buffer *buffer_create(size_t size);
void buffer_destroy(struct buffer *buf);
```

这种接口比让调用者猜释放方式更稳。

## 借用型指针

借用型指针不应该被释放，也不应该长期保存到超过对象生命周期的地方。

函数参数里常见的 `const char *name` 多数是借用。加上 `const` 能明确函数不会修改传入内容。

## 输出参数

C 语言里常用输出参数返回多个结果。输出参数要说明是否允许为 `NULL`，以及失败时是否会被修改。

```c
int sensor_read(struct sensor *dev, int *value);
```

这个接口至少需要约定：`dev` 和 `value` 是否能为空，返回非零时 `value` 是否有效。

## 小结

指针本身只是地址。真正决定代码可靠性的，是所有权、生命周期和错误路径是否写清楚。
